/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.stream.prepr.io' },
      { protocol: 'https', hostname: '*.b-cdn.net' },
    ],
  },
}
