import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/setting25/Hero"
import Header from "../../components/Header"
import People from "../../components/workshops/setting25/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/workshops/setting25.png"
        title="Problemsetting Panel Discussion"
        description="Watch USACO Problemsetters discuss contest creation and answer your Q&A—live!"
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
