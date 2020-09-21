import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"

export default function Contests() {
  return (
    <Layout>
      <SEO title="Contests" description="Get better at USACO by participating in monthly, beginner-focused Competitive Programming Contests! Targeted to both school clubs and individual contestants." />

      <Header />
      <div className="margin-top-nav"/>
      <Hero />
      <Divisions />
    </Layout>
  )
}