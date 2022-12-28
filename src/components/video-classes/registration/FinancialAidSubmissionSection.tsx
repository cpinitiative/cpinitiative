import * as React from "react"

export default function FinancialAidSubmissionSection({
  faTermsAgree,
  setFaTermsAgree,
  level,
  hasAttemptedPayment,
  setHasAttemptedPayment,
  submitting,
  setSubmitting,
  faDataIsValid,
  dataIsValid,

  firebase,
  firstName,
  lastName,
  email,
  preferredLanguage,
  referrer,
  referrerDetail,
  timezone,
  faAmount,
  faWhyInNeed,
  faWhyTakeCourse,
  setSuccess,
  setErrorData,
  setShowError,
  setRegistrationId,
}) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Submit Application
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please enter the information of the student to be registered.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="flex items-start">
                <div className="h-5 flex items-center">
                  <input
                    checked={faTermsAgree}
                    onChange={e => setFaTermsAgree(e.target.checked)}
                    id={"fa-understanding"}
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    className="font-medium text-gray-700"
                    htmlFor={"fa-understanding"}
                  >
                    I understand that my registration in this class is not
                    guaranteed, and that the Competitive Programming Initiative
                    will review my application and decide whether or not to
                    grant me a spot based on demonstrated need and merit.
                  </label>
                </div>
              </div>
              {!level && hasAttemptedPayment && (
                <p className="text-md text-red-800">
                  You must select a course above in order to continue.
                </p>
              )}
              {(!dataIsValid || !faDataIsValid) && hasAttemptedPayment && (
                <p className="text-md text-red-800">
                  {email.indexOf("@") == -1 &&
                    "Your email address is improperly formatted. "}
                  You must fill out all fields in order to continue.
                </p>
              )}
              {!faTermsAgree && hasAttemptedPayment && (
                <p className="text-md text-red-800">
                  You must check the financial aid understanding checkbox in
                  order to continue.
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="my-2 bg-indigo-600 border border-transparent w-full rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                onClick={() => {
                  setHasAttemptedPayment(true)
                  if (!faDataIsValid || !dataIsValid || !faTermsAgree) {
                    return
                  }
                  if (!firebase) {
                    alert("Too fast! Please try again in one minute.")
                    return
                  }
                  if (submitting) {
                    return
                  }
                  setSubmitting(true)
                  const ref = firebase
                    .firestore()
                    .collection("classes-registration")
                    .doc("usacobronze")
                    .collection("registrations")
                    .doc()
                  setRegistrationId(ref.id)
                  ref
                    .set({
                      level,
                      personalInfo: {
                        firstName,
                        lastName,
                        email,
                        preferredLanguage,
                        referrer,
                        referrerDetail,
                        timezone,
                      },
                      financialAid: true,
                      paid: false,
                      status: "PENDING",
                      financialAidApplication: {
                        amount: parseInt(faAmount, 10),
                        whyInNeed: faWhyInNeed,
                        whyTakeCourse: faWhyTakeCourse,
                      },
                      timestamp:
                        firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(() => {
                      setSuccess(true)
                      setSubmitting(false)
                    })
                    .catch(e => {
                      setErrorData({
                        title: "Error: Unable to complete registration",
                        message: (
                          <>
                            <p>
                              We encountered an error while trying to submit
                              your application: {e.message} If this was
                              unexpected, please send us an email at{" "}
                              <a className={"text-blue-700 hover:underline"}>
                                classes@joincpi.org
                              </a>
                              , and include a screenshot of this page.
                            </p>
                            <p>
                              Make sure to save your application question
                              answers so you don't have to rewrite them!
                            </p>
                            <p>
                              <b>Why are you requesting financial aid?</b>
                              <br />
                              {faWhyInNeed}{" "}
                            </p>
                            <p>
                              <b>
                                Why are you interested in this course? How will
                                taking this CPI course benefit you?
                              </b>
                              <br />
                              {faWhyTakeCourse}
                            </p>
                            <p>
                              <b>Error Code FIREBASE_SUBMISSION_ERR</b>
                            </p>
                          </>
                        ),
                      })
                      setShowError(true)
                    })
                }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
