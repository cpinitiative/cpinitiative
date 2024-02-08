const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/workshop",
        destination: "/workshops",
        permanent: true,
      },
      {
        source: "/webinar",
        destination: "/workshops/intro-to-usaco",
        permanent: true,
      },
      {
        source: "/workshop/beginner",
        destination: "/workshops/beginner",
        permanent: true,
      },
      {
        source: "/workshop/egoi",
        destination: "/workshops/egoi",
        permanent: true,
      },
      {
        source: "/workshop/intro-to-usaco",
        destination: "/workshops/intro-to-usaco",
        permanent: true,
      },
    ]
  },
  typescript: {
    //
    ignoreBuildErrors: true,
  },
}
 
module.exports = withMDX(nextConfig)
