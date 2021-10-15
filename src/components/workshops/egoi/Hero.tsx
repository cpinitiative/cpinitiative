import * as React from "react"
// @ts-ignore
import heroImg from "../../../images/egoi-hero.png"
import EmailForm from "../../video-classes/EmailForm"
import Youtube from "../../Youtube"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full mx-auto lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24 grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                October 17, 2021
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-cyan-600">
                  Experience & Tips from the USA EGOI Team
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                The Competitive Programming Initiative is holding its second
                workshop on October 17th, 2pm PDT! Join us to learn from the
                experience of the 2021 EGOI (European Girls' Olympiad in
                Informatics) team!
              </p>
              <p className="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Zoom:{" "}
                <a
                  target="_blank"
                  href="https://us06web.zoom.us/j/82152516280?pwd=aHh4RHN0amxoU2duZzludW4zZHVxQT09"
                  className="underline text-blue-600"
                >
                  { "ID": 821 5251 6280, "Password": 12345}
                </a>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/X4GNptRtFAKjzynv6"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-500 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:ocmelodyyu@gmail.com"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-cyan-700 bg-cyan-200 hover:text-cyan-600 hover:bg-cyan-100 focus:outline-none focus:shadow-outline-cyan focus:border-cyan-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className={"w-full max-w-2xl mx-auto"}>
              <Image src={heroImg} placeholder="blur" priority />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
