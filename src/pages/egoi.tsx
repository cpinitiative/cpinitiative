import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/workshops/egoi/Hero"
import Header from "../components/Header"
import AgendaAndContent from "../components/workshops/egoi/AgendaAndContent"
import People from "../components/workshops/egoi/People"

export default function Workshop({ data }) {
  return (
    <Layout>
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
