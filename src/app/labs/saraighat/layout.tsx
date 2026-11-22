import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import s from "../labs.module.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-atkinson",
});

/** The Saraighat pages: the OneHorn Labs look, with a way back to the lab and to the game's page. */
export default function SaraighatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bricolage.variable} ${atkinson.variable} ${s.root}`}>
      <div className={s.container}>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px 24px",
            paddingBlock: 24,
          }}
        >
          <a
            href="/labs/"
            style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#ECE7D8" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#D4AE5A" strokeWidth="2" />
              <path d="M13 29 C15 20, 20 13, 28 9 C25 16, 24 22, 25 29 Z" fill="#D4AE5A" />
            </svg>
            <span className={s.display} style={{ fontWeight: 700, fontSize: 20, letterSpacing: "0.01em" }}>
              OneHorn Labs
            </span>
          </a>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", fontSize: 16 }}>
            <a href="/labs/saraighat/" className={s.navLink}>Saraighat</a>
            <a href="/labs/saraighat/privacy/" className={s.navLink}>Privacy</a>
            <a href="/labs/saraighat/delete-account/" className={s.navLink}>Delete account</a>
          </div>
        </nav>
      </div>

      <main className={s.container} style={{ paddingTop: "clamp(24px, 5vw, 56px)", paddingBottom: "clamp(56px, 10vw, 96px)" }}>
        {children}
      </main>

      <footer style={{ borderTop: "1px solid #2A453A" }}>
        <div
          className={s.container}
          style={{
            paddingBlock: 28,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            fontSize: 14,
            color: "#A9B5A8",
          }}
        >
          <span>OneHorn Labs · Made in India</span>
          <span>
            <a href="/" style={{ fontWeight: 600 }}>
              A lab by Bikram Sutar
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
