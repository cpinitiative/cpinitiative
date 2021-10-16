import * as React from "react"

export default function AgendaAndContent() {
  return (
    <div className="bg-purple-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-purple-200">
          <ul className={"list-disc ml-5"}>
            <li>What is USACO</li>
            <li>When and how to attend USACO</li>
            <li>USACO levels</li>
            <li>Programming languages for USACO</li>
            <li>USACO scoring</li>
            <li>USACO sample questions workthrough</li>
            <li>What should I learn for USACO</li>
            <li>Open Q&A</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
