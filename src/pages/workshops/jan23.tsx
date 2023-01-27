import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/jan23/Hero"
import Header from "../../components/Header"
import Agenda from "../../components/workshops/jan23/Agenda"
import People from "../../components/workshops/jan23/People"

export default function USACOJanuary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/jan23.png"
        title="USACO January 2023 Contest Solutions"
        description="The Competitive Programming Initiative is holding a workshop to go over the problems from the USACO January Contest on February 4th, 5pm PST (8pm EST). Join to gain a better understanding of the solutions to the Bronze and Silver problems!"
      />
      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <Agenda />
      <People />
    </Layout>
  )
}
