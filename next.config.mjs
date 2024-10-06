/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // changed from standalone to export to get static build
    images: { unoptimized: true }
  };
  
  export default nextConfig;
  