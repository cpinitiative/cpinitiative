import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import Logo from "./Logo"
import { useRouter } from "next/router"
import ClassesDropdown from "../components/ClassesDropdown"

export default function Header({
  noBanner,
  dark = false,
}: {
  noBanner?: boolean
  dark?: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const internalLinks = [
    {
      label: "Clubs",
      url: "/clubs",
    },
    {
      label: "Contests",
      url: "/contests",
    },
    {
      label: "Workshops",
      url: "/workshops",
    },
    {
      label: "CPG",
      url: "/cpg",
    },
    {
      label: "Competition",
      url: "/competition",
    }
  ]

  const linkClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 transition duration-150 ease-in-out " +
    (dark
      ? "text-gray-400 hover:text-gray-200 hover:border-transparent focus:outline-none focus:text-gray-200 focus:border-gray-600"
      : "text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300")
  const activeLinkClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out " +
    (dark
      ? "border-transparent text-gray-100 focus:border-gray-600"
      : "border-purple-500 text-gray-900 focus:border-purple-700")

  const blockLinkClasses =
    "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium focus:outline-none transition duration-150 ease-in-out " +
    (!dark
      ? "text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700 hover:border-gray-500 focus:text-gray-200 focus:bg-gray-700 focus:border-gray-300")
  const activeBlockLinkClasses =
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium focus:outline-none transition duration-150 ease-in-out " +
    (!dark
      ? "border-purple-500 text-purple-700 bg-purple-50 focus:text-purple-800 focus:bg-purple-100 focus:border-purple-700"
      : "border-purple-500 text-purple-100 bg-purple-800 focus:text-purple-50 focus:bg-purple-500 focus:border-purple-700")

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <nav
      className={`${
        dark ? "bg-gray-900" : "bg-white"
      } shadow fixed inset-x-0 top-0 z-30`}
    >
      {/*{!noBanner && (*/}
      {/*  <div className="relative bg-indigo-700">*/}
      {/*    <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">*/}
      {/*      <div className="pr-16 sm:text-center sm:px-16">*/}
      {/*        <p className="font-medium text-white">*/}
      {/*          <span className="md:hidden">Class registrations open!</span>*/}
      {/*          <span className="hidden md:inline">*/}
      {/*            Class registrations are now open!*/}
      {/*          </span>*/}
      {/*          <span className="block sm:ml-2 sm:inline-block">*/}
      {/*            <Link*/}
      {/*              to="/classes"*/}
      {/*              className="text-white font-bold underline"*/}
      {/*            >*/}
      {/*              Learn more &rarr;*/}
      {/*            </Link>*/}
      {/*          </span>*/}
      {/*        */}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      /!*<div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">*!/*/}
      {/*      /!*  <button type="button" className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150" aria-label="Dismiss">*!/*/}
      {/*      /!*    /!* Heroicon name: x *!/*!/*/}
      {/*      /!*    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*!/*/}
      {/*      /!*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*  </button>*!/*/}
      {/*      /!*</div>*!/*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/">
              <a className="flex-shrink-0 flex items-center text-xl font-bold space-x-2">
                <div className="h-9 w-9">
                  <Logo />
                </div>
                <span
                  className={`font-bold text-xl ${dark ? "text-white" : ""}`}
                >
                  CP Initiative
                </span>
              </a>
            </Link>
            <div className="hidden md:ml-8 md:flex space-x-8">
              <a
                href="https://usaco.guide/"
                target="_blank"
                className={linkClasses}
              >
                USACO Guide
                {/*<svg className="w-5 h-6 inline-block text-gray-400 ml-2" fill="none" stroke="currentColor"*/}
                {/*     style={{*/}
                {/*       paddingBottom:"0.125rem"*/}
                {/*     }}*/}
                {/*     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                {/*  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                {/*        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>*/}
                {/*</svg>*/}
              </a>

              <ClassesDropdown dark={dark} />

              {internalLinks.map(link => (
                <Link href={link.url} key={link.url}>
                  <a
                    className={
                      link.url === router.pathname
                        ? activeLinkClasses
                        : linkClasses
                    }
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              className={
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out " +
                (!dark
                  ? "text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-500"
                  : "text-gray-600 hover:text-gray-400 hover:bg-gray-800 focus:bg-gray-700 focus:text-gray-500")
              }
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}

              {isOpen && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={(isOpen ? "block" : "hidden") + " md:hidden"}>
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="https://usaco.guide/"
            target="_blank"
            className={blockLinkClasses}
          >
            USACO Guide
          </a>

          <Link href="/classes">
            <a
              className={
                "/classes" === router.pathname
                  ? activeBlockLinkClasses
                  : blockLinkClasses
              }
            >
              Live Classes
            </a>
          </Link>

          <Link href="/video-classes">
            <a
              className={
                "/video-classes" === router.pathname
                  ? activeBlockLinkClasses
                  : blockLinkClasses
              }
            >
              Self-Study Classes
            </a>
          </Link>

          {internalLinks.map(link => (
            <Link href={link.url} key={link.url}>
              <a
                className={
                  link.url === router.pathname
                    ? activeBlockLinkClasses
                    : blockLinkClasses
                }
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
