/** @type {import('next').NextConfig} */
const nextConfig =
    {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'jviguy.vercel.app',
                    port: '',
                    pathname: '/**',
                },
            ],
        },
    }

module.exports = nextConfig
