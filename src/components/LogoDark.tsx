import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image";

export const LogoDark = props => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fixed(height: 36, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <Img
      fixed={data.img.childImageSharp.fixed}
      alt="CP Initiative"
      {...props}
    />
  )
}
