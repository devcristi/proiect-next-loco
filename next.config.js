/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['https://devcristi.github.io'], // Replace 'username.github.io' with your GitHub Pages domain.
    },
  }

  module.exports = nextConfig;


const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/proiect-next-loco' : '',
  assetPrefix: isProd ? '/proiect-next-loco/' : '',
};
