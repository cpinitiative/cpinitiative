import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/index/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600">
        <div className="h-32"/>
        <div className="max-w-screen-xl px-4 sm:px-6 mx-auto -mb-12">
          <h2 className="text-4xl tracking-tight leading-10 sm:leading-none font-extrabold text-white sm:text-6xl lg:text-5xl xl:text-6xl">
            Competitive Programing Initiative
          </h2>
          <p className="mt-8 mb-6 text-teal-200 text-xl">We promote competitive programming among students through four main initiatives.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-64 w-full" preserveAspectRatio="none">
          <path className="text-gray-100" fill="currentColor" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
        </svg>
      </div>
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto">
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
