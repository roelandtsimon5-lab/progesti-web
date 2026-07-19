"use client";

import { useEffect, useState } from "react";

const KEY = "progesti_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-[60] mx-auto max-w-xl rounded-2xl border border-line bg-white p-4 shadow-[0_20px_60px_rgba(11,21,36,0.18)] lg:bottom-6">
      <p className="text-sm text-anthracite">
        Nous utilisons des cookies de mesure d’audience (si GTM est configuré) pour améliorer le
        site. Vous pouvez accepter ou refuser.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-xl bg-navy px-4 py-2.5 text-sm font-bold text-white"
          onClick={() => choose("accepted")}
        >
          Accepter
        </button>
        <button
          type="button"
          className="rounded-xl border border-line px-4 py-2.5 text-sm font-bold text-ink"
          onClick={() => choose("rejected")}
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
