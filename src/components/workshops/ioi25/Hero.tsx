import * as React from "react"
import IOI25 from "../../../images/workshops/ioi25.png"
import Image from "next/legacy/image"
import Youtube from "../../Youtube"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full mx-auto lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24 grid grid-cols-1 lg:grid-cols-5 items-start gap-8">
            <div className="sm:text-center lg:text-left lg:col-span-2">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                November 15th
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-blue-700">2025 IOI Team Workshop</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Meet three US team members for the 2025 International Olympiad
                in Informatics! Live CF Upsolve + Open Q&A.<br></br>
                <br></br>
                Join us on <b>Saturday, November 15th 1pm PST (4pm EST)</b>!
                <br></br>
                <br></br>
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://us06web.zoom.us/meeting/register/UuimVoefQ_ev9e3gQM70Lg"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Join us!
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:ryanchou@joincpi.org"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div
                className={
                  "lg:col-span-3 w-full max-w-2xl mx-auto space-y-6 pt-10"
                }
              >
                <Youtube id="VIHFKZ1nNow" />
              </div>
            </div>

            <div className={"lg:col-span-3 w-full max-w-2xl mx-auto space-y-6"}>
              <Image
                src={IOI25}
                placeholder="blur"
                priority
                alt=""
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
