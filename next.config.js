/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // Every page as folder/index.html: GitHub Pages redirects a path with a folder of the same name to its
  // trailing slash, so /labs (a page) and /labs/saraighat/… (pages under it) can only both work this way.
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
