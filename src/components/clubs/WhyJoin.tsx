import * as React from "react"

export default function WhyJoin() {
  return (
    <div className="relative pt-32 pb-32 overflow-hidden" id="benefits">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Teaching Resources (Early Access)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We provide slideshows and problemsets for USACO Bronze and
                  Silver, based off of the{" "}
                  <a
                    href="https://usaco.guide/"
                    target="_blank"
                    className="underline"
                  >
                    USACO Guide
                  </a>
                  . Each division is designed to be completed in roughly one
                  semester.
                </p>
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/document/d/1RWYE61nrC5gcBvHjLTaJc9h4NeiXB-d2YX3xq0tmgt8/edit"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    View Curriculum Syllabus
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <a
              className="block px-4 sm:px-6 lg:px-0 lg:m-0 lg:relative lg:h-full"
              target="_blank"
              href="https://docs.google.com/presentation/d/1n2aXzhSfgbo8GoVpeyeygw1Zi7DATfy-C2wO-O5QElA/present#slide=id.g78b50dee42_0_129"
            >
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/prefix_sum_slides.png"
                alt="Example Slideshow"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Club Learning Management System (Early Access)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Use a Learning Management System that's fully integrated with
                  the USACO Guide to post announcements and assign problems to
                  club members. Includes a live leaderboard to encourage
                  competition!
                </p>
                <div className="mt-6">
                  <a
                    href="https://usaco.guide/groups/join?key=ixvVQZVoaT8oZy7GB8ea"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Try it out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="block px-4 sm:px-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/groups.png"
                alt="Club LMS"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
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
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  CP Contests and Prizes
                  <br />
                  (Coming Soon)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Through our partnership with CompCS.Codes, CPI clubs have
                  access to competitive programming contests designed
                  specifically for school clubs and exclusive prizes available
                  only to CPI club members.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.compcs.codes/"
                    target="_blank"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Go to CCC
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <a
              className="block px-4 sm:px-6 lg:px-0 lg:m-0 lg:relative lg:h-full"
              target="_blank"
              href="https://docs.google.com/presentation/d/1n2aXzhSfgbo8GoVpeyeygw1Zi7DATfy-C2wO-O5QElA/present#slide=id.g78b50dee42_0_129"
            >
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/compcs_codes.png"
                alt="compcs.codes website"
              />
            </a>
          </div>
        </div>
      </div> */}
    </div>

    // <div className="bg-gray-50 overflow-hidden" id="benefits">
    //   <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    //     <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
    //       <defs>
    //         <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    //           <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
    //         </pattern>
    //       </defs>
    //       <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
    //     </svg>
    //
    //     <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
    //       <div className="lg:col-span-1">
    //         <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    //           Member Benefits
    //         </h2>
    //       </div>
    //       <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
    //         <div>
    //           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
    //             {/* Heroicon name: scale */}
    //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    //             </svg>
    //           </div>
    //           <div className="mt-5">
    //             <h4 className="text-lg leading-6 font-medium text-gray-900">Resources</h4>
    //             <p className="mt-2 text-base leading-6 text-gray-500">
    //               We'll provide curriculum and resources for your competitive programming club.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mt-10 sm:mt-0">
    //           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
    //             {/* Heroicon name: lightning-bolt */}
    //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    //             </svg>
    //           </div>
    //           <div className="mt-5">
    //             <h4 className="text-lg leading-6 font-medium text-gray-900">Contests</h4>
    //             <p className="mt-2 text-base leading-6 text-gray-500">
    //               Participate in school team contests and compete in friendly competitions against other schools!
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mt-10 sm:mt-0">
    //           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
    //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    //             </svg>
    //           </div>
    //           <div className="mt-5">
    //             <h4 className="text-lg leading-6 font-medium text-gray-900">Support</h4>
    //             <p className="mt-2 text-base leading-6 text-gray-500">
    //               Join a community of competitive programming clubs across the country. We'll help you get your CP club up and running!
    //             </p>
    //           </div>
    //         </div>
    //         <div className="mt-10 sm:mt-0">
    //           <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
    //             {/* Heroicon name: globe-alt */}
    //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    //             </svg>
    //           </div>
    //           <div className="mt-5">
    //             <h4 className="text-lg leading-6 font-medium text-gray-900">Networking</h4>
    //             <p className="mt-2 text-base leading-6 text-gray-500">
    //               Meet other talented competitive programmers across the country, including USACO Finalists and even IOI winners!
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
