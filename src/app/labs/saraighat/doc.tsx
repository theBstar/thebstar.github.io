import s from "../labs.module.css";

/** A page of plain text in the lab's type: a kicker, a title, the date, then sections. */
export function Doc({ kicker, title, updated, children }: { kicker: string; title: string; updated?: string; children: React.ReactNode }) {
  return (
    <article style={{ maxWidth: 760 }}>
      <p className={s.eyebrow} style={{ marginBottom: 20 }}>
        {kicker}
      </p>
      <h1
        className={s.display}
        style={{ fontWeight: 800, fontSize: "clamp(34px, 6vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", textWrap: "balance" }}
      >
        {title}
      </h1>
      {updated && <p style={{ marginTop: 16, fontSize: 15, color: "#A9B5A8" }}>Last updated {updated}</p>}
      <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 40, color: "#D6DCD3" }}>{children}</div>
    </article>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <h2 className={s.display} style={{ fontWeight: 700, fontSize: "clamp(22px, 3vw, 28px)", lineHeight: 1.2, color: "#ECE7D8" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export const listStyle: React.CSSProperties = { margin: 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8, listStyleType: "disc" };
export const stepsStyle: React.CSSProperties = { ...listStyle, listStyleType: "decimal" };

export const CONTACT = "6bikramsutar@gmail.com";
