import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.annihil.us'],
  },
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'i.annihil.us',
      port: '',
      pathname: '/**',
    },
  ],
};

export default nextConfig;
