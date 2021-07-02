import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"
import EmailForm from "../components/classes/EmailForm"

export default function Contests() {
  return (
    <Layout>
      <SEO
        title="High School Programming Contests"
        description="A selection of programming contests targeted towards pre-college students."
      />

      <Header dark />

      <div className="bg-gray-900 min-h-screen flex">
        {/* <div className="h-16 flex-shrink-0" /> */}
        {/*Banner Padding*/}
        {/*<div className="h-20 sm:h-12"/>*/}
        <div className="flex-1 flex flex-row items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 w-full py-24">
            <h1 className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
              Programming Contests <br />
              <span className="text-purple-300">for High Schoolers.</span>
            </h1>

            <p className="text-gray-300 sm:text-lg lg:text-xl mt-3 lg:mt-6 max-w-prose">
              Participate in a curated selection of high-quality programming
              contests targeted towards pre-college students! Subscribe to get
              notified when contest registration opens.
            </p>

            <div className="max-w-md mt-12">
              <EmailForm listName={"contests"} tag={"contests"} wide />
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-cyan-600 font-semibold tracking-wide uppercase">
            Why?
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            About These Contests
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p>
            Programming contests are an excellent way to improve at competitive
            programming by helping you improve your contest strategy and overall
            programming skills. The CPI partners with various organizers to
            help you find high quality contests to participate in. If you're
            interested, sign up for our newsletter above.
          </p>
          <p>We currently partner with the following programming contests:</p>
          <ul>
            <li><a href="https://mbit.mbhs.edu/" target="_blank" rel="noreferrer">Montgomery Blair Informatics Tournament (mBIT)</a></li>
            <li><a href="https://lit.lhsmathcs.org/" target="_blank" rel="noreferrer">Lexington Informatics Tournament (LIT)</a></li>
            <li><a href="https://teamscode.org/" target="_blank" rel="noreferrer">Teamscode</a></li>
          </ul>
          <p>
            Are you organizing a contest targeted towards high schoolers? If you
            want to partner with us, send us an email at{" "}
            <a
              href="mailto:contests@joincpi.org"
              target="_blank"
              rel="noreferrer"
            >
              contests@joincpi.org
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}
