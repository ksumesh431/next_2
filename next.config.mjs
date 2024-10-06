/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next_2",
  output: "export", // changed from standalone to export to get static build
  images: { unoptimized: true }
};

export default nextConfig;
