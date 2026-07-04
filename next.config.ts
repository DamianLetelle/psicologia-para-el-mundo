import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // sitio estático: sirve para doble clic y para Cloudflare Pages
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
