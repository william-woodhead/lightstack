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
        }
      ]
  }]
  }
}

module.exports = nextConfig
