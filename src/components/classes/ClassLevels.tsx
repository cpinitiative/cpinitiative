import Link from "next/link"
import * as React from "react"

export default function ClassLevels() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Class Levels
            </h2>
            <p className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none mt-2">
              Pick your class.
            </p>
            <p className="text-xl leading-7 text-gray-300 mt-8">
              Our classes come in two levels: One for beginner Bronze
              contestants and another for USACO Silver contestants.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 text-white font-semibold text-sm uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"
                      id="tier-standard"
                    >
                      USACO Bronze
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl leading-none font-extrabold">
                    Beginner
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    Teaches the necessary techniques needed to pass USACO
                    Bronze. For students with basic programming experience.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {[
                      "Sundays, 4-6pm PT. 10/9/22 to 12/11/22 (skip 11/27).",
                      "File / Fast I/O",
                      "Time Complexity",
                      "Data Structures and Simulation",
                      "Basic Complete Search",
                      "Complete Search with Recursion",
                      "Sorting + Sets & Maps",
                      "Ad Hoc Problems",
                      "Introduction to Greedy Algorithms",
                      "Introduction to Graphs",
                    ].map(s => (
                      <li className="flex items-start" key={s}>
                        <div className="flex-shrink-0">
                          {/* Heroicon name: check */}
                          <svg
                            className="h-6 w-6 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {s}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md shadow">
                    <Link href="/classes/register/#beginner">
                      <a
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        aria-describedby="tier-standard"
                      >
                        Register Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      className="inline-flex px-4 py-1 text-white font-semibold text-sm uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"
                      id="tier-standard"
                    >
                      USACO Silver
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl leading-none font-extrabold">
                    Intermediate
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    Teaches the necessary techniques needed to pass the USACO
                    Silver contest. For students who already know Bronze-level
                    concepts.
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {[
                      "Saturdays, 4-6pm PT. 10/8/22 to 12/10/22 (skip 11/26).",
                      "Prefix Sums",
                      "Sorting with Custom Comparators",
                      "Two Pointers",
                      "More Operations on Ordered Sets",
                      "Greedy Algorithms with Sorting",
                      "Binary Search",
                      "Depth First Search",
                      "Floodfill",
                      "Introduction to Tree Algorithms",
                    ].map(s => (
                      <li className="flex items-start" key={s}>
                        <div className="flex-shrink-0">
                          {/* Heroicon name: check */}
                          <svg
                            className="h-6 w-6 text-teal-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {s}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-md shadow">
                    <div className="rounded-md shadow">
                      <Link href="/classes/register/#intermediate">
                        <a
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                          aria-describedby="tier-standard"
                        >
                          Register Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Financial Aid
                  </h3>
                </div>
                <div className="mt-4 text-lg leading-7 text-gray-600">
                  If you aren't able to pay the full amount, don't worry. We've
                  got you covered.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <Link href="/classes/register/#fa">
                  <a
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    aria-describedby="tier-standard"
                  >
                    Apply Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
