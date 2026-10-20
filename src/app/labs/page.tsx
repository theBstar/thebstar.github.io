import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque } from "next/font/google";
import s from "./labs.module.css";

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

export const metadata: Metadata = {
  title: "OneHorn Labs",
  description:
    "A small, independent lab from India making things for everyday life: sticking to your health goals, better screen time for kids, and the stories of where you come from.",
  alternates: {
    canonical: "https://thebstar.com/labs",
  },
  openGraph: {
    title: "OneHorn Labs",
    description: "Meaningful ventures, built for people we know.",
    url: "https://thebstar.com/labs",
    siteName: "OneHorn Labs",
    locale: "en_US",
    type: "website",
  },
};

type Venture = {
  kicker: string;
  status: string;
  live?: boolean;
  name: string;
  body: string;
  note: string;
  cta: string;
  href?: string;
};

const ventures: Venture[] = [
  {
    kicker: "If you have a plan",
    status: "In testing",
    live: true,
    name: "Ojas",
    body: "You make a plan to train, eat better or study, and by week two it starts slipping. Ojas calls you once a day, asks how it went, and adjusts the plan with you. It takes a few seconds.",
    note: "Being tested now by a group training for HYROX.",
    cta: "Get early access →",
  },
  {
    kicker: "If you're a parent",
    status: "In the works",
    name: "Suvi",
    body: "Screen time your child can actually grow with.",
    note: "Shaped by workshops with 100+ kids since 2024.",
    cta: "Join the waitlist →",
    href: "https://mysuvi.com/",
  },
  {
    kicker: "If you love a good story",
    status: "In the works",
    name: "Saraighat",
    body: "Sail with the Ahom navy on the Brahmaputra in 1671 and play the battle where Lachit Borphukan stopped the Mughal army.",
    note: "A third-person game you can play in your browser.",
    cta: "Follow the game →",
  },
];

const updates = [
  {
    date: "Sep 2026",
    text: "Ojas grows from a HYROX tracker into a daily check-in coach for any plan you make.",
  },
  { date: "15 Apr 2026", text: "OneHorn Labs begins." },
];

const sectionPad = (min: number, vw: number, max: number) => ({
  paddingTop: `clamp(${min}px, ${vw}vw, ${max}px)`,
  paddingBottom: `clamp(${min}px, ${vw}vw, ${max}px)`,
});

