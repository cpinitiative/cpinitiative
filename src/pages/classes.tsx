import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/classes/Hero"
import NotLowQuality from "../components/classes/NotLowQuality"

export default function Classes() {
  return (
    <Layout>
      <SEO title="Classes" description="Learn USACO through high-quality classes with vetted, experienced instructors and an exclusive curriculum designed and developed by past USACO Finalists and IOI Winners." />

      <Header />
      <Hero />
      <NotLowQuality />
    </Layout>
  );
};