const path = require("path");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "_theme.scss";`,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com'
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com'
      },
      {
        protocol: 'https',
        hostname: 'unavatar.io'
      },
      {
        protocol: 'https',
        hostname: 'mohitya.dev'
      },
    ],
  },
});

module.exports = nextConfig;
