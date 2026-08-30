#!/usr/bin/env python3
"""
Point d'entree unique outbound Progesti.

  python prospects.py call      # Session d'appels (smart + cockpit)
  python prospects.py sync      # Sauvegarder CRM -> fichiers
  python prospects.py report    # Rapport HTML de la session
  python prospects.py stats     # Stats rapides
"""

from __future__ import annotations

import argparse
import subprocess
import sys
import webbrowser
from datetime import datetime, timezone
from pathlib import Path

from lib.common import OUTPUT_DIR
from lib.crm import get_all_state, session_stats
from lib.enrichment import enrichment_status, needs_enrichment, pct_bar
from lib.sync import latest_enriched_csv, sync_exports

SCRIPT_DIR = Path(__file__).resolve().parent


def log(msg: str) -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    print(msg, flush=True)


def cmd_call(args: argparse.Namespace) -> int:
    cmd = [sys.executable, str(SCRIPT_DIR / "pipeline.py"), "call", "--skip-download"]
    if args.force:
        cmd.append("--force")
    if args.limit:
        cmd.extend(["--limit", str(args.limit)])
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)

    if not args.no_serve:
        serve_cmd = [sys.executable, str(SCRIPT_DIR / "serve.py")]
        if args.no_open:
            serve_cmd.append("--no-open")
        subprocess.run(serve_cmd, cwd=SCRIPT_DIR)
    return 0


def cmd_sync(_: argparse.Namespace) -> int:
    path = latest_enriched_csv(OUTPUT_DIR)
    if not path:
        log("Aucun export enrichi trouve dans output/")
        return 1
    result = sync_exports(path)
    state = get_all_state()
    log(f"Sync OK : {len(state)} statuts CRM -> {result['json'].name}")
    return 0


def cmd_stats(_: argparse.Namespace) -> int:
    state = get_all_state()
    session = session_stats()
    path = latest_enriched_csv(OUTPUT_DIR)

    log("=== Stats outbound Progesti ===\n")
    if path:
        log(f"Dernier export : {path.name}")
    log(f"Prospects suivis (CRM) : {len(state)}")

    by_status: dict[str, int] = {}
    for row in state.values():
        st = row.get("statut_outbound") or "a_contacter"
        by_status[st] = by_status.get(st, 0) + 1

    if by_status:
        log("\nPar statut :")
        for st, n in sorted(by_status.items(), key=lambda x: -x[1]):
            log(f"  {st:25} {n:4}")

    if session.get("total"):
        log(f"\nSession aujourd'hui : {session['total']} actions")
        for action, n in session.items():
            if action != "total":
                log(f"  {action}: {n}")

    demos = by_status.get("demo_planifiee", 0)
    contacted = sum(
        n for st, n in by_status.items() if st not in ("a_contacter",)
    )
    if state:
        log(f"\nTaux contact : {contacted}/{len(state)} ({contacted*100//len(state)}%)")
        log(f"Demos planifiees : {demos}")
    return 0


