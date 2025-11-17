/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@brutal-ui/react'],
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/brutal-ui' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
