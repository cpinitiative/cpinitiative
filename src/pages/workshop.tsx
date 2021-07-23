import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/workshop/Hero"
import Header from "../components/Header"
import AgendaAndContent from "../components/workshop/AgendaAndContent"
import { graphql } from "gatsby"
import WorkshopPeople from "../components/workshop/WorkshopPeople"

export default function Workshop({ data }) {
  return (
    <Layout>
      <SEO
        image={data.ogImage.childImageSharp.fluid}
        title="USACO for Absolute Beginners Workshop"
        description="CPI will be holding a USACO for Absolute Beginners Workshop on August 6th, 4-5pm PDT! Join us to learn more about USACO!"
      />

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
export const pageQuery = graphql`
  query {
    ogImage: file(relativePath: { eq: "workshop.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
