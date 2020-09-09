import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/index/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="h-screen bg-gray-100">
      <div className="h-36"/>
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto">
        <h2 className="text-4xl tracking-tight leading-10 sm:leading-none font-extrabold text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
          Competitive Programing Initiative
        </h2>
        <p className="mt-8 mb-6 text-gray-600 text-xl">We promote competitive programming among students through the following initiatives:</p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="USACO Guide" borderColor="border-blue-600">
            The USACO Guide is a free collection of curated, high-quality resources to take you from Bronze to Platinum and beyond.
          </Card>
          <Card title="Classes" borderColor="border-orange-600">
            We offer free, high-quality competitive programming classes for people of all skill levels!
          </Card>
          <Card title="Outreach" borderColor="border-green-600">
            We partner with clubs and teachers across the United States to promote competitive programming.
          </Card>
          <Card title="Contests" borderColor="border-yellow-600">
            <i>Coming Soon!</i>
          </Card>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
