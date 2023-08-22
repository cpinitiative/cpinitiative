import * as React from "react"
import Sparkles from "react-sparkle"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Newsletter from "../components/index/Newsletter"
import RecordedClassInstructors from "../components/video-classes/RecordedClassInstructors"
import Link from "next/link"
// import banner
import banner from "../images/video-classes/banner.png"

export default function Classes() {
  return (
    <Layout>
      <SEO
        title="Self-Study USACO Classes"
        description="Learn USACO through affordable, high-quality classes with a curriculum designed and developed by past USACO Finalists. Designed from the ground-up to embrace the self-study video format."
      />

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header noBanner={true} dark />
          <div className="margin-top-nav" />
          <div className="relative bg-blue-600">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:inline">
                USACO Bronze Classes are now free!
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <a
                    href="https://usaco.guide/groups/join?key=GzyZvOTMidyo8e4EIMLP"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-bold underline"
                  >
                    Learn more &rarr;
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
          <div>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-8 lg:gap-8">
                  <div className="mx-auto lg:ml-0 max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center lg:col-span-5">
                    <div className="lg:py-24">
                      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl xl:text-6xl mt-2">
                        <span className="block" style = {{position: "relative" }}>
                          Free Self-Study
                          </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">
                        USACO Bronze Classes
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Learn USACO through&nbsp; 
                        <span style = {{position: "relative" }}>
                          free,&nbsp; 
                            <Sparkles 
                              overflowPx={1}
                              count={1} 
                              fadeOutSpeed={20}
                              color="gold"
                            />                          
                        </span>
                        high-quality
                        classes with a curriculum designed and developed by past USACO
                        Finalists. Designed from the ground-up to embrace the
                        self-study video format.
                      </p>
                      <div className="mt-8 sm:mt-12 space-x-4">
                        <Link
                          href="https://usaco.guide/groups/join?key=GzyZvOTMidyo8e4EIMLP"
                          className="inline-flex sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                          
                            View Now
                          
                        </Link>
                        <a
                          href="mailto:classes@joincpi.org"
                          target="_blank"
                          className="inline-flex sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-md shadow bg-gray-800 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
                        >
                          Contact Us
                        </a>
                      </div>
                      <p className="mt-4 sm:mt-6 text-sm text-gray-300 sm:mt-5 lg:text-base">
                        <Link href="/classes" className="hover:underline">
                          
                            Looking for live classes? &rarr;
                          
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:mt-10 lg:-mb-16 lg:relative lg:col-span-3">
                    <div className="mx-auto max-w-md px-4 sm:max-w-xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="/classes_illustration.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:pt-24 lg:pt-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  Why This Class?
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Learning USACO can be hard. But it doesn't have to be.
                </p>
                <p className="mt-8 max-w-prose mx-auto text-xl text-gray-500">
                  {/* <span className="font-bold block mb-2 text-gray-900">
                    Affordable doesn't mean low-quality.
                  </span> */}
                  <span>
                    If you're struggling to get started with USACO, you've come
                    to the right place. Our team of past USACO Finalists have
                    created a well-structured course that will teach you all the
                    major topics of Bronze in a clear and organized fashion.
                  </span>
                </p>

                <div className="pt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Video Explanations
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Every problem comes with a video solution where an
                            instructor walks you through how to solve the
                            problem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Learning Management System
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Our hand-crafted Learning Management System comes
                            with a leaderboard to incentivize friendly
                            competition!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              {/* Heroicon name: outline/shield-check */}
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Trusted Curriculum
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Our curriculum-writing team is comprised of multiple
                            USACO Finalists with extensive competitive
                            experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Free of Charge
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            This course is completely free! Anyone is able to 
                            access the resources and curriculum within the 
                            self-study courses.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  fill="transparent"
                                  d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                  fill="transparent"
                                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Integrated with the USACO Guide
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            Each lesson has a corresponding module from the{" "}
                            <a
                              href="https://usaco.guide/"
                              target="_blank"
                              className="underline"
                            >
                              USACO Guide
                            </a>
                            , where you can review a concept or find additional
                            practice.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <svg
                                className="h-6 w-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                              </svg>
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            Lifetime Updates
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            We'll keep updating our course based on your
                            feedback to make it even better! You'll get lifetime
                            updates, free of charge.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-4">
              <div className="relative pb-8">
                <div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="relative rounded-2xl px-8 py-8 bg-cyan-700 overflow-hidden shadow-xl sm:px-12 sm:py-12 md:py-20">
                    <div aria-hidden="true" className="absolute inset-0 mt-20">
                      <svg
                        className="absolute inset-0 h-full w-full"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 1463 360"
                      >
                        <path
                          className="text-cyan-600 text-opacity-40"
                          fill="currentColor"
                          d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                        />
                        <path
                          className="text-cyan-800 text-opacity-40"
                          fill="currentColor"
                          d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                        />
                      </svg>
                    </div>
                    <div className="relative">
                      <div className="text-left sm:text-center">
                        <h2 className="text-2xl font-extrabold text-white tracking-tight sm:text-4xl">
                          Embracing the video format.
                        </h2>
                        <p className="mt-2 sm:mt-6 mx-auto max-w-2xl sm:text-lg text-cyan-200">
                          This course isn't just a series of recorded live
                          classes. Every video in this course is designed to be
                          used in a self-study environment, taking full
                          advantage of our custom online learning platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-16" />

            {/* Testimonial section */}
            {/*<div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">*/}
            {/*  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">*/}
            {/*    <div className="relative lg:-my-8">*/}
            {/*      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />*/}
            {/*      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">*/}
            {/*        <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">*/}
            {/*          <img className="object-cover lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">*/}
            {/*      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">*/}
            {/*        <blockquote>*/}
            {/*          <div>*/}
            {/*            <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">*/}
            {/*              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />*/}
            {/*            </svg>*/}
            {/*            <p className="mt-6 text-2xl font-medium text-white">*/}
            {/*              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.*/}
            {/*            </p>*/}
            {/*          </div>*/}
            {/*          <footer className="mt-6">*/}
            {/*            <p className="text-base font-medium text-white">Judith Black</p>*/}
            {/*            <p className="text-base font-medium text-cyan-100">CEO at PureInsights</p>*/}
            {/*          </footer>*/}
            {/*        </blockquote>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="relative bg-white overflow-hidden">
              <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto">
                  <svg
                    className="absolute top-12 left-full transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                  >
                    <defs>
                      <pattern
                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="384"
                      fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                    />
                  </svg>
                  <svg
                    className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                  >
                    <defs>
                      <pattern
                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="384"
                      fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                    />
                  </svg>
                  {/*<svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">*/}
                  {/*  <defs>*/}
                  {/*    <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">*/}
                  {/*      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />*/}
                  {/*    </pattern>*/}
                  {/*  </defs>*/}
                  {/*  <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />*/}
                  {/*</svg>*/}
                </div>
              </div>
              <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto mb-6">
                  <p className="text-base text-center leading-6 text-cyan-600 font-semibold tracking-wide uppercase">
                    Info
                  </p>
                  <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Class Details
                  </h1>
                </div>
                <div className="prose prose-lg text-gray-500 mx-auto">
                  <p>
                    This eight-week program is designed to teach you the major
                    concepts in the Bronze division of USACO.
                  </p>

                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/ZZBCCECaSxM"
                      title="USACO Bronze Class Introduction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <h3>Class Structure</h3>
                  <p>
                    Each week, we'll introduce one topic in Bronze, and we'll
                    provide a series of curated problems related to that topic
                    in incremental difficulty. Every problem will come with
                    video and code solutions in C++ and Java (Python coming
                    soon). You'll get access to all 8 weeks of curriculum at
                    once.
                  </p>

                  <ol>
                    <li>Time Complexity and Rectangle Geometry</li>
                    <li>Data Structures and Simulation</li>
                    <li>Basic Complete Search</li>
                    <li>Complete Search with Recursion</li>
                    <li>Sorting, Sets, and Maps</li>
                    <li>Ad Hoc Problems</li>
                    <li>Greedy Algorithms</li>
                    <li>Introduction to Graphs</li>
                  </ol>

                  <h3>Target Audience</h3>
                  <p>
                    This class is targeted to people who are familiar with the
                    basics of programming (ie. for loops, etc), but are new to
                    USACO. This class teaches you the major concepts needed for
                    Bronze. If you are already familiar with Bronze concepts,
                    this class will likely be too easy for you.
                  </p>
                  <p>
                    Additionally, this class is heavily video-based. If you
                    learn better through text, you may want to use the{" "}
                    <a
                      href="https://usaco.guide/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      USACO Guide
                    </a>{" "}
                    instead.
                  </p>

                  <h3>Programming Language</h3>
                  <p>
                    Both C++ and Java have first-class support. Python is also
                    supported, but we're still working on adding Python videos
                    to some sections.
                  </p>

                  <h3>Pricing</h3>
                  <p>
                    These classes are <b>not for profit</b> -- instructors are
                    unpaid and volunteer their time to help USACO contestants.
                    That's why we've chosen to make these classes free, and open 
                    to everyone. If you want to support us, you can make a donation 
                    via{" "}
                    <a
                      href="https://www.paypal.com/donate?hosted_button_id=FKG88TSTN82E4"
                      target="_blank"
                      rel="noreferrer"
                    >
                    PayPal
                    </a>{" "}
                    instead.

                  </p>

                  <h3>How is this different from the Guide?</h3>
                  <p>
                    These classes follow the Guide curriculum, but are{" "}
                    <b>video-based</b> rather than text-based. We also selected
                    a subset of the most important Guide problems rather than
                    using all of them.
                  </p>

                  <h3>How do I promote from Bronze to Silver?</h3>
                  <p>
                    First, you should take this course so you know all the major
                    Bronze concepts. Then, you'll need to <b>practice</b> with
                    old USACO problems (or USACO Guide problems). The goal of
                    taking this course is to make you able to attempt Bronze
                    problems and understand editorials when you get stuck.
                  </p>

                  <h3 id="important">Important Information </h3>
                  <ol>
                    <li>
                      <p>
                        If you already know all the Bronze concepts, this class
                        may be too easy for you.
                      </p>
                    </li>
                    <li>
                      <p>
                        The content of this course is extremely similar to the{" "}
                        <a
                          href="https://usaco.guide/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          USACO Guide
                        </a>
                        . The difference is that this course is
                        video-based rather than text-based. If you're learning
                        fine with the USACO Guide, there is no need to take this
                        class.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-cyan-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div className="lg:self-center">
                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Convinced?</span>
                        <span className="block">
                          Start your USACO journey today.
                        </span>
                      </h2>
                      <p className="mt-4 text-lg leading-6 text-cyan-200">
                        After taking this class, you'll be comfortable with all
                        the major concepts of USACO Bronze, and will be
                        well-equipped to tackle USACO Bronze problems.
                      </p>
                      <Link
                        href="https://usaco.guide/groups/join?key=GzyZvOTMidyo8e4EIMLP"
                        className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-cyan-600 hover:bg-indigo-50">
                        
                          View Now
                        
                      </Link>
                      {/* <p className="mt-4 text-cyan-200">
                        <a
                          href="https://usaco.guide/groups/join?key=NKR6vjyQtHkxXZMq68gy"
                          target="_blank"
                          className="hover:underline"
                        >
                          Or try it out for free first! &rarr;
                        </a>
                      </p> */}
                    </div>
                  </div>
                  <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                    <img
                      className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-8 lg:translate-y-16"
                      src="/class.png"
                      alt="Class LMS"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <ClassLevels /> */}

            <RecordedClassInstructors />

            <Newsletter />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// import * as React from "react";
// import Layout from "../components/Layout"
// import SEO from "../components/SEO"
// import Header from "../components/Header"
// import Hero from "../components/classes/Hero"
// import NotLowQuality from "../components/classes/NotLowQuality"
//
// export default function Classes() {
//   return (
//     <Layout>
//       <SEO title="Free Online USACO Classes" description="Learn USACO through high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists." />
//
//       <Header />
//
//       <div className="margin-top-nav"/>
//
//       <div className="relative bg-purple-600">
//         <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
//           <div className="pr-16 sm:text-center sm:px-16">
//             <p className="font-medium text-white">
//               Trial classes are underway!
//               <span className="block sm:ml-2 sm:inline-block">
//               <a href="https://usaco.guide/class/8yBhLoXL5uwpPrPmzIT5/join" target="_blank" className="text-white font-bold underline">
//                 Join Now &rarr;
//               </a>
//             </span>
//             </p>
//           </div>
//         </div>
//       </div>
//
//       <Hero />
//
//       <div className="relative px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-lg max-w-prose mx-auto mb-6">
//           <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Trial Classes</h1>
//         </div>
//         <div className="prose prose-lg text-gray-500 mx-auto">
//           <ul>
//             <li><b>Timing:</b> Classes will be held on <b>Saturdays, <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=CPI+Trial+Classes&iso=20201031T18&p1=104&ah=2" target="_blank">6:00-8:00PM (CST)</a></b>, from 10/31/2020 to 12/5/2020.</li>
//             <li><b>RSVP:</b> Sign up <a href="https://docs.google.com/forms/d/e/1FAIpQLSceTIaBikAACDla9OYtpHys596be3WPzkIT3LpjaFJovfDfAg/viewform" target="_blank">here!</a></li>
//           </ul>
//           <p>
//             There will be 6 classes in total - the first 3 are for students at the USACO Bronze level, and the last 3 are for students at the USACO Silver level. However, anyone is free to attend any class that sounds interesting, and there are no restrictions based on skill level. Because these are trial classes, each class will have a completely different format. We want your feedback! Please let us know what you thought about the class you attended, possible changes we could make, things you want to see stay the same, etc.
//           </p>
//           <ol>
//             <li>Bronze Class 1 (10/31/2020): Introduction to Sets and Maps</li>
//             <li>Bronze Class 2 (11/7/2020): Introduction to Greedy Algorithms</li>
//             <li>Bronze Class 3 (11/14/2020): Introduction to Graphs</li>
//             <li>Silver Class 1 (11/21/2020): More Operations on Ordered ets</li>
//             <li>Silver Class 2 (11/28/2020): Prefix Sums</li>
//             <li>Silver Class 3 (12/5/2020): Two Pointers</li>
//           </ol>
//         </div>
//       </div>
//
//       <NotLowQuality />
//
//       <div className="relative py-16 bg-white overflow-hidden">
//         <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
//           <div className="relative h-full text-lg max-w-prose mx-auto">
//             <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
//               <defs>
//                 <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                   <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
//                 </pattern>
//               </defs>
//               <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
//             </svg>
//             <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
//               <defs>
//                 <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                   <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
//                 </pattern>
//               </defs>
//               <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
//             </svg>
//             <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
//               <defs>
//                 <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//                   <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
//                 </pattern>
//               </defs>
//               <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
//             </svg>
//           </div>
//         </div>
//         <div className="relative px-4 sm:px-6 lg:px-8">
//           <div className="text-lg max-w-prose mx-auto mb-6">
//             <p className="text-base text-center leading-6 text-purple-600 font-semibold tracking-wide uppercase">Course Info</p>
//             <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Class Format</h1>
//           </div>
//           <div className="prose prose-lg text-gray-500 mx-auto">
//             <p>A CPI course consists of 12 weekly classes, each of which lasts 2 hours. Classes will go over challenging example problems and contain problemsets for homework.</p>
//             <p>Instructors will be able to answer any questions students may have during class. Students requiring personal assistance can reach out to instructors for one-on-one help after class.</p>
//             <p>In addition, there will be a contest every few weeks to allow students to identify their weak points and practice accordingly.</p>
//
//             <h3>Class Schedule</h3>
//             <ul>
//               <li>Introductory Class - Fridays, 7:00-9:00 pm (GMT -05:00)</li>
//               <li>Intermediate Class (Time Slot 1) - Wednesdays, 6:00-8:00 pm (GMT -05:00)</li>
//               <li>Intermediate Class (Time Slot 2) - Fridays, 6:00-8:00 pm (GMT -05:00)</li>
//               <li>Advanced Class - Wednesday, 7:00-9:00 pm (GMT -05:00)</li>
//             </ul>
//
//             <h3>Introductory Class</h3>
//             <p>This course is meant for students who already know the basics of a programming language and are interested in learning more about competitive programming. The course will teach the necessary techniques needed to pass USACO Bronze.</p>
//             <b>Syllabus (not exhaustive):</b>
//             <ul>
//               <li>File / Fast I/O</li>
//               <li>Time Complexity</li>
//               <li>Data Structures</li>
//               <li>Simulation</li>
//               <li>Rectangle Geometry</li>
//               <li>Sorting Problems</li>
//               <li>Sets & Maps</li>
//               <li>Complete Search</li>
//               <li>Ad Hoc Problems</li>
//               <li>Greedy Algorithms</li>
//               <li>Graphs</li>
//             </ul>
//
//             <h3>Intermediate Class</h3>
//             <p>This course is meant for students who are in the USACO Silver division or have taken our Introductory Class. The course will teach the necessary techniques needed to pass the USACO Silver contest.</p>
//             <b>Syllabus (Not Exhaustive):</b>
//             <ul>
//               <li>Binary Search on Sorted Array</li>
//               <li>Operations on Ordered Sets</li>
//               <li>Custom Comparators</li>
//               <li>Unordered Sets & Maps</li>
//               <li>Prefix Sums</li>
//               <li>Two Pointers</li>
//               <li>Binary Search on the Answer</li>
//               <li>Greedy Algorithms with Sorting</li>
//               <li>Depth First Search</li>
//               <li>Graph Two-Coloring</li>
//               <li>Floodfill</li>
//               <li>Tree Algorithms</li>
//               <li>Functional Graphs</li>
//             </ul>
//
//             <h3>Advanced Class</h3>
//             <p>This course is meant for students who are in the USACO Gold division or have taken our Intermediate Class. The course will teach the necessary techniques needed to pass the USACO Gold contest.</p>
//
//             <b>Syllabus (Not Exhaustive):</b>
//             <ul>
//               <li>Number Theory</li>
//               <li>Breadth First Search</li>
//               <li>Shortest Paths</li>
//               <li>Dynamic Programing</li>
//               <li>Stacks</li>
//               <li>Sliding Window</li>
//               <li>Disjoint Set Union</li>
//               <li>Topological Sort</li>
//               <li>Minimum Spanning Trees</li>
//               <li>String Hashing</li>
//               <li>Point Update Range Sum</li>
//               <li>Euler Tour Technique</li>
//             </ul>
//
//           </div>
//         </div>
//       </div>
//
//       <div className="bg-gray-50">
//         <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
//             Ready to get started?
//             <br />
//             <span className="text-purple-600">Join CPI Classes today!</span>
//           </h2>
//           <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
//             <div className="inline-flex rounded-md shadow">
//               <a href="https://forms.gle/ZnxAefowRcXoaCgx7" target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
//                 Apply Now
//               </a>
//             </div>
//             <div className="ml-3 inline-flex rounded-md shadow">
//               <a href="mailto:usacoguide@gmail.com" target="_blank" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-600 bg-white hover:text-purple-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };