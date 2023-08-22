import * as React from "react"
import Dec22Bronze from "../../../images/workshops/dec22.png"
import Image from "next/legacy/image"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full mx-auto lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24 grid grid-cols-1 lg:grid-cols-5 items-start gap-8">
            <div className="sm:text-center lg:text-left lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                January 7, 2023
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-blue-700">
                  USACO December Contest Solutions
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Want to learn how to solve the USACO December 2022 Bronze
                Problems? Join this workshop on <b>January 7</b> to gain a
                better understanding of the solutions from the contest! The
                problems will be solved live by both a USACO Platinum and a
                USACO Silver competitor at <b>4pm PST (7pm EST)</b>!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/qPfaPfg5PYYddnK18"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:maggieliu@joincpi.org"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className={"lg:col-span-3 w-full max-w-2xl mx-auto space-y-6"}>
              <Image
                src={Dec22Bronze}
                placeholder="blur"
                priority
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
