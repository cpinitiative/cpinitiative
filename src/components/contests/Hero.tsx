import * as React from "react"
// @ts-ignore
import HeroImg from "../../images/ContestsHero"
import Link from "next/link"
import EmailForm from "../video-classes/EmailForm"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Coming soon
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Beginner
                <br />
                <span className="text-purple-600">CP Contests</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Get better at USACO by participating in monthly,
                beginner-focused Competitive Programming Contests! Targeted to
                both{" "}
                <Link href="/clubs" className="underline text-purple-600">
                  school clubs
                </Link>{" "}
                and individual contestants.
              </p>
              <p className="mt-1 text-base text-gray-500 sm:mt-2 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                We're also looking for{" "}
                <a
                  href="https://forms.gle/YfewgWkAisz9JiBC8"
                  className="underline text-purple-600"
                  target="_blank"
                >
                  problem contributions
                </a>
                !
              </p>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <span
                  id="signup"
                  className="relative"
                  style={{ bottom: "80px" }}
                />
                <p className="text-base font-medium text-gray-900">
                  Sign up to get notified when contests start!
                </p>
                <EmailForm listName={"contest"} mailjetListName={"contests"} />
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
}
