import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/contests/Hero"
import Header from "../components/Header"
import Divisions from "../components/contests/Divisions"
import EmailForm from "../components/video-classes/EmailForm"
import ContestList from "../components/contests/ContestList"
import PartneredContests from "../components/contests/PartneredContests"
import CurrentClubs from "../components/clubs/CurrentClubs"
import Link from "next/link"

export default function Contests() {
  return (
    <Layout>
      <SEO
        title="High School Programming Contests"
        description="A selection of programming contests targeted towards pre-college students."
      />

<div>
      <div className="relative shadow-xl">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://source.unsplash.com/QBpZGqEMsKg"
            alt="People working"
          />
          <div
            className="absolute inset-0 bg-indigo-800"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <h1 className="text-center font-black text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
              Programming Contests <br />
              <span className="text-purple-300">for High Schoolers.</span>
            </h1>
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

        </div>
      </div>
    </div>

      <Header noBanner={true} />


      <div className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-lg max-w-prose mx-auto mb-6">
          <p className="text-base text-center leading-6 text-purple-600 font-semibold tracking-wide uppercase">
            About Us.
          </p>
          <h1 className="mt-2 mb-8 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          High-quality contests hosted with CPI.
          </h1>
        </div>
        <div className="prose prose-lg text-gray-500 mx-auto mb-6">
          <p className = "text-1xl text-center">
          Join high-quality programming contests hosted by students, for students.
          </p>
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
            High-Quality Contests
          </h1>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl">
            Participate in our rapidly-growing community of USACO-style algorithmic contests!
          </p>
        </div>
      </div>  
        <ContestList />

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
            These contests are directly affiliated with the CP Initiative.
          </p>
        </div>
      </div>  
        <PartneredContests />

        <div className="text-lg max-w-prose mx-auto mb-6">
          <h1 className="mt-2 mb-8 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Unique Contest Hosting Platform
          </h1>
        </div>
        
        <div className="prose prose-lg text-gray-500 mx-auto mb-6">
        <img 
            width = "950px"
            src="https://cdn.discordapp.com/attachments/877330703853961268/1110262012161831056/Screen_Shot_2023-05-03_at_9.png"
            placeholder="blur"
          />

          <p className = "text-1xl text-center">
            Host your own contest on our partnered platform, ProCo. <br></br> 
            <a href="https://proco.vercel.app/login" className="underline">
                Join today!
            </a>
          </p>
        </div>


        <div className="relative pt-15 pb-15" id="how-to-join">
        <div className="max-w-prose sm:text-lg mx-auto px-4">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
            Registering Your Contest
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
      
    </div>

    
    
    </Layout>
  )
}
