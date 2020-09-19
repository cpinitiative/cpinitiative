import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/clubs/Hero"
import WhyJoin from "../components/clubs/WhyJoin"
import CTA from "../components/clubs/CTA"
import Header from "../components/Header"

export default function Clubs() {
  return (
    <Layout>
      <SEO title="Clubs" />

      <Header />
      <div className="margin-top-nav"/>
      <Hero />
      <WhyJoin />
      <CTA />
    </Layout>
  )
}