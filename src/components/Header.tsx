import * as React from "react";
import { Link } from "gatsby"
import { useState } from "react"
import Logo from "./Logo"

export default function Header({noBanner}:{
  noBanner?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const internalLinks = [
    {
      label: "Classes",
      url: "/classes",
    },
    {
      label: "Clubs",
      url: "/clubs",
    },
    {
      label: "Contests",
      url: "/contests",
    },
  ];

  return (

    <nav className="bg-white shadow fixed inset-x-0 top-0 z-30">
      {!noBanner && <div className="relative bg-indigo-700">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              Class registrations open!
            </span>
            <span className="hidden md:inline">
              Spring 2021 class registrations are now open!
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link to="/classes" className="text-white font-bold underline">
                Learn more &rarr;
              </Link>
            </span>
            {/*<span className="md:hidden">*/}
            {/* CPI is hosting an Introduction to USACO Webinar!*/}
            {/*</span>*/}
            {/*<span className="hidden md:inline">*/}
            {/*  On November 28, 5-5:40pm, CPI will be hosting an Introduction to USACO Webinar!*/}
            {/*</span>*/}
            {/*<span className="block sm:ml-2 sm:inline-block">*/}
            {/*  <Link to="/webinar" className="text-white font-bold underline">*/}
            {/*    Learn more &rarr;*/}
            {/*  </Link>*/}
            {/*</span>*/}
          </p>
        </div>
        {/*<div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">*/}
        {/*  <button type="button" className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150" aria-label="Dismiss">*/}
        {/*    /!* Heroicon name: x *!/*/}
        {/*    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
        {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />*/}
        {/*    </svg>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center text-xl font-bold">
              <Logo />
            </Link>
            <div className="hidden sm:ml-8 sm:flex space-x-8">
              <a href="https://usaco.guide/" target="_blank" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
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
              {internalLinks.map(link => (
                <Link to={link.url} getProps={({ isCurrent }) => ({
                  className: !isCurrent
                    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                    : 'inline-flex items-center px-1 pt-1 border-b-2 border-purple-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-purple-700 transition duration-150 ease-in-out',
                })}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen &&
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>}

              {isOpen &&
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>}
            </button>
          </div>
        </div>
      </div>

      <div className={(isOpen ? 'block' : 'hidden') + " sm:hidden"}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="https://usaco.guide/" target="_blank" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">USACO Guide</a>

          {internalLinks.map(link => (
            <Link to={link.url} getProps={({ isCurrent }) => ({
              className: !isCurrent
                ? 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
                : 'block pl-3 pr-4 py-2 border-l-4 border-purple-500 text-base font-medium text-purple-700 bg-purple-50 focus:outline-none focus:text-purple-800 focus:bg-purple-100 focus:border-purple-700 transition duration-150 ease-in-out',
            })}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}