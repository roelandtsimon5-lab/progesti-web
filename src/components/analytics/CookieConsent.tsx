"use client";

import { useEffect, useState } from "react";

const KEY = "progesti_cookie_consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent("progesti-consent", { detail: value }));
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed bottom-[5.25rem] left-4 right-4 z-[45] mx-auto max-w-xl rounded-[3px] border border-blue-mist bg-white p-4 shadow-[0_20px_60px_rgba(11,61,110,0.18)] lg:bottom-6 lg:z-[60]"
    >
      <p id="cookie-consent-title" className="font-display text-sm font-bold text-blue-deep">
        Cookies de mesure
      </p>
      <p id="cookie-consent-desc" className="mt-1 text-sm text-slate">
        Nous utilisons des cookies de mesure d&apos;audience (si GTM est configuré) pour améliorer le
        site. Vous pouvez accepter ou refuser.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-[2px] bg-blue-deep px-4 py-2.5 text-sm font-bold text-white outline-none transition hover:bg-blue-royal focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2"
          onClick={() => choose("accepted")}
        >
          Accepter
        </button>
        <button
          type="button"
          className="rounded-[2px] border border-blue-mist px-4 py-2.5 text-sm font-bold text-blue-deep outline-none transition hover:bg-blue-sky focus-visible:ring-2 focus-visible:ring-blue-royal focus-visible:ring-offset-2"
          onClick={() => choose("rejected")}
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
