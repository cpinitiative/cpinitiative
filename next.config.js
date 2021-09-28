module.exports = {
  async redirects() {
    return [
      {
        source: "/workshop",
        destination: "/usaco-beginner-workshop",
        permanent: true,
      },
      {
        source: "/webinar",
        destination: "/intro-usaco-webinar",
        permanent: true,
      },
    ]
  },
}
