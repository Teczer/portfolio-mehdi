const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const hosts = ["gifdb.com", "media.tenor.com"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  turbopack: {},
  images: {
    remotePatterns: hosts.map((host) => ({
      hostname: host,
    })),
  },
};

module.exports = withPWA(nextConfig);
