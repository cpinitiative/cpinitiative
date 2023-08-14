import * as React from "react"
import Image from "next/legacy/image"
import Logo from "../../../images/x-camp_cpi.png"
import Youtube from "../../Youtube"
export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full mx-auto lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24 grid grid-cols-1 lg:grid-cols-5 items-start gap-8">
            <div className="sm:text-center lg:text-left lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                April 10, 2022
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-purple-600">
                  USACO US Open Contest Solutions
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Want to learn how to solve the USACO US Open Problems? Join this
                joint workshop with X-Camp on <b>April 10</b> to gain a better
                understanding of the solutions from the contest! The Bronze
                division will be covered from <b>10am-10:45am PT</b>, the Silver
                divisions will be covered from <b>10:45am-11:30am PT</b>, then
                we'll have a panel discussion on the entire 2021-2022 USACO
                Season and predicted trends for the next season from{" "}
                <b>11:30am-12:30pm PT</b>.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/R3d3gvEGqsEbMZ8cA"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Join Mailing List
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:maggieliu@joincpi.org"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className={"lg:col-span-3 w-full max-w-2xl mx-auto space-y-6"}>
              <Youtube id="CMdPvI82D6A" />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
