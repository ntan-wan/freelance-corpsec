import NextBundleAnalyzer from "@next/bundle-analyzer";

const analyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // loader: "custom",
        // loaderFile: "./src/utils/loader.ts",
        remotePatterns: [
            {
                protocol: "https",
				hostname: "freelance-corpsec.onrender.com",
                port: "",
                pathname: "/imgs/**",
            },
        ],
    },
};

//# run: ANALYZE=true npm run build
export default analyzer(nextConfig);
