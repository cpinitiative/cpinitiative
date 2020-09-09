import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="h-screen">
      <div className="h-36"/>
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
          Competitive Programing Initiative
        </h2>
        <p className="mt-4 text-gray-600 text-xl">We promote competitive programming among students through resources, outreach, classes, and contests.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