export default function LabsPage() {
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
            href="#top"
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
            <a href="#ventures" className={s.navLink}>What we make</a>
            <a href="#name" className={s.navLink}>Our name</a>
            <a href="#log" className={s.navLink}>Updates</a>
            <a href="#join" className={s.navLink}>Join us</a>
          </div>
        </nav>

        <header
          id="top"
          style={{
            paddingTop: "clamp(32px, 7vw, 72px)",
            paddingBottom: "clamp(56px, 10vw, 96px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "flex-end",
          }}
        >
          <div style={{ flex: "999 1 560px", minWidth: 0 }}>
            <p className={s.eyebrow} style={{ marginBottom: 24 }}>
              OneHorn Labs · Kaziranga · 26.58° N, 93.17° E · India
            </p>
            <h1
              className={s.display}
              style={{
                fontWeight: 800,
                fontSize: "clamp(40px, 8.5vw, 88px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Meaningful ventures, built for people we know.
            </h1>
            <p style={{ marginTop: 32, maxWidth: 640, fontSize: "clamp(18px, 2.4vw, 21px)", color: "#D6DCD3" }}>
              We&apos;re a small, independent lab from India. We make things for everyday life: sticking to your
              health goals, giving your kids better time on screens, and knowing the stories of where you come from.
              If one of those sounds like you, we&apos;re building it for you.
            </p>
            <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16 }}>
              <a
                href="#ventures"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 48,
                  padding: "0 20px",
                  background: "#D4AE5A",
                  color: "#10201A",
                  borderRadius: 999,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                See what we&apos;re making
              </a>
              <a
                href="#join"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 48,
                  padding: "0 20px",
                  border: "1px solid #A9B5A8",
                  color: "#ECE7D8",
                  borderRadius: 999,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Get early access
              </a>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 260px",
              minWidth: 0,
              borderTop: "1px solid #2A453A",
              paddingTop: 20,
              fontSize: 15,
              color: "#A9B5A8",
            }}
          >
            <p className={s.eyebrow} style={{ marginBottom: 8, letterSpacing: "0.1em" }}>
              Since 15 April 2026
            </p>
            <p>
              Named after the one-horned rhino of Assam. <a href="#name">Why the rhino →</a>
            </p>
          </div>
        </header>
      </div>

      <section id="ventures" className={s.band}>
        <div className={s.container} style={sectionPad(56, 9, 88)}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <h2
              className={s.display}
              style={{ fontWeight: 700, fontSize: "clamp(30px, 5vw, 40px)", letterSpacing: "-0.015em", lineHeight: 1.15 }}
            >
              What we&apos;re making for you
            </h2>
            <p style={{ fontSize: 15, color: "#A9B5A8" }}>Pick the one that sounds like your life.</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 24,
            }}
          >
            {ventures.map((v) => (
              <article key={v.name} className={s.card}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  <span className={s.cardKicker}>{v.kicker}</span>
                  <span className={v.live ? `${s.badge} ${s.badgeSolid}` : s.badge}>{v.status}</span>
                </div>
                <h3 className={s.display} style={{ fontWeight: 700, fontSize: 32 }}>
                  {v.name}
                </h3>
                <p style={{ color: "#D6DCD3" }}>{v.body}</p>
                <p style={{ fontSize: 15, color: "#A9B5A8" }}>{v.note}</p>
                <a href={v.href ?? "#join"} style={{ marginTop: "auto", fontWeight: 600, fontSize: 15 }}>
                  {v.cta}
                </a>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              border: "1px dashed #2A453A",
              borderRadius: 6,
              padding: "20px clamp(20px, 4vw, 32px)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              color: "#A9B5A8",
              fontSize: 15,
            }}
          >
            <span>Wish something existed that doesn&apos;t yet? We&apos;d like to hear about it.</span>
            <a href="#join" style={{ fontWeight: 600 }}>
              Tell us →
            </a>
          </div>
        </div>
      </section>

      <section id="name">
        <div
          className={s.container}
          style={{ ...sectionPad(56, 10, 96), display: "flex", flexDirection: "column", gap: 72 }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <p className={s.eyebrow} style={{ marginBottom: 16 }}>
                Our name
              </p>
              <h2
                className={s.display}
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 60px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  textWrap: "balance",
                }}
              >
                Named for an animal that came back.
              </h2>
            </div>
            <div className={s.prose}>
              <p>
                The greater one-horned rhino lives in the grasslands of the Brahmaputra valley. Most of the
                world&apos;s population lives in one place: Kaziranga, in Assam. It is the animal every Assamese child
                grows up knowing.
              </p>
              <p>
                It was nearly lost. Hunting and shrinking grasslands brought the species down to about 200 animals.
                Then forest guards, villagers on the park&apos;s edge and generations of conservationists spent a
                century protecting it, often at real cost to themselves.
              </p>
              <p>
                Its scientific name is <em style={{ color: "#ECE7D8" }}>Rhinoceros unicornis</em>: one horn.
                Travellers who saw it centuries ago carried stories of it home, and it became part of the unicorn
                legend. The original unicorn was never a myth. It was standing in the tall grass in Assam.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              borderTop: "1px solid #2A453A",
              borderBottom: "1px solid #2A453A",
              paddingBlock: 32,
            }}
          >
            <Stat value="~200" color="#A9B5A8" label="Rhinos left at the species' lowest point" />
            <Stat value="4,000+" color="#D4AE5A" label="Living across India, Nepal and Bhutan today" />
            <div style={{ flex: "2 1 320px", minWidth: 0, alignSelf: "center", fontSize: 17, color: "#ECE7D8" }}>
              One of the few large animals the world has brought back from the edge. That took patience, people who
              cared about one place, and a very long view.
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
            <div style={{ flex: "1 1 320px", minWidth: 0 }}>
              <p className={s.eyebrow} style={{ marginBottom: 16 }}>
                Why the rhino
              </p>
              <h2
                className={s.display}
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  textWrap: "balance",
                }}
              >
                It shapes the land around it.
              </h2>
            </div>
            <div className={s.prose}>
              <p>
                A rhino doesn&apos;t just live in the grassland. It makes it. Its grazing keeps the grass open for
                other animals, and as it moves through the forest it carries seeds to new ground. Protecting the rhino
                meant protecting all of Kaziranga, and today tigers, elephants and swamp deer live under that same
                shelter.
              </p>
              <p>
                That is what we want our work to do for you. Shape the world around it. Make everyday life more
                livable, put good tools within reach of more people, and make the time you spend with what we build
                more meaningful.
              </p>
              <p>
                We start with people we know, and we hope you&apos;ll become one of them. Use what we make, tell us
                what&apos;s missing, and help it grow far beyond where it began.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="log" className={s.band}>
        <div
          className={s.container}
          style={{ ...sectionPad(56, 9, 88), display: "flex", flexWrap: "wrap", gap: 48 }}
        >
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <h2
              className={s.display}
              style={{
                marginBottom: 12,
                fontWeight: 700,
                fontSize: "clamp(30px, 5vw, 40px)",
                letterSpacing: "-0.015em",
                lineHeight: 1.15,
              }}
            >
              Updates
            </h2>
            <p style={{ color: "#A9B5A8", fontSize: 15 }}>
              What&apos;s new, so you know when something is ready for you.
            </p>
          </div>
          <ol
            style={{
              flex: "999 1 560px",
              minWidth: 0,
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {updates.map((u) => (
              <li key={u.date} className={s.logItem}>
                <span className={s.logDate}>{u.date}</span>
                <span style={{ flex: "1 1 300px", minWidth: 0 }}>{u.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="join">
        <div className={s.container} style={sectionPad(56, 10, 96)}>
          <div style={{ maxWidth: 820 }}>
            <h2
              className={s.display}
              style={{
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Use it early. Shape it. Or build it with us.
            </h2>
            <p style={{ marginTop: 24, maxWidth: 600, fontSize: 19, color: "#D6DCD3" }}>
              Write to us and say which one you want to try. You&apos;ll get it before anyone else, and what you tell
              us changes what we build. If you&apos;re an engineer, designer, 3D artist, coach or teacher, we&apos;d
              love to work with you too.
            </p>
          </div>
        </div>
      </section>

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
            </a>{" "}
            · © 2026
          </span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, color, label }: { value: string; color: string; label: string }) {
  return (
    <div style={{ flex: "1 1 220px", minWidth: 0 }}>
      <div
        className={s.display}
        style={{
          fontWeight: 800,
          fontSize: "clamp(48px, 11vw, 64px)",
          lineHeight: 1,
          color,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </div>
      <p style={{ marginTop: 12, fontSize: 15, color: "#A9B5A8" }}>{label}</p>
    </div>
  );
}
