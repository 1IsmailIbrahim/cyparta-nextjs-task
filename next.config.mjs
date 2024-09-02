/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sadakatcdn.cyparta.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
