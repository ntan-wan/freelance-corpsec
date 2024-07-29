import NextBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

//# run: ANALYZE=true npm run build
export default analyzer(nextConfig);
