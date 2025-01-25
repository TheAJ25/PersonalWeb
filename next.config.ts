import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]'
      }
    });
    return config;
  },
  images: {
    unoptimized: true,
    domains: ['icons8.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

export default nextConfig;
