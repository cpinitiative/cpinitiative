import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/open23/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/open23/AgendaAndContent"
import People from "../../components/workshops/open23/People"

export default function USACOFeb23() {
  return (
    <Layout>
      <SEO
        title="USACO Open 2023 Contest Solutions"
        description="Learn how to solve the Bronze/Silver USACO U.S. Open solutions, and participate in a live discussion/Q&A about tips for USACO next year!"
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
