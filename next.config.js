/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "flowbite.s3.amazonaws.com",
      "tailwindui.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "127.0.0.1",
    //     port: "1337",
    //   },
    // ],
  },
};

module.exports = nextConfig;
