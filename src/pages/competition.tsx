import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/competition/Hero"
import Image from "next/image"
import Format from "../components/competition/Format"
import Prizes from "../components/competition/Prizes"

export default function Contests() {
  return (
    <Layout>
      <SEO
        title="Inter-Club Competition"
        description="Provides a community for girls and non-binary coders as well as workshops to explore and learn more."
      />

      <Header dark />

      <Hero />
      <Format />
      <Prizes />
      <div>
        <p className="text-center font-xs text-purple-600 font-semibold uppercase">
          Questions?
        </p>
        <p className="text-center prose max-w-full">
          Ping <strong>Pranav#7895</strong> in the CPI Discord!
        </p>
      </div>
    </Layout>
  )
}
