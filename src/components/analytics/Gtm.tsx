"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function Gtm() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      setAllowed(localStorage.getItem("progesti_cookie_consent") === "accepted");
    } catch {
      setAllowed(false);
    }
    function onConsent(e: Event) {
      const detail = (e as CustomEvent).detail;
      setAllowed(detail === "accepted");
    }
    window.addEventListener("progesti-consent", onConsent);
    return () => window.removeEventListener("progesti-consent", onConsent);
  }, []);

  if (!GTM_ID || !allowed) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="gtm"
        />
      </noscript>
    </>
  );
}
