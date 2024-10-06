/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // changed from standalone to export to get static build
    images: { unoptimized: true }
  };
  
  export default nextConfig;
  