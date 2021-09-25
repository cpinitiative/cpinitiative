import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/workshop/Hero"
import Header from "../components/Header"
import AgendaAndContent from "../components/workshop/AgendaAndContent"
import WorkshopPeople from "../components/workshop/WorkshopPeople"

export default function Workshop({ data }) {
  return (
    <Layout>
      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <AgendaAndContent />
      <WorkshopPeople />
    </Layout>
  )
}
