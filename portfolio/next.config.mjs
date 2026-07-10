/** @type {import('next').NextConfig} */

// On GitHub Pages this is served from https://<user>.github.io/deepak-portfolio,
// so production builds need the repo name as a basePath. Local `next dev` keeps
// it empty so the site works at http://localhost:3006/.
const basePath = process.env.NODE_ENV === "production" ? "/deepak-portfolio" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export for GitHub Pages
  basePath,
  images: { unoptimized: true }, // no image-optimization server on Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // used for raw asset links (e.g. resume)
};

export default nextConfig;
