/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/business-insurance',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
