module.exports = {
  async redirects() {
    return [
      {
        source: "/workshop",
        destination: "/workshop/beginner",
        permanent: true,
      },
      {
        source: "/webinar",
        destination: "/workshop/intro-to-usaco",
        permanent: true,
      },
    ]
  },
}
