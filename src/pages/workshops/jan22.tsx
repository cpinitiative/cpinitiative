import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/jan22/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/jan22/AgendaAndContent"
import People from "../../components/workshops/jan22/People"

export default function USACOJanuary() {
  return (
    <Layout>
      <SEO
        image="../../images/x-camp_cpi.png"
        title="USACO January Contest Solutions"
        description="The Competitive Programming Initiative is holding its second workshop on October 17th, 2pm PDT! Join us to learn from the experience of the 2021 EGOI team!"
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
