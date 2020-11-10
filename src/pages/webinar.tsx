import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/webinar/Hero"
import Header from "../components/Header"
import AgendaAndContent from "../components/webinar/AgendaAndContent"
import { graphql } from "gatsby"

export default function Webinar({data}) {
  return (
    <Layout >
      <SEO image={data.ogImage.childImageSharp.fluid}
           title="Introduction to USACO Webinar"
           description=" CPI will be holding an Introduction to USACO Webinar on November 28th, 5-6pm PST! Join us to learn more about what USACO is, why you should do it, and how to get better at USACO!" />

      <Header noBanner/>
      <div className="margin-top-nav"/>
      <Hero />
      <AgendaAndContent />
    </Layout>
  )
}
export const pageQuery = graphql`
    query {
        ogImage: file(relativePath: { eq: "webinar.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;