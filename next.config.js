/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'set-cookie',
            value: 'hello=there',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
