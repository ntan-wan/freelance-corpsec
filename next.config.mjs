import NextBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "freelance-corpsec.onrender.com",
                port: "",
                pathname: "/home/**",
            },
        ],
    },
};

//# run: ANALYZE=true npm run build
export default analyzer(nextConfig);
