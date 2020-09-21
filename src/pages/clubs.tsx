import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/clubs/Hero"
import WhyJoin from "../components/clubs/WhyJoin"
import CTA from "../components/clubs/CTA"
import Header from "../components/Header"
import FAQ from "../components/clubs/FAQ"

export default function Clubs() {
  return (
    <Layout>
      <SEO title="Clubs" description="Get access to curriculum, problemsets, and contests tailored for school clubs, created by past USACO Finalists and IOI Winners." />

      <Header />
      <div className="margin-top-nav"/>
      <Hero />
      <WhyJoin />
      {/*<FAQ />*/}
      <CTA />
    </Layout>
  )
}