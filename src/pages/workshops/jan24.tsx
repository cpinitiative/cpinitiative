import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/jan24/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/jan24/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/dec23.png"
        title="USACO January 2024 Contest Solutions"
        description="The Competitive Programming Initiative is holding a workshop to go over the problems from the USACO December Contest on December 31st, 4pm PST (7pm EST). Join to gain a better understanding of the solutions!"
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
