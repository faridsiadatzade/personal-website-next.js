import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://faridsi.ir' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
