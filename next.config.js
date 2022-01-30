/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "rohitpotato.hashnode.dev"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
// module.exports = nextConfig;
