import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // sitio estático (sirve para Cloudflare Pages)
  images: { unoptimized: true },
};

export default nextConfig;
