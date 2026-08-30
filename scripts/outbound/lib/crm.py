"""CRM SQLite local — persistance des statuts outbound."""

from __future__ import annotations

import sqlite3
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from lib.common import CACHE_DIR

DB_PATH = CACHE_DIR / "outbound.db"


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _connect() -> sqlite3.Connection:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS prospect_state (
            siren TEXT PRIMARY KEY,
            statut_outbound TEXT DEFAULT 'a_contacter',
            telephone TEXT DEFAULT '',
            email TEXT DEFAULT '',
            notes TEXT DEFAULT '',
            last_contact_at TEXT,
            updated_at TEXT
        );
        CREATE TABLE IF NOT EXISTS activity_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            siren TEXT NOT NULL,
            action TEXT NOT NULL,
            detail TEXT DEFAULT '',
            created_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_activity_created ON activity_log(created_at);
        """
    )
    return conn


def get_all_state() -> dict[str, dict[str, Any]]:
    conn = _connect()
    try:
        rows = conn.execute("SELECT * FROM prospect_state").fetchall()
        return {r["siren"]: dict(r) for r in rows}
    finally:
        conn.close()


def upsert_state(
    siren: str,
    *,
    statut_outbound: str | None = None,
    telephone: str | None = None,
    email: str | None = None,
    notes: str | None = None,
    action: str | None = None,
) -> dict[str, Any]:
    siren = str(siren).zfill(9)
    conn = _connect()
    try:
        existing = conn.execute(
            "SELECT * FROM prospect_state WHERE siren = ?", (siren,)
        ).fetchone()

        now = _now()
        if existing:
            fields = {
                "statut_outbound": statut_outbound if statut_outbound is not None else existing["statut_outbound"],
                "telephone": telephone if telephone is not None else existing["telephone"],
                "email": email if email is not None else existing["email"],
                "notes": notes if notes is not None else existing["notes"],
                "last_contact_at": now if action else existing["last_contact_at"],
                "updated_at": now,
            }
        else:
            fields = {
                "statut_outbound": statut_outbound or "a_contacter",
                "telephone": telephone or "",
                "email": email or "",
                "notes": notes or "",
                "last_contact_at": now if action else None,
                "updated_at": now,
            }

        conn.execute(
            """
            INSERT INTO prospect_state (siren, statut_outbound, telephone, email, notes, last_contact_at, updated_at)
            VALUES (:siren, :statut_outbound, :telephone, :email, :notes, :last_contact_at, :updated_at)
            ON CONFLICT(siren) DO UPDATE SET
                statut_outbound = excluded.statut_outbound,
                telephone = excluded.telephone,
                email = excluded.email,
                notes = excluded.notes,
                last_contact_at = COALESCE(excluded.last_contact_at, prospect_state.last_contact_at),
                updated_at = excluded.updated_at
            """,
            {"siren": siren, **fields},
        )

        if action:
            conn.execute(
                "INSERT INTO activity_log (siren, action, detail, created_at) VALUES (?, ?, ?, ?)",
                (siren, action, statut_outbound or "", now),
            )
        conn.commit()
        return fields
    finally:
        conn.close()


def session_stats() -> dict[str, int]:
    """Stats d'activite pour la journee UTC."""
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    conn = _connect()
    try:
        rows = conn.execute(
            """
            SELECT action, COUNT(*) as n FROM activity_log
            WHERE created_at LIKE ?
            GROUP BY action
            """,
            (f"{today}%",),
        ).fetchall()
        stats = {r["action"]: r["n"] for r in rows}
        stats["total"] = sum(stats.values())
        return stats
    finally:
        conn.close()


def export_state_csv(path: Path) -> int:
    """Exporte tous les statuts CRM en CSV."""
    import csv

    state = get_all_state()
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["siren", "statut_outbound", "telephone", "email", "notes", "last_contact_at"],
            delimiter=";",
        )
        w.writeheader()
        for siren, row in sorted(state.items()):
            w.writerow({"siren": siren, **{k: row.get(k, "") for k in w.fieldnames if k != "siren"}})
    return len(state)
