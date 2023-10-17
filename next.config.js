/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['devcristi.github.io'], // Replace 'username.github.io' with your GitHub Pages domain.
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/proiect-next-loco' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/proiect-next-loco/' : '',
  output: 'export',
};

module.exports = nextConfig;
