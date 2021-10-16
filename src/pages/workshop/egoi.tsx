import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/egoi/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/egoi/AgendaAndContent"
import People from "../../components/workshops/egoi/People"

export default function Workshop({ data }) {
  return (
    <Layout>
      <SEO
        image="/workshop-egoi.png"
        title="Experience & Tips from the USA EGOI Team"
        description="The Competitive Programming Initiative is holding its second workshop on October 17th, 2pm PDT! Join us to learn from the experience of the 2021 EGOI team!"
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
