import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/feb22/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/feb22/AgendaAndContent"
import People from "../../components/workshops/feb22/People"

export default function USACOFebruary() {
  return (
    <Layout>
      <SEO
        image="../../images/x-camp_cpi.png"
        title="USACO February Contest Solutions"
        description="The Competitive Programming Initiative is holding a workshop to go over the problems from the USACO February Contest on March 6th, 10am-12pm PST and 4pm-5pm PST! Join to gain a better understanding of the solutions to problems in the Bronze, Silver and Gold divisions!"
      />
      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <AgendaAndContent />
      <People />
      <div className="relative py-8 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-purple-600 font-semibold tracking-wide uppercase">
              Partner
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              X-Camp Academy
            </h1>
            <p className="text-xl text-gray-500 leading-8">
              <a
                href="https://x-camp.academy/"
                className="underline text-blue-600"
              >
                X-Camp Academy
              </a>{" "}
              is a Silicon Valley based institute that offers coding classes for
              middle and high school students to achieve success at contests
              like USACO and beyond.
            </p>
            <br />
            <p className="text-xl text-gray-500 leading-8 italic">
              "We provide the most professional coding content and structured
              curriculum which keeps updating within the last 20 years, and we
              really care about how students can grow up happily and in the
              right direction. Our classes include Python, Java(APCS) and C++.
              In the 2021 USACO US Open, 10% of US Gold to Platinum students
              came from X-Camp, and one entered the US National Team Camp."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
