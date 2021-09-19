import * as React from "react"

export default function () {
  return (
    <div className="bg-purple-900 py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-prose sm:text-lg">
        <h1 className="text-2xl sm:text-4xl font-black text-white text-center mb-8">
          Premium Quality, Affordable Cost.
        </h1>
        <div className="text-purple-200">
          <p className="sm:text-xl text-white mb-4 font-bold">
            Affordable doesn't mean low-quality.
          </p>
          <p className="mb-4">
            With a team of past USACO Finalists, we've created classes of the
            highest possible caliber that are just as competitive as more
            expensive alternatives.
          </p>
          <p className="mb-4">
            While our instructors freely volunteer their time to help teach
            these classes, we ask that students donate $100 to help fund the
            infrastructure costs of creating these classes ($4.16/hr). Of
            course, if you're unable to pay, you'll get access to these classes{" "}
            <b>for free</b>.
          </p>
          <p>
            Want to try out the class before donating? The{" "}
            <b>first class is free</b> -- you can choose whether to donate after
            attending the first class!
          </p>
        </div>
      </div>
    </div>
  )
}