def cmd_status(_: argparse.Namespace) -> int:
    path = latest_enriched_csv(OUTPUT_DIR)
    if not path:
        log("Aucun export enrichi dans output/")
        log("Lancez : python prospects.py enrich")
        return 1

    status = enrichment_status(path)
    log("=== Enrichissement ===\n")
    log(pct_bar(status["pct"]))
    log("")
    log(f"  Dirigeants     : {status['pct']:.1f}%  ({status['with_dirigeant']:,} / {status['total']:,})")
    log(f"  Reste API      : {status['remaining_pct']:.1f}%")
    log(f"  A/B a appeler  : {status['callable_ab_pct']:.1f}%  ({status['callable_ab']:,} prospects)")

    if needs_enrichment(path):
        remaining = status["total"] - status["with_dirigeant"]
        mins = max(1, remaining // 360)
        log(f"\nObjectif 100% : python prospects.py max  (~{mins} min si API OK)")
    else:
        log("\n100% — Pret a appeler : python prospects.py call")
    return 0


def cmd_nonstop(args: argparse.Namespace) -> int:
    csv_path = OUTPUT_DIR / "proprete_idf_20260826.csv"
    if not csv_path.exists():
        candidates = [p for p in OUTPUT_DIR.glob("proprete_idf_*.csv") if "_enrichi" not in p.name]
        csv_path = max(candidates, key=lambda p: p.stat().st_mtime, default=None) if candidates else None
    if not csv_path or not csv_path.exists():
        log("Aucun CSV IDF. Lancez : python pipeline.py idf")
        return 1

    enriched_path = csv_path.with_name(csv_path.stem + "_enrichi.csv")
    target = args.target if hasattr(args, "target") and args.target else 95.0
    pause = args.pause if hasattr(args, "pause") and args.pause else 30
    round_num = 0

    log("=== Enrichissement NON-STOP ===")
    log(f"Objectif : {target:.0f}% | pause entre tours : {pause}s")
    log("Ctrl+C pour arreter\n")

    import time

    try:
        while True:
            round_num += 1
            status = enrichment_status(enriched_path)
            log(f"--- Tour {round_num} ---")
            log(pct_bar(status["pct"]))
            log(f"  {status['pct']:.1f}% ({status['with_dirigeant']:,}/{status['total']:,})")

            if status["pct"] >= target:
                log(f"\nObjectif {target:.0f}% atteint.")
                cmd_sync(args)
                break

            cmd = [
                sys.executable,
                str(SCRIPT_DIR / "enrich_prospects.py"),
                str(csv_path),
                "--max",
                "--excel",
            ]
            subprocess.run(cmd, cwd=SCRIPT_DIR)
            cmd_sync(args)

            status = enrichment_status(enriched_path)
            log(f"  Apres tour : {status['pct']:.1f}%\n")

            if status["pct"] >= target:
                log(f"Objectif {target:.0f}% atteint.")
                break

            log(f"Pause {pause}s avant prochain tour…")
            time.sleep(pause)
    except KeyboardInterrupt:
        log("\nArrete par l'utilisateur.")

    status = enrichment_status(enriched_path)
    log(f"\n{pct_bar(status['pct'])}")
    log(f"Final : {status['pct']:.1f}% ({status['with_dirigeant']:,}/{status['total']:,})")
    return 0


def cmd_max(args: argparse.Namespace) -> int:
    csv_path = OUTPUT_DIR / "proprete_idf_20260826.csv"
    if not csv_path.exists():
        candidates = [p for p in OUTPUT_DIR.glob("proprete_idf_*.csv") if "_enrichi" not in p.name]
        csv_path = max(candidates, key=lambda p: p.stat().st_mtime, default=None) if candidates else None
    if not csv_path or not csv_path.exists():
        log("Aucun CSV IDF. Lancez : python pipeline.py idf")
        return 1

    log("=== Enrichissement MAX (jusqu'a 100% dirigeants) ===\n")
    cmd = [
        sys.executable,
        str(SCRIPT_DIR / "enrich_prospects.py"),
        str(csv_path),
        "--max",
        "--excel",
    ]
    if args.limit:
        cmd.extend(["--limit", str(args.limit)])
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)
    cmd_sync(args)
    status = enrichment_status(csv_path.with_name(csv_path.stem + "_enrichi.csv"))
    log(f"\n{pct_bar(status['pct'])}")
    log(f"Termine : {status['pct']:.1f}% ({status['with_dirigeant']:,}/{status['total']:,})")
    return 0


def cmd_enrich(args: argparse.Namespace) -> int:
    csv_path = latest_enriched_csv(OUTPUT_DIR)
    if csv_path:
        csv_path = csv_path.with_name(csv_path.name.replace("_enrichi", ""))
    if not csv_path or not csv_path.exists():
        candidates = list(OUTPUT_DIR.glob("proprete_idf_*.csv"))
        csv_path = max(
            (p for p in candidates if "_enrichi" not in p.name),
            key=lambda p: p.stat().st_mtime,
            default=None,
        )
    if not csv_path:
        log("Aucun CSV IDF trouve. Lancez : python pipeline.py idf")
        return 1

    cmd = [sys.executable, str(SCRIPT_DIR / "enrich_prospects.py"), str(csv_path), "--max", "--excel"]
    if args.limit:
        cmd.extend(["--limit", str(args.limit)])
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)
    return 0


def cmd_rebuild(_: argparse.Namespace) -> int:
    cmd = [sys.executable, str(SCRIPT_DIR / "pipeline.py"), "call", "--skip-download"]
    subprocess.run(cmd, check=True, cwd=SCRIPT_DIR)
    path = latest_enriched_csv(OUTPUT_DIR)
    if path:
        status = enrichment_status(path)
        log(f"Rebuild OK : {status['pct']:.1f}% ({status['with_dirigeant']:,} dirigeants)")
    return 0


def cmd_setup(_: argparse.Namespace) -> int:
    subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"], check=True, cwd=SCRIPT_DIR)
    log("Installation OK. Lancez : python prospects.py call")
    log("Ou double-cliquez : APPELER.bat")
    return 0


def cmd_finish(args: argparse.Namespace) -> int:
    log("=== Fin de journee ===\n")
    cmd_sync(args)
    cmd_stats(args)
    return cmd_report(args)


