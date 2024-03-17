import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/open24/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/open24/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/open24.png"
        title="USACO Open 2024 Contest Solutions"
        description="The Competitive Programming Initiative and X-Camp are holding a workshop to go over the problems from the USACO Open Contest on March 21st, 5pm PST (8pm EST). Join to gain a better understanding of the solutions!"
      />
      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <People />
    </Layout>
  )
}
