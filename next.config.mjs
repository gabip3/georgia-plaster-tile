/** @type {import('next').NextConfig} */

// When deploying to a GitHub Pages *project* site the app is served from
// https://<user>.github.io/<repo>/, so it needs a basePath. Set it at build time:
//   NEXT_PUBLIC_BASE_PATH=/georgia-plaster-tile npm run build
// Left empty for local dev and root-served hosts (Netlify, custom domain).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
