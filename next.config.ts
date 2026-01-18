/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Explicitly set the project root to avoid lockfile-based inference
    root: __dirname,
  },
};

module.exports = nextConfig;
