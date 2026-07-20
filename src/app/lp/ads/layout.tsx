import type { ReactNode } from "react";
import { Suspense } from "react";
import { AdsGtmConsent } from "@/components/analytics/Gtm";
import { PreviewBackBar } from "@/components/preview/PreviewBackBar";

export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdsGtmConsent />
      <style>{`
        body > header,
        body > footer,
        .mobile-cta {
          display: none !important;
        }
        /* hide cookie banner on ads — mesure activée via AdsGtmConsent */
        body > div.fixed {
          display: none !important;
        }
        /* except our ads sticky which is inside #contenu-principal */
        #contenu-principal .fixed {
          display: block !important;
        }
        #contenu-principal .fixed.border-t {
          display: block !important;
        }
        #contenu-principal {
          min-height: 100vh;
        }
      `}</style>
      <Suspense fallback={null}>
        <PreviewBackBar />
      </Suspense>
      {children}
    </>
  );
}
