import * as React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "clubs-hero.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 700, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const heroImg = data.hero.childImageSharp.fluid;
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Competitive Programming<br/><span className="text-blue-600">Clubs</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Get access to exclusive curriculum, problemsets, and contests tailored for school clubs, created by past USACO Finalists and 2x IOI Winner Benjamin Qi.
              </p>
              <p className="mt-2 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                You do <i>not</i> need to be a Competitive Programming club to apply. Computer Science clubs are eligible too!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Apply Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#benefits" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" fluid={heroImg} alt="" />
      </div>
    </div>
  );
};