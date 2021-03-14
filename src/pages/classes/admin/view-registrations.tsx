import * as React from "react"
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import { Link } from "gatsby"
import useFirebase from "../../../firebase/useFirebase"
import { useEffect, useMemo, useState } from "react"
import firebaseType from "firebase"
import * as moment from "moment-timezone"
import * as Icons from "heroicons-react"
export default function NotFoundPage() {
  const firebase = useFirebase()
  const [user, setUser] = useState<firebaseType.User | null>(null)
  const [loading, setLoading] = useState(true)
  const [hasPermission, setHasPermission] = useState(false)
  const [registrations, setRegistrations] = useState([])
  const numFinancialAid = useMemo(
    () => registrations.filter(r => r.data?.financialAid).length,
    [registrations]
  )
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
                const registrations = []
                snapshot.forEach(doc => {
                  registrations.push({
                    id: doc.id,
                    data: doc.data(),
                  })
                })
                registrations.sort(
                  (a, b) =>
                    /* desc */
                    b.data.timestamp.toMillis() - a.data.timestamp.toMillis()
                )
                console.log(registrations)
                setRegistrations(registrations)
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
      <Header />
      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28 bg-gray-100 pb-10">
        <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
          Live Class Registration Data
        </h1>
        <button
          onClick={() => firebase.auth().signOut()}
          className={"text-blue-600 hover:underline pt-4 block"}
        >
          Log Out
        </button>
        <p className={"my-2 font-bold text-xl"}>
          {registrations.length} Registrations:{" "}
          {registrations.length - numFinancialAid} Paid & {numFinancialAid}{" "}
          Financial Aid Applications
        </p>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {registrations.map(reg => (
              <li>
                <div className="block hover:bg-gray-50">
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
