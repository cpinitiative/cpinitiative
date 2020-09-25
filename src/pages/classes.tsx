import * as React from "react";
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/classes/Hero"
import NotLowQuality from "../components/classes/NotLowQuality"

export default function Classes() {
  return (
    <Layout>
      <SEO title="Free Online USACO Classes" description="Learn USACO through high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists and IOI Winners." />

      <Header />
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
            <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Course Info</p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Class Format</h1>
          </div>
          <div className="prose prose-lg text-gray-500 mx-auto">
            <p>A CPI course consists of 12 weekly classes, each of which lasts 2 hours. Each class will consist of a lecture, challenging example problems, and problemsets for homework.</p>
            <p>All classes have three instructors, one of which will be a USACO Finalist, and a maximum of 20 students each. Instructors will be able to answer any questions students may have during class. Students requiring personal assistance can reach out to instructors for one-on-one help after class.</p>
            <p>In addition, there will be a contest every few weeks to allow students to identify their weak points and practice accordingly.</p>

            <h3>Class Schedule</h3>
            <ul>
              <li>Introductory Class - Fridays, 7:00-9:00 pm (GMT -05:00)</li>
              <li>Intermediate Class (Time Slot 1) - Wednesdays, 6:00-8:00 pm (GMT -05:00)</li>
              <li>Intermediate Class (Time Slot 2) - Fridays, 6:00-8:00 pm (GMT -05:00)</li>
              <li>Advanced Class - Wednesday, 7:00-9:00 pm (GMT -05:00)</li>
            </ul>


            <h3>Introductory Class</h3>
            <p>This course is meant for students who already know the basics of a programming language and are interested in learning more about competitive programming. The course will teach the necessary techniques needed to pass USACO Bronze.</p>
            <b>Syllabus (not exhaustive):</b>
            <ul>
              <li>File / Fast I/O</li>
              <li>Time Complexity</li>
              <li>Data Structures</li>
              <li>Simulation</li>
              <li>Rectangle Geometry</li>
              <li>Sorting Problems</li>
              <li>Sets & Maps</li>
              <li>Complete Search</li>
              <li>Ad Hoc Problems</li>
              <li>Greedy Algorithms</li>
              <li>Graphs</li>
            </ul>

            <h3>Intermediate Class</h3>
            <p>This course is meant for students who are in the USACO Silver division or have taken our Introductory Class. The course will teach the necessary techniques needed to pass the USACO Silver contest.</p>
            <b>Syllabus (Not Exhaustive):</b>
            <ul>
              <li>Binary Search on Sorted Array</li>
              <li>Operations on Ordered Sets</li>
              <li>Custom Comparators</li>
              <li>Unordered Sets & Maps</li>
              <li>Prefix Sums</li>
              <li>Two Pointers</li>
              <li>Binary Search on the Answer</li>
              <li>Greedy Algorithms with Sorting</li>
              <li>Depth First Search</li>
              <li>Graph Two-Coloring</li>
              <li>Floodfill</li>
              <li>Tree Algorithms</li>
              <li>Functional Graphs</li>
            </ul>

            <h3>Advanced Class</h3>
            <p>This course is meant for students who are in the USACO Gold division or have taken our Intermediate Class. The course will teach the necessary techniques needed to pass the USACO Gold contest.</p>

            <b>Syllabus (Not Exhaustive):</b>
            <ul>
              <li>Number Theory</li>
              <li>Breadth First Search</li>
              <li>Shortest Paths</li>
              <li>Dynamic Programing</li>
              <li>Stacks</li>
              <li>Sliding Window</li>
              <li>Disjoint Set Union</li>
              <li>Topological Sort</li>
              <li>Minimum Spanning Trees</li>
              <li>String Hashing</li>
              <li>Point Update Range Sum</li>
              <li>Euler Tour Technique</li>
            </ul>

          </div>
        </div>
      </div>
    </Layout>
  );
};