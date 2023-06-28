/** @type {import('next').NextConfig} */
const nextConfig = {
 distDir: "build",
 generateBuildId: async () => {
  if (process.env.BUILD_ID) {
   return process.env.BUILD_ID;
  } else {
   return `${new Date().getTime()}`;
  }
 },
 images: {
  domains: ["127.0.0.1"],
 },
};

module.exports = nextConfig;
