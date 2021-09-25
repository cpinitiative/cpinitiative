import * as React from "react"

export default function SubmittingCard({ financialAid }) {
  return (
    <div className="mt-5">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-3">
            Loading...
          </h3>
          <p className="mb-1">
            {" "}
            We are currently submitting your{" "}
            {financialAid ? "application" : "registration"}. This typically
            takes about one minute.
          </p>{" "}
          <p>
            <b>Please do not reload or close this page.</b>
          </p>
        </div>
      </div>
    </div>
  )
}
