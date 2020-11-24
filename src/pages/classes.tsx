import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/classes/Hero"
import Header from "../components/Header"
import NotLowQuality from "../components/classes/NotLowQuality"
import ClassLevels from "../components/classes/ClassLevels"
import ClassInstructors from "../components/classes/ClassInstructors"


export default function Contests() {
  return (
    <Layout>
      <SEO title="Online USACO Classes" description="Learn USACO through afforable, high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists." />

      <Header noBanner={true} />
      <div className="margin-top-nav"/>
      <Hero />
      <NotLowQuality />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto">
            <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
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
            <p className="text-base text-center leading-6 text-purple-600 font-semibold tracking-wide uppercase">Course Info</p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Class Format</h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>A CPI course consists of 12 weekly classes, each of which lasts 2 hours. Classes will go over challenging example problems and contain problemsets for homework.</p>
            <p>Instructors will be able to answer any questions students may have during class. Students will have access to an exclusive <b>Q&A forum</b> to get help from instructors after class.</p>
            <p>Classes follow a flipped learning model to maximize the amount of time students have to ask instructors questions. Our curriculum is modeled off the <a href="https://usaco.guide/" target="_blank">USACO Guide</a>.</p>
            <p><b>Seats are limited</b>. First come first served, so make sure to sign up soon!</p>

            <h3>Class Schedule</h3>
            <ul>
              <li>Introductory Class - Fridays, 5:00-7:00pm Pacific Time. 1/9 to 3/27.</li>
              <li>Intermediate Class - Wednesdays, 4:00-6:00pm Pacific Time. 1/7 to 3/25.</li>
            </ul>

            <h3>Pricing</h3>
            <p>These classes are <b>not for profit</b> -- instructors are unpaid and volunteer their time to help USACO contestants. We ask for for a <b>$250 donation</b> ($10.41/hour) to help support the creation of these classes and the infrastructure for the resources we provide such as the USACO Guide.</p>
            <p><b>Financial aid is available</b>. If you are unable to pay the full amount, just let us know!</p>

            <h3>Programming Language</h3>
            <p>Both C++ and Java are acceptable for the class. While our class will primarily use Java, instructors are fully able to assist C++ users as well.</p>

            {/*<h3>Introductory Class</h3>*/}
            {/*<p>This course is meant for students who already know the basics of a programming language and are interested in learning more about competitive programming. The course will teach the necessary techniques needed to pass USACO Bronze.</p>*/}
            {/*<b>Syllabus (not exhaustive):</b>*/}
            {/*<ul>*/}
            {/*  <li>File / Fast I/O</li>*/}
            {/*  <li>Time Complexity</li>*/}
            {/*  <li>Data Structures</li>*/}
            {/*  <li>Simulation</li>*/}
            {/*  <li>Rectangle Geometry</li>*/}
            {/*  <li>Sorting Problems</li>*/}
            {/*  <li>Sets & Maps</li>*/}
            {/*  <li>Complete Search</li>*/}
            {/*  <li>Ad Hoc Problems</li>*/}
            {/*  <li>Greedy Algorithms</li>*/}
            {/*  <li>Graphs</li>*/}
            {/*</ul>*/}

            {/*<h3>Intermediate Class</h3>*/}
            {/*<p>This course is meant for students who are in the USACO Silver division or have taken our Introductory Class. The course will teach the necessary techniques needed to pass the USACO Silver contest.</p>*/}
            {/*<b>Syllabus (Not Exhaustive):</b>*/}
            {/*<ul>*/}
            {/*  <li>Binary Search on Sorted Array</li>*/}
            {/*  <li>Operations on Ordered Sets</li>*/}
            {/*  <li>Custom Comparators</li>*/}
            {/*  <li>Unordered Sets & Maps</li>*/}
            {/*  <li>Prefix Sums</li>*/}
            {/*  <li>Two Pointers</li>*/}
            {/*  <li>Binary Search on the Answer</li>*/}
            {/*  <li>Greedy Algorithms with Sorting</li>*/}
            {/*  <li>Depth First Search</li>*/}
            {/*  <li>Graph Two-Coloring</li>*/}
            {/*  <li>Floodfill</li>*/}
            {/*  <li>Tree Algorithms</li>*/}
            {/*  <li>Functional Graphs</li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </div>

      <ClassLevels />

      <ClassInstructors />
    </Layout>
  )
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
