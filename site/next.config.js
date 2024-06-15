/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'aepxx',
    description: 'Private repository',
    icon: 'https://cdn.mos.cms.futurecdn.net/zGwMxtaHBeMaDRCSZWGaFB-1200-80.jpg',
    listUrl: 'https://aepxx.github.io/kasm',
    contactUrl: 'https://github.com/aepxx/kasm',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
