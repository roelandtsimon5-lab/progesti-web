import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** Hub preview sans header/footer du site (comme les LP ads). */
export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        body > header,
        body > footer,
        .mobile-cta {
          display: none !important;
        }
        body > div.fixed {
          display: none !important;
        }
        #contenu-principal {
          min-height: 100vh;
        }
      `}</style>
      {children}
    </>
  );
}
