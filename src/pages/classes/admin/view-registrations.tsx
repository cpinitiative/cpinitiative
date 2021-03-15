import * as React from "react"
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import { Link } from "gatsby"
import useFirebase from "../../../firebase/useFirebase"
import { useEffect, useMemo, useState } from "react"
import firebaseType from "firebase"
import * as moment from "moment-timezone"
import * as Icons from "heroicons-react"
import Transition from "../../../components/Transition"

export default function ViewRegistrationPage() {
  const firebase = useFirebase()
  const [user, setUser] = useState<firebaseType.User | null>(null)
  const [loading, setLoading] = useState(true)
  const [hasPermission, setHasPermission] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const [soundOn, setSoundOn] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [detailModalRegistrationId, setDetailModalRegistrationId] = useState("")
  const detailModalRegistrationData = registrations.find(
    r => r.id == detailModalRegistrationId
  )?.data
  console.log(detailModalRegistrationData)
  const numFinancialAid = useMemo(
    () => registrations.filter(r => r.data?.financialAid).length,
    [registrations]
  )
  const numBeginner = useMemo(
    () => registrations.filter(r => r.data?.level == "beginner").length,
    [registrations]
  )
  const numBeginnerJava = useMemo(
    () =>
      registrations.filter(
        r =>
          r.data?.level == "beginner" &&
          r.data?.personalInfo.preferredLanguage == "java"
      ).length,
    [registrations]
  )
  const numIntermediateJava = useMemo(
    () =>
      registrations.filter(
        r =>
          r.data?.level == "intermediate" &&
          r.data?.personalInfo.preferredLanguage == "java"
      ).length,
    [registrations]
  )
  useEffect(() => {
    const handler = () => {
      const id = window.location.hash?.substring(1) || ""
      console.log("hashchange", id)
      if (!id) {
        setShowDetailModal(false)
      } else {
        setDetailModalRegistrationId(id)
        setShowDetailModal(true)
      }
    }
    console.log("hello")
    window.addEventListener("hashchange", handler)
    handler()
    return () => {
      console.log("removed")

      window.removeEventListener("hashchange", handler)
    }
  }, [])
  useEffect(() => {
    if (!firebase) {
      return
    }
    const unsubscribeHandlers = []
    unsubscribeHandlers.push(
      firebase.auth().onAuthStateChanged(user => {
        setLoading(false)
        setUser(user)
        if (
          user &&
          [
            "OjLKRTTzNyQgMifAExQKUA4MtfF2",
            "v8NK8mHCZnbPQKaPnEs5lKNc3rv2",
            "BKFOe33Ym7Pc7aQuET57MiljpF03",
          ].includes(user.uid)
        ) {
          setHasPermission(true)
          unsubscribeHandlers.push(
            firebase
              .firestore()
              .collection("classes-registration")
              .doc("2021march")
              .collection("registrations")
              .onSnapshot(snapshot => {
                const newRegistrations = []
                snapshot.forEach(doc => {
                  newRegistrations.push({
                    id: doc.id,
                    data: doc.data(),
                  })
                })
                newRegistrations.sort(
                  (a, b) =>
                    /* desc */
                    b.data.timestamp.toMillis() - a.data.timestamp.toMillis()
                )
                console.log(registrations)
                if (soundOn && newRegistrations.length > registrations.length) {
                  const audio = new Audio(
                    "https://www.soundjay.com/misc/bell-ring-01.wav"
                  )
                  audio.play()
                }
                setRegistrations(newRegistrations)
              })
          )
        } else {
          setHasPermission(false)
        }
      })
    )

    return () => unsubscribeHandlers.forEach(fn => fn())
  }, [firebase])
  if (loading) {
    return (
      <Layout>
        <Header />
        <div className="margin-top-nav" />
        <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28">
          <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
            Loading...
          </h1>
        </div>
      </Layout>
    )
  } else if (!hasPermission) {
    return (
      <Layout>
        <Header />
        <div className="margin-top-nav" />
        <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28">
          <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
            Error 404: Page Not Found
          </h1>
          <Link
            to={"/"}
            className={"text-2xl text-blue-600 hover:underline pt-4 block"}
          >
            Go Home
          </Link>
          {!user && (
            <button
              onClick={() =>
                firebase
                  .auth()
                  .signInWithPopup(new firebase.auth.GoogleAuthProvider())
              }
              className={"text-2xl text-blue-600 hover:underline pt-4 block"}
            >
              Sign In
            </button>
          )}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header noBanner />

      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28 bg-gray-100 pb-10">
        <div className={"max-w-5xl mx-auto"}>
          <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
            Live Class Registration Data
          </h1>
          <p className={"my-1"}>
            <a
              onClick={() => firebase.auth().signOut()}
              className={"text-blue-600 hover:underline pt-4 cursor-pointer"}
            >
              Log Out
            </a>{" "}
            |{" "}
            <a
              onClick={() => setSoundOn(o => !o)}
              className={"text-blue-600 hover:underline pt-4 cursor-pointer"}
            >
              {soundOn
                ? "Turn off new registration chime"
                : "Turn on new registration chime"}
            </a>
          </p>
          <p className={"my-1 font-bold text-xl"}>
            {registrations.length} Registrations
          </p>
          <p className={"my-1 font-semibold text-md"}>
            {registrations.length - numFinancialAid} Paid | {numFinancialAid}{" "}
            Financial Aid Applications
          </p>
          <p className={"my-1 font-semibold text-md"}>
            {numBeginner} Beginner ({numBeginnerJava} Java,{" "}
            {numBeginner - numBeginnerJava} C++) |{" "}
            {registrations.length - numBeginner} Intermediate (
            {numIntermediateJava} Java,{" "}
            {registrations.length - numBeginner - numIntermediateJava} C++)
          </p>
          <div className="bg-white shadow overflow-hidden sm:rounded-md mt-5">
            <ul className="divide-y divide-gray-200">
              {registrations.map(reg => (
                <li key={reg.id}>
                  <a href={"#" + reg.id} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {reg.data.personalInfo.firstName}{" "}
                          {reg.data.personalInfo.lastName}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          {!reg.data.financialAid && (
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Paid
                            </p>
                          )}
                          {reg.data.financialAid && (
                            <>
                              {reg.data.status == "PENDING" ? (
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  FA Pending
                                </p>
                              ) : (
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  FA Approved
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <Icons.Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {reg.data.level.charAt(0).toUpperCase() +
                              reg.data.level.substring(1)}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <Icons.Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />

                            {reg.data.personalInfo.timezone}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <Icons.Code className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />

                            {reg.data.personalInfo.preferredLanguage == "java"
                              ? "Java"
                              : reg.data.personalInfo.preferredLanguage == "cpp"
                              ? "C++"
                              : "ERROR"}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <Icons.Calendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          <p>
                            {moment(
                              new Date(reg.data.timestamp.toMillis())
                            ).format("M/D/YY h:mm:ss A")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Transition show={showDetailModal}>
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
            </Transition>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="sm:flex sm:items-start">
                  {!detailModalRegistrationData ? (
                    "Loading..."
                  ) : (
                    <div className="text-center sm:text-left w-full">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Registration Details
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <b>Registration ID:</b> {detailModalRegistrationId}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>Registration Timestamp:</b>{" "}
                          {moment(
                            new Date(
                              detailModalRegistrationData.timestamp.toMillis()
                            )
                          ).format("M/D/YY h:mm:ss A")}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>Financial Aid:</b>{" "}
                          {detailModalRegistrationData.financialAid
                            ? "Yes"
                            : "No"}
                        </p>
                        {detailModalRegistrationData.financialAid && (
                          <p className="text-sm text-gray-500">
                            <b>Financial Aid Amount:</b>{" "}
                            {
                              detailModalRegistrationData
                                .financialAidApplication.faAmount
                            }
                          </p>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <p className="text-sm text-gray-500">
                            <b>Financial Aid Application Status:</b>{" "}
                            {detailModalRegistrationData.status.toLowerCase()}
                          </p>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <>
                            <p className="text-sm text-gray-500 my-1">
                              <b>Why are you requesting financial aid?</b>
                            </p>
                            <p>
                              {
                                detailModalRegistrationData
                                  .financialAidApplication.whyInNeed
                              }
                            </p>
                          </>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <>
                            <p className="text-sm text-gray-500 mt-1">
                              <b>
                                Why are you interested in this course? How will
                                taking this CPI course benefit you?
                              </b>
                            </p>
                            <p>
                              {
                                detailModalRegistrationData
                                  .financialAidApplication.whyTakeCourse
                              }
                            </p>
                          </>
                        )}
                        <p className="text-sm text-gray-500">
                          <b>Level:</b>{" "}
                          {detailModalRegistrationData.level
                            .charAt(0)
                            .toUpperCase() +
                            detailModalRegistrationData.level.substring(1)}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>First Name:</b>{" "}
                          {detailModalRegistrationData.personalInfo.firstName}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>Last Name:</b>{" "}
                          {detailModalRegistrationData.personalInfo.lastName}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>Email:</b>{" "}
                          {detailModalRegistrationData.personalInfo.lastName}
                        </p>

                        <p className="text-sm text-gray-500">
                          <b>Programming Language:</b>{" "}
                          {detailModalRegistrationData.personalInfo
                            .preferredLanguage === "java"
                            ? "Java"
                            : "C++"}
                        </p>
                        <p className="text-sm text-gray-500">
                          <b>Referrer:</b>{" "}
                          {detailModalRegistrationData.personalInfo.referrer}
                        </p>
                        {["google", "other"].includes(
                          detailModalRegistrationData.personalInfo.referrer
                        ) && (
                          <p className="text-sm text-gray-500">
                            <b>
                              {detailModalRegistrationData.personalInfo
                                .referrer == "google"
                                ? "Google Search Term"
                                : "Other Referrer"}
                              :
                            </b>{" "}
                            {
                              detailModalRegistrationData.personalInfo
                                .referrerDetail
                            }
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          <b>Timezone:</b>{" "}
                          {detailModalRegistrationData.personalInfo.timezone}{" "}
                          (UTC
                          {moment
                            .tz(
                              moment.utc(),
                              detailModalRegistrationData.personalInfo.timezone
                            )
                            .utcOffset() / 60}
                          )
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  {detailModalRegistrationData?.financialAid && (
                    <button
                      onClick={() => {
                        if (
                          !confirm(
                            detailModalRegistrationData.financialAidApplication
                              .faAmount !== 100
                              ? "Are you sure you want to grant full financial aid? The applicant specified that they would be willing to pay part of the fee.  This action is irreversible."
                              : "Are you sure you would like to grant full financial aid? This action is irreversible."
                          )
                        ) {
                          return
                        }

                        if (!firebase) {
                          alert("Please try again in 10 seconds")
                          return
                        }
                        firebase
                          .functions()
                          .httpsCallable("approveFinancialAid")({
                          registrationId: detailModalRegistrationId,
                          email: detailModalRegistrationData.personalInfo.email,
                          firstName:
                            detailModalRegistrationData.personalInfo.firstName,
                          lastName:
                            detailModalRegistrationData.personalInfo.lastName,
                          preferredLanguage:
                            detailModalRegistrationData.personalInfo
                              .preferredLanguage,
                          level: detailModalRegistrationData.level,
                        })
                      }}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Grant Full Financial Aid
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      window.location.hash = "#"
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </Layout>
  )
}
