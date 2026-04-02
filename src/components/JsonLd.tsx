export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bikram Sutar",
    "alternateName": "Thebstar",
    "jobTitle": "Founding Engineer & Chief Experimenter",
    "url": "https://thebstar.com",
    "image": "https://thebstar.com/profile.jpg",
    "sameAs": [
      "https://github.com/thebstar",
      "https://linkedin.com/in/thebstar",
      "https://x.com/thebstar13",
      "https://medium.com/@thebstar"
    ],
    "description": "Founding Engineer (#1) at Houseware (acquired by LaunchDarkly). Specialist in Agentic UIs and 0 to 1 scaling. AI, Startup, Runner and Cricketer.",
    "knowsAbout": [
      "Software Engineering",
      "Startup Architecture",
      "Agentic UI",
      "Product Design",
      "React",
      "Next.js",
      "Building from 0 to 1"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Stealth Startup"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "LaunchDarkly"
      },
      {
        "@type": "Organization",
        "name": "Houseware"
      },
      {
        "@type": "Organization",
        "name": "OrangeHealth Labs"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
