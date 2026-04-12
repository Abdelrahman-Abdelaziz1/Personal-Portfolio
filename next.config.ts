import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // If the 'eslint' key continues to cause an error, 
  // remove it and handle linting via your CI/CD or terminal
};

export default nextConfig;