import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function Logo(props) {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 36, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <Img
    fixed={data.img.childImageSharp.fixed}
    alt="CP Initiative"
    fadeIn={false}
    {...props}
  />;
}
