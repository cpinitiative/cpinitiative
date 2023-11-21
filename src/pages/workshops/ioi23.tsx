import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/ioi23/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/ioi23/AgendaAndContent"
import People from "../../components/workshops/ioi23/People"

export default function IOI23() {
  return (
    <Layout>
      <SEO
        title="USA IOI 2023 Team Workshop"
        description="Watch 3 of the top 4 HS competitive programmers in the US livesolve a contest and answer your questions!"
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
