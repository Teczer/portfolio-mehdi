// exclude from Next.js proxy

const hosts = ["gifdb.com", "media.tenor.com"];

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    remotePatterns: hosts.map((host) => ({
      hostname: host,
    })),
  },
});

module.exports = nextConfig;
