"use client";

import Link from "next/link";
import { useRef } from "react";
import type { NavIcon, NavMegaMenu } from "@/lib/navigation";

function MenuIcon({ icon }: { icon?: NavIcon }) {
  if (!icon) return null;
  const cls = "h-5 w-5 shrink-0 text-blue-royal/80";
  switch (icon) {
    case "planning":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "pointage":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10Z" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
      );
    case "clients":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17 8h4M19 6v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "devis":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 3v4h4M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "facturation":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="6" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "impayes":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v18M7 8h6a3 3 0 0 1 0 6H9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "rh":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "rentabilite":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 15V9M12 15V7M16 15v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "crm":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 6h16M4 12h10M4 18h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="19" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

type MegaMenuPanelProps = {
  menu: NavMegaMenu;
  open: boolean;
  onClose: () => void;
  dark?: boolean;
  panelId: string;
};

export function MegaMenuPanel({ menu, open, onClose, dark, panelId }: MegaMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id={panelId}
      className="w-full"
      role="navigation"
      aria-label={menu.label}
    >
      <div className="border-t border-blue-mist/80 bg-white shadow-[0_24px_64px_rgba(11,61,110,0.14)] mega-menu-enter motion-reduce:animate-none">
        <div className="container py-8">
          <div
            className={`grid gap-8 ${
              menu.columns.length >= 3
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {menu.columns.map((col, ci) => (
              <div key={col.title ?? ci}>
                {col.title ? (
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-royal">
                    {col.title}
                  </p>
                ) : null}
                <ul className="space-y-0.5">
                  {col.items.map((item) => (
                    <li key={item.href + item.label}>
                      <Link
                        href={item.href}
                        className="group flex gap-3 rounded-[2px] px-2 py-2.5 transition hover:bg-lime-cta/15"
                        onClick={onClose}
                      >
                        <MenuIcon icon={item.icon} />
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-blue-deep group-hover:text-blue-royal">
                            {item.label}
                          </span>
                          {item.hint ? (
                            <span className="mt-0.5 block text-xs leading-snug text-slate">{item.hint}</span>
                          ) : null}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {menu.footer.length > 0 ? (
          <div className="border-t border-blue-mist/70 bg-blue-sky/40">
            <div className="container flex flex-wrap items-center gap-x-6 gap-y-2 py-3.5 text-sm">
              {menu.footer.map((link, i) => (
                <span key={link.href + link.label} className="inline-flex items-center gap-2">
                  {i > 0 ? <span className="hidden text-blue-mist sm:inline" aria-hidden>|</span> : null}
                  <Link
                    href={link.href}
                    className="font-semibold text-blue-royal hover:underline"
                    onClick={onClose}
                  >
                    {link.label}
                    {link.badge ? (
                      <span className="ml-1.5 rounded-[2px] bg-lime-cta px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-blue-deep">
                        {link.badge}
                      </span>
                    ) : null}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type MegaMenuTriggerProps = {
  menu: NavMegaMenu;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  dark?: boolean;
  activePath?: string;
  panelId: string;
};

export function MegaMenuTrigger({
  menu,
  open,
  onToggle,
  onOpen,
  dark,
  activePath,
  panelId,
}: MegaMenuTriggerProps) {
  const isActive =
    activePath === menu.href || activePath?.startsWith(`${menu.href}/`) || open;

  return (
    <div onMouseEnter={onOpen}>
      <button
        type="button"
        className={
          dark
            ? `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 ${
                isActive ? "text-white" : "text-white/80 hover:text-white"
              }`
            : `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold outline-none transition hover:bg-blue-sky focus-visible:ring-2 focus-visible:ring-blue-royal ${
                isActive ? "text-blue-deep" : "text-slate hover:text-blue-deep"
              }`
        }
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={onToggle}
      >
        {menu.label}
        <svg
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
