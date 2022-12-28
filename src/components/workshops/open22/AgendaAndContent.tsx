import * as React from "react"

export default function AgendaAndContent() {
  return (
    <div className="bg-purple-800 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">
          Agenda
        </h1>
        <div className="text-lg text-purple-200">
          <ul className={"list-disc ml-5"}>
            <li>
              10am - 10:45am PT
              <ul className="list-[square] ml-5">
                <li>Bronze Solution Explanations</li>
              </ul>
            </li>
            <li>
              10:45am - 11:30am PT
              <ul className="list-[square] ml-5">
                <li>Silver Solution Explanations</li>
              </ul>
            </li>
            <li>
              11:30am - 12:30pm PT
              <ul className="list-[square] ml-5">
                <li>Panel discussion about USACO trends and topics</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
