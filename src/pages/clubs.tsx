import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/clubs/Hero"
import WhyJoin from "../components/clubs/WhyJoin"
import CTA from "../components/clubs/CTA"
import Header from "../components/Header"
import FAQ from "../components/clubs/FAQ"
import RegistrationProcess from "../components/clubs/RegistrationProcess"
import CurrentClubs from "../components/clubs/CurrentClubs"

export default function Clubs() {
  return (
    <Layout>
      <SEO
        title="Competitive Programming Clubs"
        description="Get access to curriculum, problemsets, and contests tailored for school clubs, created by past USACO Finalists."
      />

      <Header noBanner={true} />
      <div className="margin-top-nav" />
      {/*Banner Padding*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <WhyJoin />
      <RegistrationProcess />
      {/*<FAQ />*/}
      <CTA />
      <div className="h-8" />
      <CurrentClubs />
    </Layout>
  )
}
