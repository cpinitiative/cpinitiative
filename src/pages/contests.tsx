import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import EmailForm from "../components/video-classes/EmailForm"
import ContestList from "../components/contests/ContestList"
import Image from "next/legacy/image"
import {
  proco1,
  proco2,
} from "../components/contests/images"

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
            <h1 className="text-center text-4xl text-white font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Programming Contests <br />
              <span className="text-purple-300">for High Schoolers.</span>
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
          <ContestList />
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
                  <a href="mailto:aakashgokhale@joincpi.org" className="underline">
                    aakashgokhale@joincpi.org
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
