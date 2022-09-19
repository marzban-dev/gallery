/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["www.google.com"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
}

module.exports = nextConfig;