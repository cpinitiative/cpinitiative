import * as React from "react"

export default function() {
  return (
    <div className="bg-purple-900 py-16 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-prose text-lg">
        <h1 className="text-4xl font-black text-white text-center mb-8">Premium Quality, Affordable Cost.</h1>
        <div className="text-purple-200">
          <p className="text-xl text-white mb-4 font-bold">
            Affordable doesn't mean low-quality.
          </p>
          <p className="mb-4">
            With a team of past USACO Finalists, we've created classes of the highest possible caliber that are just as competitive as more expensive alternatives.
          </p>
          <p>
            We ask that students donate $250 to help fund the creation of these classes ($10.41/hr). If you're unable to pay, you'll get access to these classes <b>for free</b>.
          </p>
        </div>
      </div>
    </div>
  );
};