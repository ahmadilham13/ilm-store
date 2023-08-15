/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_DOMAIN,
      "flowbite.s3.amazonaws.com",
      "tailwindui.com",
      "tecdn.b-cdn.net",
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
