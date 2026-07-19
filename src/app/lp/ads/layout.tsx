import type { ReactNode } from "react";

export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        body > header,
        body > footer,
        .mobile-cta {
          display: none !important;
        }
        /* hide cookie banner on ads */
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
      {children}
    </>
  );
}
