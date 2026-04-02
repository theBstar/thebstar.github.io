import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Bikram Sutar | Founding Engineer & AI Startup Enthusiast",
  description: "Bikram Sutar is a '0 to 1' product engineer specializing in Agentic UIs and startup architecture. Previously #1 at Houseware and #3 at OrangeHealth (YC S20). Building for the future from stealth.",
  keywords: ["Bikram Sutar", "Thebstar", "Founding Engineer", "Houseware", "LaunchDarkly", "Agentic UI", "AI Startups", "Product Engineer", "OrangeHealth Labs", "Developer Experience"],
  authors: [{ name: "Bikram Sutar" }],
  creator: "Bikram Sutar",
  publisher: "Bikram Sutar",
  alternates: {
    canonical: "https://thebstar.com",
  },
  openGraph: {
    title: "Bikram Sutar | Building from 0 to 1",
    description: "Founding Engineer focusing on Agentic UIs and high-growth startup architecture. Previously @ LaunchDarkly, Houseware, and OrangeHealth.",
    url: "https://thebstar.com",
    siteName: "Bikram Sutar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bikram Sutar | Chief Experimenter @ Stealth",
    description: "Building from 0 to 1 since 2018. AI & Startup enthusiast, runner, and community builder.",
    creator: "@thebstar13",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} font-sans antialiased`}
      >
        <JsonLd />
        {children}
        <GoogleAnalytics gaId="G-6K53Q5XBV4" />
      </body>
    </html>
  );
}

