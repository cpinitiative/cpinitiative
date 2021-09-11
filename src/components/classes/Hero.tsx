import * as React from "react"
// @ts-ignore
import HeroImg from "../../images/ContestsHero"
import EmailForm from "./EmailForm"

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Fully Online!
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                USACO <span className="text-purple-600">Classes</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Learn USACO through affordable, high-quality classes with
                vetted, experienced instructors and a curriculum designed and
                developed by past USACO Finalists.
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Due to high demand, we are unable to accept more students for
                the Spring semester. Join the mailing list to be notified for
                future class openings!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc0IgtbVoYsWv_2E2ZIcN8UE29OVpmx6FsiM0x9lfwNdGey3Q/viewform"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Join Mailing List
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:classes@joincpi.org"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
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
    // <div className="relative bg-white overflow-hidden">
    //   <div className="hidden lg:block lg:absolute lg:inset-0">
    //     <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
    //       <defs>
    //         <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    //           <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
    //         </pattern>
    //       </defs>
    //       <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
    //       <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
    //     </svg>
    //   </div>
    //   <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    //     <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
    //       <div className="lg:grid lg:grid-cols-12 lg:gap-8">
    //         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
    //           <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
    //             Coming soon
    //           </div>
    //           <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
    //             Free Online
    //             <br />
    //             <span className="text-purple-600">USACO Classes</span>
    //           </h2>
    //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
    //             Learn USACO through high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists.
    //           </p>
    //           <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //             <div className="rounded-md shadow">
    //               <a href="https://forms.gle/ZnxAefowRcXoaCgx7" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                 Apply Now
    //               </a>
    //             </div>
    //             <div className="mt-3 sm:mt-0 sm:ml-3">
    //               <a href="mailto:usacoguide@gmail.com" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
    //                 Contact Us
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
    //           <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
    //             <defs>
    //               <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    //                 <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
    //               </pattern>
    //             </defs>
    //             <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
    //             <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
    //           </svg>
    //           <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
    //             <a
    //               href="https://www.youtube.com/watch?v=ueNT-w7Oluw"
    //               target="_blank"
    //               className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
    //             >
    //               <img className="w-full" src="https://img.youtube.com/vi/ueNT-w7Oluw/maxresdefault.jpg" alt="What is Competitive Programming?" />
    //               <div className="absolute inset-0 w-full h-full flex items-center justify-center">
    //                 <svg className="h-20 w-20 text-purple-500" fill="currentColor" viewBox="0 0 84 84">
    //                   <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
    //                   <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
    //                 </svg>
    //               </div>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  )
}
