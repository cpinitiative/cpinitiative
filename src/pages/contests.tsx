import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"
import EmailForm from "../components/video-classes/EmailForm"
import ContestList from "../components/contests/ContestList"
import CurrentClubs from "../components/clubs/CurrentClubs"

export default function Contests() {
  return (
    <Layout>
      <SEO
        title="High School Programming Contests"
        description="A selection of programming contests targeted towards pre-college students."
      />

      <Header noBanner={true} />

      <div className="bg-gray-900 min-h-screen lg:min-h-[50vh] flex">
        {/* <div className="h-16 flex-shrink-0" /> */}
        {/*Banner Padding*/}
        {/*<div className="h-20 sm:h-12"/>*/}
        <div className="flex-1 flex flex-row items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 w-full py-24">
            <h1 className="text-center font-black text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Programming Contests <br />
              <span className="text-purple-300">for High Schoolers.</span>
            </h1>

            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Organizing a new contest isn't easy, and neither is keeping a contest running for many years. 
              Get access to resources, manpower, and support to host your high school programming contest.
            </p>

            <div className="items-center text-center max-w-md mt-12 mt-10 mx-auto sm:max-w-none sm:flex sm:justify-center">
              <EmailForm
                listName={"contests"}
                mailjetListName={"contests"}
              />
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
          <p className="text-base text-center leading-6 text-purple-600 font-semibold tracking-wide uppercase">
            About Us.
          </p>
          <h1 className="mt-2 mb-8 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          High-quality contests hosted with CPI.
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p className = "text-1xl text-center">
          Join high-quality programming contests hosted by students, for students.
          </p>
        </div>
      
      <div className="relative pt-20 pb-20" id="how-to-join">
        <div className="max-w-prose sm:text-lg mx-auto px-4">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
            How to Join
          </h2>
          <div className="h-10" />
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-600 mb-2">
                1. Read the overview
              </h3>
              <p className="text-gray-600">
                The overview can be found here:{" "}
                <a
                  href="https://joincpi.org/competition_program_brief.pdf"
                  target="_blank"
                  className="font-semibold text-black underline"
                >
                  https://joincpi.org/competition_program_brief.pdf
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-600 mb-2">
                2. Join our Discord Server
              </h3>
              <p className="text-gray-600">
                Most of our communication takes place on Discord. Join here:{" "}
                <a
                  href="https://discord.gg/VCxUzdYhzN"
                  target="_blank"
                  className="font-semibold text-black underline"
                >
                  https://discord.gg/VCxUzdYhzN
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-600 mb-2">
                3. Contact Us!
              </h3>
              <p className="text-gray-600">
              Email {" "}
                <a href="mailto:melodyyu@joincpi.org" className="underline">
                melodyyu@joincpi.org 
                </a>
                {" "} with information about your contest to apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-purple-600">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-purple-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Partnered Contests
          </h1>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl">
            Participate in our rapidly-growing community of USACO-style algorithmic contests!
          </p>
        </div>
      </div>  
        <ContestList />
    </div>
    </Layout>
  )
}
