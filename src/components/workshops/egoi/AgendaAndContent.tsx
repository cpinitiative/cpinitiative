import * as React from "react"

export default function AgendaAndContent() {
  return (
    <div className="bg-cyan-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-cyan-200">
          <p className="text-xl text-white mb-4 font-bold">
            During the webinar, we will explain everything you need to know
            about getting started with USACO.
          </p>
          <ul className={"list-disc ml-5"}>
            <li>USA EGOI member introduction</li>
            <li>Sharing experience for USACO</li>
            <li>Interview with the members</li>
            <li>Open panel Q&A</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
