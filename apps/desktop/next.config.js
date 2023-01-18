/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["server", "store"]); //

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withTM(nextConfig);
