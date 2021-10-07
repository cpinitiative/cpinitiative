import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/workshops/webinar/Hero"
import Header from "../../components/Header"
import AgendaAndContent from "../../components/workshops/webinar/AgendaAndContent"
import WebinarPeople from "../../components/workshops/webinar/WebinarPeople"

export default function Webinar() {
  return (
    <Layout>
      <SEO
        image="/webinar.jpg"
        title="Introduction to USACO Webinar"
        description="CPI will be holding an Introduction to USACO Webinar on November 28th, 5-5:40pm PST! Join us to learn more about what USACO is, why you should do it, and how to get better at USACO!"
      />

      <Header noBanner />
      <div className="margin-top-nav" />
      {/*/!* Banner margin *!/*/}
      {/*<div className="h-20 sm:h-12"/>*/}
      <Hero />
      <AgendaAndContent />
      <WebinarPeople />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Our Story
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Why do USACO?
            </h1>
            <p className="text-xl text-gray-500 leading-8">
              Participating in USACO is an excellent way for you to meet the
              best CS students across the country, build friendships, and
              kickstart your CS career.
            </p>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>
              USACO alumni are prevalent in both academia and industry, and have
              gone on to create amazing companies such as Quora. Unfortunately,
              not many students are aware of or participate in USACO.
            </p>
            <p>
              That's where we come in! The Competitive Programming Initiative is
              a nonprofit organization run by top USACO competitors that aims to
              increase awareness and participation in USACO. Our team members
              include past USACO Finalists and IOI participants.
            </p>
            <p>
              We hope you'll join us to learn more about USACO and why it can be
              a good choice for you!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
