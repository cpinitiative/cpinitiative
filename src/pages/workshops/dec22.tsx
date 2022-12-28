import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/dec22/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/dec22/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/dec22.png"
        title="USACO December 2022 Contest Solutions"
        description="The Competitive Programming Initiative is holding a workshop to go over the problems from the USACO February Contest on January 7th, 4pm PST (7pm EST). Join to gain a better understanding of the solutions to the Bronze problems!"
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
