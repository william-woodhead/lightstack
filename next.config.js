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
          {
            key: 'Link',
            value: '<https://www.lightstack.co.uk/manifest.txt>; rel="prefetch"',
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
