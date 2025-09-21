/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        // যেকোনো domain থেকে image allow করতে
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // wildcard সব host এর জন্য
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
