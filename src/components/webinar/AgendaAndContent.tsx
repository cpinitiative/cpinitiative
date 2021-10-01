import * as React from "react"

export default function AgendaAndContent() {
  return (
    <div className="bg-purple-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-purple-200">
          <p className="text-xl text-white mb-4 font-bold">
            During the webinar, experienced USACO contestants will explain
            everything you need to know about getting started with USACO.
          </p>
          <ul className={"list-disc ml-5"}>
            <li>Introduction</li>
            <li>What is USACO?</li>
            <li>
              Why should you do USACO?
              <ul
                className={"ml-5"}
                style={{
                  listStyleType: "circle",
                }}
              >
                <li>USACO in College Admissions</li>
                <li>USACO in Job Interviews</li>
              </ul>
            </li>
            <li>How do you get started with USACO?</li>
            <li>The USACO Guide</li>
            <li>CPI Classes</li>
            <li>Open Q&A</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
