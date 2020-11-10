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
                CPI will be holding an Introduction to USACO Webinar on November 28th, 5-6pm PST!
                Join us to learn more about what USACO is, why you should do it, and how to get better at USACO!
                While we encourage you to sign up below to help us gauge attendance, registration is not required to attend. You can join the webinar even without registering at
                {" "}<a href="https://bit.ly/usaco-webinar-zoom" className="font-bold hover:underline" target={"_blank"} rel={"noreferrer noopener"}>https://bit.ly/usaco-webinar-zoom</a>.
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <a
                    target={"_blank"} rel={"noopener noreferrer"} href={"https://docs.google.com/forms/d/1BaWsRPzK4V65nkXw744g6bh8b3sN0INpmJfMnbMve9Q/viewform?edit_requested=true"}
                          className={("bg-purple-500 hover:bg-purple-400 focus:outline-none focus:bg-purple-400") + " w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out"}>
Sign Up Now                  </a>
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