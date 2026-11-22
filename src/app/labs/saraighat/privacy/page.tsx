import type { Metadata } from "next";
import { CONTACT, Doc, Section, listStyle } from "../doc";

export const metadata: Metadata = {
  title: "Saraighat privacy policy · OneHorn Labs",
  description: "What the Saraighat game collects, why, who else handles it, and how to have it deleted.",
  alternates: { canonical: "https://thebstar.com/labs/saraighat/privacy/" },
};

export default function SaraighatPrivacy() {
  return (
    <Doc kicker="Saraighat · Battle of the Luit" title="Privacy policy" updated="22 November 2026">
      <Section title="Who we are">
        <p>
          Saraighat: Battle of the Luit (শৰাইঘাট — লুইতৰ ৰণ) is a game for Android and iPhone made by OneHorn Labs, a
          small studio run by Bikram Sutar in India. This page says what the game collects and why. Questions, or a
          request to see or delete your data: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>
      </Section>

      <Section title="Signing in">
        <p>
          The game asks you to sign in with Google (on Android), or with Google or Apple (on iPhone, where you can also
          choose &ldquo;Not now&rdquo;). Sign-in is handled by Google Firebase Authentication. From it we keep:
        </p>
        <ul style={listStyle}>
          <li>your email address (on iPhone, if you chose Apple&apos;s &ldquo;Hide My Email&rdquo;, the private relay address Apple gives us instead);</li>
          <li>the name and picture your Google or Apple account shares, which we do not use or show;</li>
          <li>an account identifier, and when you signed up and last signed in;</li>
          <li>whether you said yes to news by email, the language you play in, and whether you play on Android or iPhone.</li>
        </ul>
        <p>
          <strong>What we use it for.</strong> To know who has an account, and, <em>only if you ticked the box to get
          news</em>, to send you occasional emails about Saraighat and other OneHorn Labs projects. Every email has a
          way to stop them, and you can also write to us. We never sell your email or give it to anyone else to
          market to you.
        </p>
      </Section>

      <Section title="Your progress">
        <p>
          Your stars, the Buranji Pages you have found, Hemen Da&apos;s riddles you have answered and your settings are
          kept on your phone only. They are not sent to us, and they are lost if you uninstall the game.
        </p>
      </Section>

      <Section title="Ads">
        <p>
          The game is free and shows ads from Google AdMob: a small banner on some menu screens, a video after every
          third chapter, and videos you choose to watch in return for a reward (getting up again after a fall, opening
          the next chapter, a hint on a riddle). To show ads, measure them, limit how often you see the same one and
          stop fraud, Google collects information from your phone such as its advertising ID, IP address, rough
          location from that address, and how you interact with the ads.
        </p>
        <ul style={listStyle}>
          <li>
            In the European Economic Area, the UK and Switzerland, the game asks for your consent before personalised
            ads; you can change your choice later from the game&apos;s settings.
          </li>
          <li>On iPhone, ads are personalised only if you allow tracking when the phone asks.</li>
          <li>
            On Android you can reset or delete your advertising ID in your phone&apos;s settings (Settings ▸ Privacy ▸
            Ads, or Google ▸ Ads).
          </li>
        </ul>
        <p>
          How Google uses this information:{" "}
          <a href="https://policies.google.com/technologies/partner-sites">policies.google.com/technologies/partner-sites</a>.
        </p>
      </Section>

      <Section title="The game engine">
        <p>
          The game is built with the Unity engine. Unity may collect basic technical information about the device
          (model, operating system, graphics chip) to improve the engine; it does not identify you. See{" "}
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy">Unity&apos;s privacy policy</a>.
        </p>
      </Section>

      <Section title="Who else handles your data">
        <ul style={listStyle}>
          <li>Google (Firebase Authentication and Cloud Firestore, which store your sign-in and the record above; AdMob, for ads).</li>
          <li>Apple, if you sign in with Apple.</li>
          <li>Unity, as above.</li>
        </ul>
        <p>
          Your record is stored on Google&apos;s servers; the record of whether you want news is kept in Google&apos;s
          Mumbai region in India. Data is sent over encrypted connections.
        </p>
      </Section>

      <Section title="How long we keep it, and deleting it">
        <p>
          We keep your account and email until you delete them. Delete your account in the game (Settings ▸ Account ▸
          Delete account), or ask us by email; see{" "}
          <a href="/labs/saraighat/delete-account/">Delete your Saraighat account</a>. Your sign-in, email and news
          choice are then removed within 30 days. Information Google holds for ads follows Google&apos;s own policies.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You can ask to see the data we hold about you, correct it, delete it, or withdraw your consent to news
          emails at any time, free of charge, by writing to <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. This applies
          wherever you live, including under India&apos;s Digital Personal Data Protection Act and the EU and UK GDPR.
          We reply within 30 days.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Saraighat is meant for players aged 13 and over. We do not knowingly collect information from children under
          13; if you believe a child has signed in, write to us and we will delete the account.
        </p>
      </Section>

      <Section title="Changes">
        <p>If this policy changes, the new version will be posted on this page with a new date.</p>
      </Section>
    </Doc>
  );
}
