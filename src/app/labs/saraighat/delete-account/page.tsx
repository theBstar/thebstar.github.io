import type { Metadata } from "next";
import { CONTACT, Doc, Section, listStyle, stepsStyle } from "../doc";

export const metadata: Metadata = {
  title: "Delete your Saraighat account · OneHorn Labs",
  description: "How to delete your Saraighat account and the data that goes with it.",
  alternates: { canonical: "https://thebstar.com/labs/saraighat/delete-account/" },
};

const mail = `mailto:${CONTACT}?subject=${encodeURIComponent("Delete my Saraighat account")}&body=${encodeURIComponent(
  "Please delete my Saraighat account. I signed in with this email address."
)}`;

export default function SaraighatDeleteAccount() {
  return (
    <Doc kicker="Saraighat · Battle of the Luit" title="Delete your Saraighat account">
      <Section title="In the game (straight away)">
        <ol style={stepsStyle}>
          <li>Open Saraighat and go to Settings.</li>
          <li>Under Account, tap Delete account, then confirm.</li>
        </ol>
        <p>Your account is deleted at once and you are signed out.</p>
      </Section>

      <Section title="Without the game">
        <p>
          If you no longer have the game, email <a href={mail}>{CONTACT}</a> with the subject &ldquo;Delete my
          Saraighat account&rdquo;, from the email address you signed in with (or tell us that address). We delete the
          account within 30 days and write back to confirm.
        </p>
      </Section>

      <Section title="What is deleted">
        <ul style={listStyle}>
          <li>Your sign-in record: email address, account identifier, name and picture from Google or Apple, sign-in dates.</li>
          <li>Your news choice, language and platform.</li>
        </ul>
        <p>
          We keep nothing after that. Your progress was never sent to us: it stays on your phone until you uninstall
          the game. Information Google holds for showing ads follows{" "}
          <a href="https://policies.google.com/privacy">Google&apos;s privacy policy</a>.
        </p>
      </Section>

      <p style={{ fontSize: 15, color: "#A9B5A8" }}>
        Saraighat is made by OneHorn Labs. See also the <a href="/labs/saraighat/privacy/">privacy policy</a>.
      </p>
    </Doc>
  );
}
