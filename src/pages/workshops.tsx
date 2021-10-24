import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/workshops/Hero"
import Header from "../components/Header"
import WorkshopList from "../components/workshops/WorkshopList"

export default function Clubs() {
  return (
    <Layout>
      <SEO
        title="Workshops"
        description="Free online workshops hosted by CPI with interviews, webinars, and information about competitive programming."
      />

      <Header noBanner={true} />
      <div className="margin-top-nav" />
      {/*Banner Padding*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <WorkshopList />
    </Layout>
  )
}
