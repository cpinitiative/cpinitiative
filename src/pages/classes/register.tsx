import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/classes/Hero"
import Header from "../../components/Header"
import NotLowQuality from "../../components/classes/NotLowQuality"
import ClassLevels from "../../components/classes/ClassLevels"
import ClassInstructors from "../../components/classes/ClassInstructors"
import EmailForm from "../../components/classes/EmailForm"
import Newsletter from "../../components/index/Newsletter"

import { PayPalButton } from "react-paypal-button-v2"
import { useMemo, useState } from "react"
import LevelSelect from "../../components/classes/registration/LevelSelect"
import * as moment from "moment-timezone"
import useFirebase from "../../firebase/useFirebase"
export default function Contests() {
  const [level, setLevel] = useState<"" | "beginner" | "intermediate">("")
  const [error, setError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [preferredLanguage, setPreferredLanguage] = useState("")
  const [referrer, setReferrer] = useState("")
  const [referrerDetail, setReferrerDetail] = useState("")
  const [financialAid, setFinancialAid] = useState(false)
  const [hasAttemptedPayment, setHasAttemptedPayment] = useState(false)
  const [timezone, setTimezone] = useState(moment.tz.guess())
  const [faAmount, setFaAmount] = useState("")
  const [faWhyInNeed, setFaWhyInNeed] = useState("")
  const [faWhyTakeCourse, setFaWhyTakeCourse] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [faTermsAgree, setFaTermsAgree] = useState(false)
  const [success, setSuccess] = useState(false)
  const firebase = useFirebase()
  const dataIsValid = useMemo(() => {
    return !(
      !firstName ||
      !lastName ||
      !email ||
      email.indexOf("@") == -1 ||
      !preferredLanguage ||
      !referrer ||
      !timezone ||
      (referrer == "google" && !referrerDetail) ||
      (referrer == "other" && !referrerDetail)
    )
  }, [
    firstName,
    lastName,
    email,
    preferredLanguage,
    referrer,
    referrerDetail,
    timezone,
  ])
  const faDataIsValid = useMemo(() => {
    return !(!faWhyInNeed || !faAmount || !faWhyTakeCourse)
  }, [faWhyInNeed, faAmount, faWhyTakeCourse])
  return (
    <Layout grayFooter>
      <SEO
        title="Online USACO Classes"
        description="Learn USACO through affordable, high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists."
      />
      <Header noBanner={true} />
      <div className={"bg-gray-100 min-h-screen"}>
        <div className={"px-5 sm:px-12 max-w-6xl mx-auto pt-10"}>
          {success && (
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Success!
                    </h3>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    {financialAid ? (
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        We've successfully received your application for the{" "}
                        {level == "beginner" ? "Beginner" : "Intermediate"}{" "}
                        USACO Class. We will review your application and send
                        you a decision via email within one week.
                      </div>
                    ) : (
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        We successfully processed your registration for the{" "}
                        {level == "beginner" ? "Beginner" : "Intermediate"}{" "}
                        USACO Class. Within one hour, {email} will receive an
                        email with the subject "Welcome to your CPI Beginner
                        USACO Class!", containing all the information necessary
                        for this course.{" "}
                        <b>
                          If you don't see the email within an hour, please
                          check your promotions / spam tabs. If it's not there,
                          email us at{" "}
                          <a className={"underline text-blue-700"}>
                            classes@joincpi.org
                          </a>
                        </b>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {submitting && !success && (
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Processing Registration
                    </h3>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <p>
                        {" "}
                        We are currently submitting your{" "}
                        {financialAid ? "application" : "registration"}. This
                        typically takes about one minute.
                      </p>{" "}
                      <p>
                        <b>Please do not reload or close this page.</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!success && !submitting && (
            <>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Course
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Select the level that you would like to register for. For
                      more details, select a level.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div>
                        <LevelSelect level={level} setLevel={setLevel} />
                      </div>

                      {level && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            You Selected:{" "}
                            {level.charAt(0).toUpperCase() + level.substring(1)}{" "}
                            USACO Course
                          </label>

                          {level == "beginner" ? (
                            <>
                              <p className="mt-2 text-sm text-gray-500">
                                This course is designed for USACO newcomers, and
                                assumes no prior USACO knowledge. The topics
                                taught in this class will prepare students to
                                pass USACO Bronze and become USACO Silver
                                contestants.
                              </p>
                              <i className="mt-2 text-sm text-gray-500">
                                Prerequisite: Basic Programming Experience in
                                Java or C++
                              </i>
                            </>
                          ) : (
                            <>
                              {" "}
                              <p className="mt-2 text-sm text-gray-500">
                                This course is designed for students currently
                                in USACO Silver. The topics taught in this class
                                will prepare students to pass USACO Silver and
                                become USACO Gold contestants.
                              </p>
                              <i className="mt-2 text-sm text-gray-500">
                                Recommended Prerequisite: Currently in USACO
                                Silver
                              </i>
                            </>
                          )}

                          <p className="mt-2 text-sm text-gray-500">
                            {level == "beginner"
                              ? "Every Saturday from March 28 to June 3, 4-6pm PDT (UTC-7). (Total 9 Sessions)"
                              : "Every Friday from March 27 to June 8, 4-6pm PDT (UTC-7). (Total 9 Sessions)"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Student Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Please enter the information of the student to be
                        registered.
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
                              type="text"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
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
                              onChange={e =>
                                setPreferredLanguage(e.target.value)
                              }
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option selected disabled>
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
                                <option value={tz}>{tz}</option>
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
                              <option value={"teacher"}>
                                Teacher / Counselor
                              </option>
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
                                onChange={e =>
                                  setReferrerDetail(e.target.value)
                                }
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
                              onChange={e =>
                                setFinancialAid(e.target.value == "yes")
                              }
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option value={"no"}>No</option>
                              <option value="yes">Yes</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
              {financialAid && (
                <>
                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Financial Aid Application
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Please enter the information of the student to be
                            registered.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                          <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6">
                                <label className="block text-sm font-medium text-gray-700">
                                  How much financial aid are you requesting?
                                  Enter a number between $1 and $100.
                                </label>
                                <p className="text-gray-500 mt-1 text-sm">
                                  If you are only requesting partial financial
                                  aid, you will not be required to pay unless
                                  your application is accepted.
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
                                  Why are you requesting financial aid? (max 250
                                  words)
                                </label>
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
                                  Why are you interested in this course? How
                                  will taking this CPI course benefit you? (max
                                  250 words)
                                </label>
                                <textarea
                                  rows={6}
                                  value={faWhyTakeCourse}
                                  onChange={e =>
                                    setFaWhyTakeCourse(e.target.value)
                                  }
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                      <div className="border-t border-gray-200"></div>
                    </div>
                  </div>
                  <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Submit Application
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            Please enter the information of the student to be
                            registered.
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
                                  onChange={e =>
                                    setFaTermsAgree(e.target.checked)
                                  }
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
                                  I understand that my registration in this
                                  class is not guaranteed, and that the
                                  Competitive Programming Initiative will review
                                  my application and decide whether or not to
                                  grant me a spot based on demonstrated need and
                                  merit.
                                </label>
                              </div>
                            </div>
                            {!level && hasAttemptedPayment && (
                              <p className="text-md text-red-800">
                                You must select a course above in order to
                                continue.
                              </p>
                            )}
                            {(!dataIsValid || !faDataIsValid) &&
                              hasAttemptedPayment && (
                                <p className="text-md text-red-800">
                                  {email.indexOf("@") == -1 &&
                                    "Your email address is improperly formatted. "}
                                  You must fill out all fields in order to
                                  continue.
                                </p>
                              )}
                            {!faTermsAgree && hasAttemptedPayment && (
                              <p className="text-md text-red-800">
                                You must check the financial aid understanding
                                checkbox in order to continue.
                              </p>
                            )}
                            <button
                              type="submit"
                              disabled={submitting}
                              className="mt-2 bg-indigo-600 border border-transparent w-full rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                              onClick={() => {
                                setHasAttemptedPayment(true)
                                if (
                                  !faDataIsValid ||
                                  !dataIsValid ||
                                  !faTermsAgree
                                ) {
                                  return
                                }
                                if (!firebase) {
                                  alert(
                                    "Too fast! Please try again in one minute."
                                  )
                                  return
                                }
                                if (submitting) {
                                  return
                                }
                                setSubmitting(true)
                                firebase
                                  .firestore()
                                  .collection("classes-registration")
                                  .doc("2021march")
                                  .collection("registrations")
                                  .add({
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
                                    financialAidApplication: {
                                      amount: parseInt(faAmount, 10),
                                      whyInNeed: faWhyInNeed,
                                      whyTakeCourse: faWhyTakeCourse,
                                    },
                                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
                </>
              )}

              {!financialAid && (
                <div className="mt-10 sm:mt-0">
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Payment
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Your payment for this class helps the Competitive
                          Programming Initiative, a registered 501(c)(3)
                          nonprofit organization, further its goal of promoting
                          the field of competitive programming.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                          {!level && hasAttemptedPayment && (
                            <p className="text-md text-red-800">
                              You must select a course above in order to
                              register.
                            </p>
                          )}
                          {!dataIsValid && hasAttemptedPayment && (
                            <p className="text-md text-red-800">
                              {email.indexOf("@") == -1 &&
                                "Your email address is improperly formatted. "}
                              You must fill out all fields in order to register.
                            </p>
                          )}
                          {(!hasAttemptedPayment || (level && dataIsValid)) && (
                            <>
                              <p className="mt-1 text-sm text-gray-600">
                                To finalize your{" "}
                                <b>
                                  {level == "beginner"
                                    ? "Beginner"
                                    : "Intermediate"}{" "}
                                  USACO Class
                                </b>{" "}
                                registration, select a payment method below.
                              </p>
                              <p className="mt-1 text-sm text-gray-600">
                                Returns: If you are not satisfied with our
                                classes, you may cancel your class registration
                                anytime before the <b>second</b> class for a
                                partial refund of <b>$90</b> by emailing{" "}
                                <a
                                  href={"mailto:classes@joincpi.org"}
                                  className={"underline"}
                                >
                                  classes@joincpi.org
                                </a>
                                .
                              </p>
                              {/*
                       //@ts-ignore */}
                              <PayPalButton
                                amount="100.00"
                                shippingPreference="NO_SHIPPING"
                                createOrder={(data, actions) => {
                                  console.log(data, actions)
                                  return actions.order.create({
                                    purchase_units: [
                                      {
                                        amount: {
                                          value: "100.00",
                                          currency_code: "USD",
                                          breakdown: {
                                            item_total: {
                                              value: "100.00",
                                              currency_code: "USD",
                                            },
                                          },
                                        },
                                        items: [
                                          {
                                            name:
                                              (level == "beginner"
                                                ? "Beginner"
                                                : "Intermediate") +
                                              " USACO Class",
                                            unit_amount: {
                                              value: "100.00",
                                              currency_code: "USD",
                                            },
                                            quantity: "1",
                                          },
                                        ],
                                      },
                                    ],
                                  })
                                }}
                                onClick={(data, actions) => {
                                  setHasAttemptedPayment(true)
                                  if (!dataIsValid || !level) {
                                    return false
                                  }
                                }}
                                onSuccess={(details, data) => {
                                  setSubmitting(true)
                                  firebase
                                    .functions()
                                    .httpsCallable("processClassRegistration")({
                                      level,
                                      firstName,
                                      lastName,
                                      email,
                                      preferredLanguage,
                                      referrer,
                                      referrerDetail,
                                      timezone,
                                      orderData: data,
                                    })
                                    .then(() => {
                                      setSuccess(true)
                                      setSubmitting(false)
                                    })
                                }}
                                options={{
                                  disableFunding: "credit",
                                  // sandbox id
                                  clientId:
                                    "AQs24h0QDn7C1l4penHhK7x3XbDTL9E5Dh-6FPz3HycxvRw22wiBdMo3UMftn2m1kOmiUcOVZUdzEWFL",
                                }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
