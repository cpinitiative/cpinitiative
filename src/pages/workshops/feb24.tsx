import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/feb24/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/feb24/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/feb24.png"
        title="USACO Februray 2024 Contest Solutions"
        description="The Competitive Programming Initiative is holding a workshop to go over the problems from the USACO February Contest on February 24th, 5pm PST (8pm EST). Join to gain a better understanding of the solutions!"
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
