import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"
import { Link } from "gatsby"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO
        title="Beginner Competitive Programming Contests"
        description="Get better at USACO by participating in monthly, beginner-focused Competitive Programming Contests! Targeted to both school clubs and individual contestants."
      />

      <Header />
      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10">
        <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
          Error 404: Page Not Found
        </h1>
        <Link
          to={"/"}
          className={"text-2xl text-blue-600 hover:underline pt-4 block"}
        >
          Go Home
        </Link>
      </div>
    </Layout>
  )
}
