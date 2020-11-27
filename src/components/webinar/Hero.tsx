import * as React from "react";
// @ts-ignore
import HeroImg from "../../images/contests-hero.svg";
import { Link } from "gatsby"
import EmailForm from "../classes/EmailForm"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                November 28, 2020
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-purple-600">Intro to USACO</span> Webinar
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                CPI will be holding an Introduction to USACO Webinar on November 28th, 5-5:40pm PST!
                Join us to learn more about what USACO is, why you should do it, and how to get better at USACO!
              </p>
              <p className="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Zoom link: <a target="_blank" href="https://bit.ly/usaco-webinar-zoom" className="underline text-blue-600">https://bit.ly/usaco-webinar-zoom</a>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="https://docs.google.com/forms/d/1BaWsRPzK4V65nkXw744g6bh8b3sN0INpmJfMnbMve9Q/viewform" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="mailto:usacoguide@gmail.com" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Contact Us
                  </a>
                </div>
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
  );
};