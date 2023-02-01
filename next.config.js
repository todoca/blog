/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["todoca.com.ve", "cdn.sanity.io"],
  },
};
