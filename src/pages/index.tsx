import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/index/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 -mb-8">
        <div className="h-32"/>
        <div className="max-w-screen-xl px-4 sm:px-6 mx-auto sm:-mb-12">
          <h1 className="text-4xl tracking-tight leading-10 sm:leading-none font-extrabold text-white sm:text-6xl lg:text-5xl xl:text-6xl">
            Competitive Programing Initiative
          </h1>
          <p className="mt-6 mb-6 text-teal-200 text-xl">We promote competitive programming among students through resources, classes, outreach, and contests.</p>
          <p className="text-teal-200 text-xl mb-4">If you run (or are thinking of running) a CP club, please fill out the form below!</p>
          <div className="sm:flex">
            <div className="rounded-md shadow">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9ixrZdjfCM4BllJ-vvOno_Vr2-j5TjeW_3_i11Hp2rzhVJA/viewform" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Club Interest Form
              </a>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-32 sm:h-64 w-full" preserveAspectRatio="none">
          <path className="text-gray-100" fill="currentColor" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
        </svg>
      </div>
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto pb-12">
        <h1 className="text-2xl tracking-tight leading-10 sm:leading-none font-extrabold text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-12">
          Our Initiatives
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="USACO Guide" borderColor="border-blue-600" url="https://usaco.guide/">
            The USACO Guide is a free collection of curated, high-quality resources to take you from Bronze to Platinum and beyond.
          </Card>
          <Card title="Classes" borderColor="border-orange-600" url="https://cpinitiative.wixsite.com/home">
            We offer free, high-quality competitive programming classes for people of all skill levels!
          </Card>
          <Card title="Outreach" borderColor="border-green-600" url={null}>
            We partner with clubs and teachers across the United States to promote competitive programming.
          </Card>
          <Card title="Contests" borderColor="border-yellow-600" url={null}>
            <i>Coming Soon!</i>
          </Card>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
