import * as React from "react"

export default function() {
  return (
    <div className="bg-purple-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-black text-white text-center mb-8">Premium Quality, Affordable Cost.</h1>
        <div className="text-lg text-purple-200">
          <p className="text-xl text-white mb-4 font-bold">
            Free doesn't mean low-quality.
          </p>
          <p className="mb-4">
            With a team of past USACO Finalists and IOI Winners, we've created classes of the highest possible caliber, ensuring that our classes are just as competitive as paid alternatives.
          </p>
          <p>
            We ask that students donate a small, tax-deductible amount to help fund the creation of these classes. If you're unable to pay, you'll get access to these classes <b>for free</b>.
          </p>
        </div>
      </div>
    </div>
  );
};