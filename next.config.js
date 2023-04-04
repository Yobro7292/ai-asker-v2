/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ORG_KEY: process.env.ORG_KEY,
    API_KEY: process.env.API_KEY,
    FINGERPRINT_PUBLIC_KEY: process.env.FINGERPRINT_PUBLIC_KEY,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
