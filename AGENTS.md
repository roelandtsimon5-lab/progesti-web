<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This repo is a single Next.js 16 marketing site (PROGESTI). Standard commands live in `package.json` (`dev`, `build`, `start`, `lint`) and `README.md`.

- The Next.js app is at the repo root. Ignore the `cd web` line in `README.md`; there is no `web/` subdirectory (the package is just named `web`). Run all commands from the root.
- No `.env.example` exists despite the README referencing one. Every env var is optional and has a default in `src/lib/env.ts`, so the app runs with zero configuration. Only add env vars (e.g. `RESEND_API_KEY`, `BREVO_API_KEY`, `LEAD_WEBHOOK_URL`) when testing the actual email/SMS/webhook integrations.
- Dev server: `npm run dev` (Turbopack) serves on `http://localhost:3000`.
- Lead capture (`POST /api/lead`, used by the trial/demo/contact forms) appends each lead to `.data/leads.jsonl` (gitignored). Without notification keys the email/SMS channels return `skipped`, which is expected — the lead is still persisted, so this file is the quickest way to confirm the flow works.
- The trial/demo/login CTAs redirect to the external SaaS app at `NEXT_PUBLIC_AUTH_URL` (default `https://app.progesti.fr`). That app is a separate service not in this repo; the redirect leaving the local site after form submit is normal.
- `npm run lint` reports pre-existing errors in `src/components/product/ProductShell.tsx` (react-hooks/set-state-in-effect) and so exits non-zero. These are unrelated to environment setup.
