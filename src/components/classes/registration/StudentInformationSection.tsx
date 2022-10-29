import * as moment from "moment-timezone"
import * as React from "react"

export default function StudentInformationSection({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  emailValid,
  setEmailValid,
  preferredLanguage,
  setPreferredLanguage,
  timezone,
  setTimezone,
  referrer,
  setReferrer,
  referrerDetail,
  setReferrerDetail,
  financialAid,
  setFinancialAid,
}) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Student Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please enter the information of the student to be registered.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Student First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Student Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Student Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => {setEmail(e.target.value);}}
                    onBlur={e => {setEmailValid(e.target.reportValidity() && e.target.value);}}
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Programming Language
                  </label>
                  <select
                    value={preferredLanguage}
                    onChange={e => setPreferredLanguage(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option disabled value={""}>
                      Select an option...
                    </option>
                    <option value={"java"}>Java</option>
                    <option value={"cpp"}>C++</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Your Time Zone
                  </label>
                  <select
                    value={timezone}
                    onChange={e => setTimezone(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {moment.tz.names().map(tz => (
                      <option value={tz} key={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    How did you find out about us?
                  </label>
                  <select
                    value={referrer}
                    onChange={e => setReferrer(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option disabled value={""}>
                      Select an option...
                    </option>
                    <option value={"google"}>Google Search</option>
                    <option value={"mailinglist"}>
                      CPI Classes Mailing List
                    </option>
                    <option value={"usaco-guide"}>USACO Guide</option>
                    <option value={"previous"}>
                      I attended a previous session
                    </option>
                    <option value={"friend"}>Friend</option>
                    <option value={"teacher"}>Teacher / Counselor</option>
                    <option value={"other"}>Other</option>
                  </select>
                </div>
                {(referrer == "google" || referrer == "other") && (
                  <div className="col-span-6">
                    <label className="block text-sm font-medium text-gray-700">
                      {referrer == "google"
                        ? "What did you search for on google?"
                        : "Please specify:"}
                    </label>
                    <input
                      type="text"
                      value={referrerDetail}
                      onChange={e => setReferrerDetail(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                )}
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Are you requesting financial aid?
                  </label>
                  <select
                    value={financialAid ? "yes" : "no"}
                    onChange={e => setFinancialAid(e.target.value == "yes")}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