def cmd_report(args: argparse.Namespace) -> int:
    state = get_all_state()
    session = session_stats()
    path = latest_enriched_csv(OUTPUT_DIR)
    out = OUTPUT_DIR / f"rapport_{datetime.now(timezone.utc).strftime('%Y%m%d')}.html"

    rows_html = ""
    for siren, row in sorted(state.items(), key=lambda x: x[1].get("updated_at") or "", reverse=True)[
        :50
    ]:
        rows_html += f"""<tr>
          <td>{siren}</td>
          <td>{row.get('statut_outbound','')}</td>
          <td>{row.get('telephone','')}</td>
          <td>{row.get('email','')}</td>
          <td>{row.get('notes','')}</td>
          <td>{row.get('last_contact_at','')[:16]}</td>
        </tr>"""

    html = f"""<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><title>Rapport Outbound Progesti</title>
<style>
body{{font-family:system-ui;background:#0f172a;color:#f1f5f9;padding:2rem}}
h1 span{{color:#3b82f6}} table{{width:100%;border-collapse:collapse;margin-top:1rem}}
th,td{{border:1px solid #334155;padding:.5rem;text-align:left;font-size:.85rem}}
th{{background:#1e293b}} .stats{{display:flex;gap:1rem;margin:1rem 0}}
.stat{{background:#1e293b;padding:1rem;border-radius:8px;border:1px solid #334155}}
</style></head><body>
<h1><span>Progesti</span> Rapport outbound</h1>
<p>Genere le {datetime.now().strftime('%d/%m/%Y %H:%M')}</p>
<div class="stats">
  <div class="stat"><b>{len(state)}</b><br>prospects suivis</div>
  <div class="stat"><b>{session.get('total',0)}</b><br>actions aujourd'hui</div>
  <div class="stat"><b>{session.get('demo',0)}</b><br>demos</div>
</div>
<p>Export : {path.name if path else 'N/A'}</p>
<h2>Derniers contacts</h2>
<table><tr><th>SIREN</th><th>Statut</th><th>Tel</th><th>Email</th><th>Notes</th><th>Dernier contact</th></tr>
{rows_html or '<tr><td colspan=6>Aucune activite</td></tr>'}
</table></body></html>"""

    out.write_text(html, encoding="utf-8")
    log(f"Rapport : {out}")
    if not args.no_open:
        webbrowser.open(out.as_uri())
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description="Outbound Progesti — commande unique")
    sub = p.add_subparsers(dest="command", required=True)

    call_p = sub.add_parser("call", help="Lancer session d'appels")
    call_p.add_argument("--force", action="store_true")
    call_p.add_argument("--limit", type=int)
    call_p.add_argument("--no-serve", action="store_true")
    call_p.add_argument("--no-open", action="store_true")

    sub.add_parser("sync", help="Sauvegarder CRM dans les exports")
    sub.add_parser("stats", help="Afficher les statistiques")
    sub.add_parser("status", help="Etat enrichissement (dirigeants)")

    enrich_p = sub.add_parser("enrich", help="Enrichir via API gouv.fr")
    enrich_p.add_argument("--limit", type=int)

    max_p = sub.add_parser("max", help="Enrichissement maximum (tous les SIREN)")
    max_p.add_argument("--limit", type=int)

    loop_p = sub.add_parser("loop", help="Enrichissement non-stop jusqu'a l'objectif %")
    loop_p.add_argument("--target", type=float, default=95.0, help="Objectif % (defaut: 95)")
    loop_p.add_argument("--pause", type=int, default=30, help="Pause entre tours en secondes")

    sub.add_parser("rebuild", help="Reconstruire exports depuis le cache local")

    sub.add_parser("setup", help="Installer les dependances")
    finish_p = sub.add_parser("finish", help="Fin de journee : sync + stats + rapport")
    finish_p.add_argument("--no-open", action="store_true")

    report_p = sub.add_parser("report", help="Rapport HTML")
    report_p.add_argument("--no-open", action="store_true")

    args = p.parse_args()
    try:
        if args.command == "call":
            return cmd_call(args)
        if args.command == "sync":
            return cmd_sync(args)
        if args.command == "stats":
            return cmd_stats(args)
        if args.command == "status":
            return cmd_status(args)
        if args.command == "enrich":
            return cmd_enrich(args)
        if args.command == "max":
            return cmd_max(args)
        if args.command == "loop":
            return cmd_nonstop(args)
        if args.command == "rebuild":
            return cmd_rebuild(args)
        if args.command == "setup":
            return cmd_setup(args)
        if args.command == "finish":
            return cmd_finish(args)
        if args.command == "report":
            return cmd_report(args)
    except subprocess.CalledProcessError as exc:
        return exc.returncode or 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
