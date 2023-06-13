/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: "/",
      headers:[
        {
          key: "Link",
          value: '<https://www.lightstack.co.uk/manifest.txt>; rel="prefetch"'
        },
      ]
    }, {
      source: "/tester",
      headers:[
        {
          key: "Cache-Control",
          value: "max-age=120",
        },
      ]
    }]
  }
}

module.exports = nextConfig
