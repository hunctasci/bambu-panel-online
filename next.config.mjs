/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: '/api/public/**',
      },
    ],
  },
  publicRuntimeConfig: {
    staticFolder: "/uploads",
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
