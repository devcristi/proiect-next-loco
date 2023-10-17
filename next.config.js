/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['devcristi.github.io'], // Replace 'username.github.io' with your GitHub Pages domain.
  },
  basePath: process.env.NODE_ENV === 'production' ? '/proiect-next-loco' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/proiect-next-loco/' : '',
};

module.exports = nextConfig;
