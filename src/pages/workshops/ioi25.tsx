import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/ioi25/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/ioi25/People"

export default function IOI25() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/ioi25.png"
        title="2025 IOI Team Workshop"
        description="Meet three US team members for the 2025 International Olympiad in Informatics! Live CF Upsolve + Open Q&A."
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
