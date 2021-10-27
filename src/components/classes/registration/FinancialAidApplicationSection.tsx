import * as React from "react"

export default function FinancialAidApplicationSection({
  faAmount,
  setFaAmount,
  faWhyTakeCourse,
  setFaWhyTakeCourse,
  faWhyInNeed,
  setFaWhyInNeed,
}) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Financial Aid Application
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Financial Aid is available to all who are unable to pay the full
              $100 amount. Applications are granted based on demonstrated need
              and merit.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    How much financial aid are you requesting? Enter a number
                    between $1 and $100.
                  </label>
                  <p className="text-gray-500 mt-1 text-sm">
                    If you are only requesting partial financial aid, you will
                    not be required to pay unless your application is accepted.
                  </p>

                  <input
                    type="number"
                    step={1}
                    min={1}
                    max={100}
                    value={faAmount}
                    onChange={e => setFaAmount(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Why are you requesting financial aid?
                  </label>
                  <p className="text-gray-500 mt-1 text-sm">
                    Your response helps us judge your level of need for this
                    class. We recommend writing between 75 and 250 words.
                  </p>
                  <textarea
                    rows={6}
                    value={faWhyInNeed}
                    onChange={e => setFaWhyInNeed(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Why are you interested in this course? How will taking this
                    CPI course benefit you?
                  </label>
                  <p className="text-gray-500 mt-1 text-sm">
                    Your response helps us ensure that our limited resources can
                    go to those most in need. We recommend writing between 75
                    and 250 words.
                  </p>{" "}
                  <textarea
                    rows={6}
                    value={faWhyTakeCourse}
                    onChange={e => setFaWhyTakeCourse(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
