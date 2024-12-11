/** @type {import('next').NextConfig} */
module.exports = {
  env: {},
  images: {
    domains: ['entangle-public.s3.amazonaws.com'],
  },
  output: 'standalone',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      })
    }
    // Important: return the modified config
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ipfs.dweb.link', // Allow IPFS gateway URLs
      },
    ],
    domains: ['ipfs.io', 'dweb.link'], // Allow these domains to load images
  },
}
