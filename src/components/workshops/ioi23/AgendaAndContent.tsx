import * as React from "react"

export default function AgendaAndContent() {
  return (
    <div className="bg-blue-800 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-blue-200">
          <ul className={"list-disc ml-5"}>
            <li>IOI Team Introductions</li>
            <li>IOI Members Leetcode Contest Live solve</li>
            <li>Frequently Asked Questions answered by IOI Team</li>
            <li>Open Q&A for IOI Team</li>
          </ul>
        </div>
      </div>
    </div>
  )
}