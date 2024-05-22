import * as React from "react"
import cx from "classnames"
export default function LevelSelect({
  level,
  setLevel,
}: {
  level: "" | "beginner" | "intermediate"
  setLevel: (string) => void
}) {
  return (
    <fieldset>
      <legend id="radiogroup-label" className="sr-only">
        Class Level
      </legend>
      <ul
        className="space-y-4"
        role="radiogroup"
        aria-labelledby="radiogroup-label"
      >
        <li
          id="radiogroup-option-0"
          tabIndex={0}
          role="radio"
          aria-checked={level == "beginner"}
          onClick={() => setLevel("beginner")}
          className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none"
        >
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Beginner Class</p>
                <div className="text-gray-500">
                  <p className="sm:inline">
                    For students new to USACO and students in USACO Bronze.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$100</div>
              <div className="ml-1 text-gray-500 sm:ml-0">
                Sundays, 5-7pm PDT
              </div>
            </div>
          </div>
          <div
            className={cx(
              "absolute inset-0 rounded-lg border-2 pointer-events-none",
              level == "beginner" ? "border-indigo-500" : "border-transparent"
            )}
            aria-hidden="true"
          ></div>
        </li>

        <li
          id="radiogroup-option-1"
          tabIndex={-1}
          role="radio"
          aria-checked={level == "intermediate"}
          onClick={() => setLevel("intermediate")}
          className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none"
        >
          <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <p className="font-medium text-gray-900">Intermediate Class</p>
                <div className="text-gray-500">
                  <p className="sm:inline">
                    For students currently in USACO Silver.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
              <div className="font-medium text-gray-900">$100</div>
              <div className="ml-1 text-gray-500 sm:ml-0">
                Saturdays, 4-6pm PDT
              </div>
            </div>
          </div>
          <div
            className={cx(
              "absolute inset-0 rounded-lg border-2 pointer-events-none",
              level == "intermediate"
                ? "border-indigo-500"
                : "border-transparent"
            )}
            aria-hidden="true"
          ></div>
        </li>
      </ul>
    </fieldset>
  )
}
