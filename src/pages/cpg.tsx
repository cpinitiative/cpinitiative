import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"
import EmailForm from "../components/video-classes/EmailForm"
import ContestList from "../components/contests/ContestList"
import Link from "next/link"

export default function CPG() {
  return (
    <Layout>
      <SEO
        title="Competitive Programming for Girls"
        description="Provides a community for girls and non-binary coders as well as workshops to explore and learn more."
      />

      <Header dark noBanner />

      <div className="bg-gray-900 min-h-screen lg:min-h-[50vh] flex">
        {/* <div className="h-16 flex-shrink-0" /> */}
        {/*Banner Padding*/}
        {/*<div className="h-20 sm:h-12"/>*/}
        <div className="flex-1 flex flex-row items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 w-full py-24">
            <h1 className="font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
              Competitive Programming
              <br />
              <span className="text-purple-300">for Girls.</span>
            </h1>

            <p className="text-gray-300 sm:text-lg lg:text-xl mt-3 lg:mt-6 max-w-prose">
              The Competitive Programming Girls (CPG) is a branch of CPI
              dedicated to creating a shared environment for female and
              non-binary coders to talk to each other, attend workshops, and
              understand each others' experiences. Subscribe to get notified
              about workshops and new events.
            </p>

            <div className="max-w-md mt-12">
              {<EmailForm listName="CPG" mailjetListName="cpg" wide />}
            </div>
            <div className="lg:hidden flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-12 sm:w-12 text-white animate-bounce absolute bottom-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Workshops
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto mb-4">
          <p>
            Listen to inspiring workshops from our guest speakers, women and
            non-binary role models in STEM.
          </p>
        </div>
        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Community
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p>
            Join our discord community to meet, code, and chat with other female
            and non-binary coders! To get started:
          </p>
          <ol>
            <li>
              Join the CPI Discord here:{" "}
              <Link
                href={"https://discord.gg/nN6826u9BK"}
                target="_blank"
                rel="noreferrer"
              >
                https://discord.gg/nN6826u9BK
              </Link>
            </li>
            <li>
              React in the{" "}
              <span className="text-pink-500 font-mono">#start-here</span>{" "}
              channel to get the CPG role and gain access to speak in the
              CPG-exclusive Discord community!
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
