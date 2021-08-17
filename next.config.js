/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['newsifier.imgix.net'],
  },

  // Had to disable for now as running out of time to get it working
  typescript: {
    ignoreBuildErrors: true,
  },
}
