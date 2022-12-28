import * as React from "react"

export default function ErrorCard({ errorData, course }) {
  return (
    <div className="mt-5">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
            {errorData.title || "An unknown error occurred. Requested course: "}
            {course}
          </h3>
          {errorData.message}
          {!errorData.message && (
            <p>
              If this was unexpected, please send us an email at{" "}
              <a className={"text-blue-700 hover:underline"}>
                classes@joincpi.org
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
