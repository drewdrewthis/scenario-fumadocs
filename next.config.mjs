import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  output: "export", // Enable static export
  // basePath: process.env.NODE_ENV === "production" ? "/scenario-fumadocs" : "", // Add your repo name as basePath
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withMDX(config);
