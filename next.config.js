/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'images.hdqwalls.com',
      port: '',
    }]
  }
}

module.exports = nextConfig
