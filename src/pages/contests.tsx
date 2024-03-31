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
import Image from "next/legacy/image"
import {
  taco,
  lit,
  algirlithm,
  proco1,
  proco2,
  teamscode,
  bapc,
  calico
} from "../components/contests/images"
import classNames from "classnames"

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
              alt="Programmers competing in a contest"
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
              Join high-quality programming contests hosted by students, for
              students. These contests are partnered and part of the CPI
              Competition Program.
            </p>

            <div className="items-center text-center max-w-md mt-12 mt-10 mx-auto sm:max-w-none sm:flex sm:justify-center">
              <EmailForm listName={"contests"} mailjetListName={"contests"} />
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
          <p className="text-1xl text-center">
            Organizing a new contest isn't easy, and neither is keeping a
            contest running for many years. Get access to resources, manpower,
            and support to host your high school programming contest.
          </p>
        </div>
        <div>
          <h2 className="pt-1 mt-4 mb-8 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Partnered Tournaments
          </h2>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
              The CALICO Informatics Competition
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={102}
                  src={calico}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  The CALICO Informatics Competition is a high-school programming competition
                  hosted by students at UC Berkeley. We create contest problems to promote 
                  the understanding of useful algorithms and encourage students to grow their problem-solving skills!
                </p>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://calico.cs.berkeley.edu/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://discord.com/invite/6bvzygFbKK"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
              Lexington Informatics Tournament (LIT)
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={270}
                  src={lit}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  LIT (Lexington Informatics Tournament) is a competitive
                  programming tournament for middle/high school students, hosted
                  by members of the LexMACS club from Lexington High School,
                  along with many guest problemsetters/testers.
                </p>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://lit.lhsmathcs.org/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://discord.gg/k6yzFdZ"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
              The Andover Computing Open (TACO)
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={430}
                  src={taco}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  The Andover Computing Open (TACO) is a secondary school
                  tournament run and designed by Phillips Academy Andover
                  students. Compete for prizes, attend workshops, and join a
                  community of programmers!
                </p>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://www.andovercomputingopen.com/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://discord.com/invite/s5Wp2QaSCJ"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
            Bay Area Programming Contest (BAPC)
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={300}
                  src={bapc}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  Bay Area Programming Contest is an in-person contest in ICPC format, with an online mirror also available. This contest is hosted by the Gunn Competitive Programming Club.
                </p>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://bapc.gunncpc.com/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://discord.gg/KeCwPgwE82"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
              alGIRLithm
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={270}
                  src={algirlithm}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  alGIRLithm is a student-led high school programming contest
                  working to inspire the next generation of female computer
                  scientists by making competitive programming accessible to
                  high school girls. Girls with all levels of experience in
                  competitive programming are encouraged to join!
                </p>
                {/* Add 2 button elements side-to-side in this div. One button should be on the left side, and the other on the right side.*/}
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://algirlithm.org/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://discord.gg/5Q9Q4Q5"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-l sm:text-xl font-semibold tracking-tight text-purple-600 mt-2 p-2 px-7">
              TeamsCode
            </h3>
            {/* Write code to display Image and a paragraph to the right of the image with text. */}
            <div className="flex flex-row">
              <div className="flex flex-col p-2 px-6">
                <Image
                  objectPosition="center center"
                  width={450}
                  height={270}
                  src={teamscode}
                />
              </div>
              <div className="flex flex-col prose prose-lg text-gray-500 mx-auto m-2 px-4">
                <p className="text-1xl text-center">
                  TeamsCode is a student-run 501(c)(3) non-profit that works to
                  encourage middle school and high school students to study
                  computer science. We work with teachers and sponsors to create
                  awesome programming contests – both online and in-person!
                </p>
                <div className="flex flex-row items-center justify-center">
                  <div className="flex flex-col">
                    <a
                      href="https://teamscode.org/"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Find Out More
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://go.teamscode.org/discord"
                      target="_blank"
                      className="flex items-center justify-center px-4 py-3 m-2 border text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-90 hover:bg-opacity-70 sm:px-8"
                    >
                      Join their Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg max-w-prose mx-auto mb-6 pt-16">
          <h1 className="mt-2 mb-8 text-4xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Unique Contest Hosting Platform
          </h1>
        </div>

        <div className="prose prose-lg text-gray-500 mx-auto mb-6">
          <p className="text-1xl text-center">
            We are proud to announce that we are partnered with ProCo, a unique
            contest hosting platform. ProCo allows students to host their own
            contests and events easily.
          </p>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Free of Charge
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    ProCo allows users to host and run their own contests on
                    their platform at no cost. Nothing on the platform is locked
                    behind a paywall.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <a className="block px-4 sm:px-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={proco1}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div></div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Easy to Use
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    ProCo offers easy problem submissions and clean UI to
                    expedite the process of hosting a contest.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="block px-4 sm:px-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src={proco2}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg text-gray-500 mx-auto mb-6">
          <p className="text-1xl text-center">
            <a
              href="https://proco.vercel.app/"
              target="_blank"
              className="flex items-center justify-center px-4 py-3 m-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white sm:px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Join Today!
            </a>
          </p>
        </div>

        <div className="relative pt-15 pb-15">
          <div className="max-w-prose sm:text-lg mx-auto px-4 py-6">
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
                  Email{" "}
                  <a href="mailto:melodyyu@joincpi.org" className="underline">
                    melodyyu@joincpi.org
                  </a>{" "}
                  with information about your contest to apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
