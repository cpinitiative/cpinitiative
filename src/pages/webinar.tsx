import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/webinar/Hero"
import Header from "../components/Header"
import AgendaAndContent from "../components/webinar/AgendaAndContent"

export default function Contests() {
  return (
    <Layout >
      <SEO title="Beginner Competitive Programming Contests" description="Get better at USACO by participating in monthly, beginner-focused Competitive Programming Contests! Targeted to both school clubs and individual contestants." />

      <Header noBanner/>
      <div className="margin-top-nav"/>
      <Hero />
      <AgendaAndContent />
    </Layout>
  )
}