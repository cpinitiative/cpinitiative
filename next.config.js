module.exports = {
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
