import * as React from "react"
// @ts-ignore
import HeroImg from "../../images/ContestsHero"
import EmailForm from "../classes/EmailForm"
import Youtube from './markdown/Youtube';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                August 6, 2021
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-purple-600">
                  USACO for Absolute Beginners
                </span>
              </h2>
  
              <div className="relative block w-full min-h-32 lg:min-h-64 xl:min-h-80 rounded-lg overflow-hidden focus:outline-none focus:shadow-outline bg-gray-300">
            <Youtube id={'o3zKQgPpNK0'} autoplay />
         
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/*<Img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" fluid={heroImg} alt="" />*/}
        <HeroImg className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:max-w-3xl lg:mx-auto" />
      </div>
    </div>
  )
}
