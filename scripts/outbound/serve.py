#!/usr/bin/env python3
"""Serveur local + API CRM pour le cockpit outbound Progesti."""

from __future__ import annotations

import argparse
import json
import socketserver
import webbrowser
from http.server import SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlparse

from lib.common import OUTPUT_DIR
from lib.crm import export_state_csv, get_all_state, session_stats, upsert_state

ROOT = Path(__file__).resolve().parent
PORT_DEFAULT = 8765


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt: str, *args) -> None:
        if str(args[0]).startswith("GET /api/") or str(args[0]).startswith("POST /api/"):
            super().log_message(fmt, *args)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def _json_response(self, data: object, status: int = 200) -> None:
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b"{}"
        return json.loads(raw.decode("utf-8"))

    def do_GET(self) -> None:
        path = urlparse(self.path).path

        if path == "/api/manifest":
            manifest_path = OUTPUT_DIR / "manifest.json"
            if manifest_path.exists():
                self._json_response(json.loads(manifest_path.read_text(encoding="utf-8")))
            else:
                self._json_response({"error": "no manifest"}, 404)
            return

        if path == "/api/state":
            self._json_response(get_all_state())
            return

        if path == "/api/session":
            self._json_response(session_stats())
            return

        if path.startswith("/output/"):
            rel = path[len("/output/") :]
            file_path = OUTPUT_DIR / rel
            if file_path.exists() and file_path.is_file():
                self.path = f"/output/{rel}"
                # Serve from ROOT but file is in OUTPUT_DIR — redirect path
                self.send_response(200)
                suffix = file_path.suffix.lower()
                ctype = "application/json" if suffix == ".json" else "text/csv; charset=utf-8"
                body = file_path.read_bytes()
                self.send_header("Content-Type", ctype)
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            self.send_error(404)
            return

        super().do_GET()

    def do_POST(self) -> None:
        path = urlparse(self.path).path

        if path == "/api/state":
            data = self._read_json()
            siren = data.get("siren")
            if not siren:
                self._json_response({"error": "siren required"}, 400)
                return
            result = upsert_state(
                siren,
                statut_outbound=data.get("statut_outbound"),
                telephone=data.get("telephone"),
                email=data.get("email"),
                notes=data.get("notes"),
                action=data.get("action"),
            )
            self._json_response({"ok": True, "state": result})
            return

        if path == "/api/export-crm":
            out = OUTPUT_DIR / "crm_export.csv"
            n = export_state_csv(out)
            self._json_response({"ok": True, "path": str(out), "count": n})
            return

        if path == "/api/sync":
            from lib.sync import latest_enriched_csv, sync_exports

            latest = latest_enriched_csv(OUTPUT_DIR)
            if not latest:
                self._json_response({"error": "no export"}, 404)
                return
            result = sync_exports(latest)
            self._json_response({"ok": True, "files": {k: v.name for k, v in result.items()}})
            return

        self.send_error(404)


class ThreadedServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


def main() -> None:
    p = argparse.ArgumentParser(description="Cockpit outbound Progesti")
    p.add_argument("--port", type=int, default=PORT_DEFAULT)
    p.add_argument("--no-open", action="store_true")
    args = p.parse_args()

    # Rafraichir manifest si besoin
    from lib.sync import latest_enriched_csv

    latest = latest_enriched_csv(OUTPUT_DIR)
    if latest:
        json_p = latest.with_suffix(".json")
        xlsx_p = latest.with_suffix(".xlsx")
        if json_p.exists():
            import json as _json
            from lib.export import write_manifest

            count = len(_json.loads(json_p.read_text(encoding="utf-8")))
            queue = latest.with_name(latest.stem + "_queue30.json")
            write_manifest(
                latest,
                xlsx_p if xlsx_p.exists() else None,
                json_p,
                queue if queue.exists() else None,
                count=count,
            )

    url = f"http://localhost:{args.port}/dashboard/?focus=1"
    with ThreadedServer(("", args.port), Handler) as httpd:
        print(f"Cockpit outbound : {url}")
        print("API CRM : /api/state | /api/session")
        print("Ctrl+C pour arreter")
        if not args.no_open:
            webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nArrete.")


if __name__ == "__main__":
    main()
