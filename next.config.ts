{/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

export default nextConfig;

*/}

/*abdelrahman*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete 
    // even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // If you have "Unexpected any" errors, you might need this too
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;