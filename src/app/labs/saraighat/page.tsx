import type { Metadata } from "next";
import s from "../labs.module.css";
import { CONTACT } from "./doc";

export const metadata: Metadata = {
  title: "Saraighat: Battle of the Luit · OneHorn Labs",
  description:
    "A game about Lachit Barphukan and the Battle of Saraighat (1671), in Assamese and English, for Android and iPhone.",
  alternates: { canonical: "https://thebstar.com/labs/saraighat/" },
};

export default function SaraighatPage() {
  return (
    <div style={{ maxWidth: 820 }}>
      <p className={s.eyebrow} style={{ marginBottom: 20 }}>
        A game by OneHorn Labs · Android and iPhone
      </p>
      <h1
        className={s.display}
        style={{ fontWeight: 800, fontSize: "clamp(40px, 8vw, 84px)", lineHeight: 1.04, letterSpacing: "-0.02em", textWrap: "balance" }}
      >
        Saraighat: Battle of the Luit
      </h1>
      <p style={{ marginTop: 12, fontSize: "clamp(20px, 3vw, 26px)", color: "#D4AE5A" }}>শৰাইঘাট — লুইতৰ ৰণ</p>
      <p style={{ marginTop: 28, maxWidth: 640, fontSize: "clamp(18px, 2.4vw, 21px)", color: "#D6DCD3" }}>
        On Lachit Divas a Guwahati taxi driver, stuck on the Saraighat bridge, tells three travellers how Lachit
        Barphukan and the Ahom navy stopped the Mughal army on the Brahmaputra in 1671. His telling plays as
        narrated films, and every chapter of it you play: on foot, by stealth, and at the oars in the narrows.
        In Assamese and English.
      </p>
      <p style={{ marginTop: 20, maxWidth: 640, color: "#A9B5A8" }}>Coming soon to Google Play and the App Store.</p>
      <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: "12px 28px", fontWeight: 600 }}>
        <a href="/labs/saraighat/privacy/">Privacy policy</a>
        <a href="/labs/saraighat/delete-account/">Delete your account</a>
        <a href={`mailto:${CONTACT}`}>Contact</a>
      </div>
    </div>
  );
}
