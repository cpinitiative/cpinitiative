import * as React from "react"

export default function Agenda() {
  return (
    <div className="bg-purple-800 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-purple-200">
          <ul className={"list-disc ml-5"}>
            <li>Bronze Solution Explanations</li>
            <li>Silver Solution Explanations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
