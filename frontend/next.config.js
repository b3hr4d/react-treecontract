/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  productionBrowserSourceMaps: true,
  env: {
    infuraKey: process.env.INFURA_KEY,
    quickKey: process.env.QUICK_KEY,
  },
}

module.exports = nextConfig
