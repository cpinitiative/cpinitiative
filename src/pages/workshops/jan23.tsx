import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/jan23/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/jan23/AgendaAndContent"
import People from "../../components/workshops/jan23/People"

export default function USACOJan23() {
  return (
    <Layout>
      <SEO
        title="USACO January Contest Solutions"
        description="The Competitive Programming Initiative is holding its workshop on February 4th, 5pm PDT! Join us to learn from the experience of CPI Instructors!"
      />
      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <AgendaAndContent />
      <People />
    </Layout>
  )
}
