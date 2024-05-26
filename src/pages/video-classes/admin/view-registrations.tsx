import * as React from "react"
import Layout from "../../../components/Layout"
import Header from "../../../components/Header"
import Link from "next/link"
import useFirebase from "../../../firebase/useFirebase"
import { useEffect, useMemo, useState } from "react"
import moment from "moment-timezone"
import * as Icons from "heroicons-react"
import { Transition } from "@headlessui/react"
import type firebaseType from "firebase"
import { exportRegistrations } from "../../../util/classes/exportRegistrations"
import LoadingPage from "../../../components/classes/admin/LoadingPage"
import MissingPermissionPage from "../../../components/classes/admin/MissingPermissionPage"
import useClassRegistrations from "../../../hooks/useClassRegistrations"
import { ClassRegistration } from "../../../types/registration"
import RegistrationStats from "../../../components/classes/admin/RegistrationStats"

export default function ViewRegistrationPage() {
  const firebase = useFirebase()
  const [soundOn, setSoundOn] = useState(false)
  const {
    hasPermission,
    registrations: registrationsIncludingDeleted,
    loading: isLoading,
  } = useClassRegistrations<ClassRegistration>("usacobronze", soundOn)
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [detailModalRegistrationId, setDetailModalRegistrationId] = useState("")
  const [detailModalFASubmittingApproval, setDetailModalFASubmittingApproval] =
    useState(false)
  const [
    detailModalFASubmittingRejection,
    setDetailModalFASubmittingRejection,
  ] = useState(false)

  const detailModalRegistrationData = registrationsIncludingDeleted?.find(
    r => r.id == detailModalRegistrationId
  )?.data
  const registrations = useMemo(
    () => registrationsIncludingDeleted?.filter(r => !r.data?.isDeleted) ?? [],
    [registrationsIncludingDeleted]
  )

  useEffect(() => {
    const handler = () => {
      const id = window.location.hash?.substring(1) || ""
      if (!id) {
        setShowDetailModal(false)
      } else {
        setDetailModalRegistrationId(id)
        setShowDetailModal(true)
        setDetailModalFASubmittingApproval(false)
      }
    }
    window.addEventListener("hashchange", handler)
    handler()

    return () => {
      window.removeEventListener("hashchange", handler)
    }
  }, [])

  if (isLoading) {
    return <LoadingPage />
  } else if (!hasPermission) {
    return <MissingPermissionPage />
  }

  const handleGrantFinancialAid = () => {
    if (!firebase) {
      alert("Please try again in 10 seconds")
      return
    }

    firebase
      .auth()
      .currentUser.getIdToken()
      .then(idToken => {
        return fetch(`/api/classes/approve-financial-aid`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            authToken: idToken,
            registrationId: detailModalRegistrationId,
            email: detailModalRegistrationData.personalInfo.email,
            firstName: detailModalRegistrationData.personalInfo.firstName,
            lastName: detailModalRegistrationData.personalInfo.lastName,
            preferredLanguage:
              detailModalRegistrationData.personalInfo.preferredLanguage,
            level: detailModalRegistrationData.level,
          }),
        })
      })
      .then(resp => resp.json())
      .then(resp => {
        if (!resp.success) {
          throw new Error(resp.message)
        }
        setDetailModalFASubmittingApproval(false)
      })
      .catch(error => {
        alert("An error occurred: " + error.message)
        setDetailModalFASubmittingApproval(false)
        console.error(error)
      })
    setDetailModalFASubmittingApproval(true)
  }

  return (
    <Layout>
      <Header noBanner />

      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 bg-gray-100 pb-10">
        <div className={"max-w-3xl mx-auto"}>
          <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
            Video Classes Registration Data
          </h1>
          <p className={"my-4"}>
            <a
              onClick={() => firebase.auth().signOut()}
              className={"text-blue-600 hover:underline pt-4 cursor-pointer"}
            >
              Log Out
            </a>{" "}
            &middot;{" "}
            <a
              onClick={() => setSoundOn(o => !o)}
              className={"text-blue-600 hover:underline pt-4 cursor-pointer"}
            >
              {soundOn
                ? "Turn off new registration chime"
                : "Turn on new registration chime"}
            </a>{" "}
            &middot;{" "}
            <a
              onClick={() => exportRegistrations(registrations)}
              className={"text-blue-600 hover:underline pt-4 cursor-pointer"}
            >
              Export Registrations
            </a>
          </p>

          <RegistrationStats registrations={registrations} />

          <div className="bg-white shadow overflow-hidden sm:rounded-md mt-5">
            <ul className="divide-y divide-gray-200">
              {registrations.map(reg => (
                <li key={reg.id}>
                  <a href={"#" + reg.id} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-center text-gray-500">
                          <p className="text-sm font-medium text-purple-600 truncate">
                            {reg.data.personalInfo.firstName}{" "}
                            {reg.data.personalInfo.lastName}
                          </p>
                          <span className="hidden sm:block">&bull;</span>
                          <span className="text-sm">
                            {reg.data.personalInfo.email}
                          </span>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          {!reg.data.financialAid && (
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {reg.data.refunded ? "Refunded" : "Paid"}
                            </p>
                          )}
                          {reg.data.financialAid && (
                            <>
                              {reg.data.status == "ACCEPTED" ? (
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  FA Approved
                                </p>
                              ) : reg.data.status == "REJECTED" ? (
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  FA Denied
                                </p>
                              ) : (
                                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  FA Pending
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
                              : reg.data.personalInfo.preferredLanguage ==
                                "python"
                              ? "Python"
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
                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-prose sm:w-full sm:p-6"
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
                        <p className=" text-gray-900">
                          <b>Registration ID:</b> {detailModalRegistrationId}
                        </p>
                        <p className=" text-gray-900">
                          <b>Registration Timestamp:</b>{" "}
                          {moment(
                            new Date(
                              detailModalRegistrationData.timestamp.toMillis()
                            )
                          ).format("M/D/YY h:mm:ss A")}
                        </p>
                        <p className=" text-gray-900">
                          <b>Financial Aid:</b>{" "}
                          {detailModalRegistrationData.financialAid
                            ? "Yes"
                            : "No"}
                        </p>
                        {detailModalRegistrationData.financialAid && (
                          <p className=" text-gray-900">
                            <b>Financial Aid Amount:</b>{" "}
                            {
                              detailModalRegistrationData
                                .financialAidApplication.amount
                            }
                          </p>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <p className=" text-gray-900">
                            <b>Financial Aid Application Status:</b>{" "}
                            {detailModalRegistrationData.status}
                          </p>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <div className="my-2">
                            <p className=" text-gray-900">
                              <b>Why are you requesting financial aid?</b>
                            </p>
                            <p className="text-gray-600">
                              {`(${
                                detailModalRegistrationData.financialAidApplication.whyInNeed.split(
                                  " "
                                ).length
                              } words) `}
                              {
                                detailModalRegistrationData
                                  .financialAidApplication.whyInNeed
                              }
                            </p>
                          </div>
                        )}
                        {detailModalRegistrationData.financialAid && (
                          <div className="my-2">
                            <p className="text-gray-900">
                              <b>
                                Why are you interested in this course? How will
                                taking this CPI course benefit you?
                              </b>
                            </p>
                            <p className="text-gray-600">
                              {`(${
                                detailModalRegistrationData.financialAidApplication.whyTakeCourse.split(
                                  " "
                                ).length
                              } words) `}
                              {
                                detailModalRegistrationData
                                  .financialAidApplication.whyTakeCourse
                              }
                            </p>
                          </div>
                        )}
                        <p className=" text-gray-900">
                          <b>Level:</b>{" "}
                          {detailModalRegistrationData.level
                            .charAt(0)
                            .toUpperCase() +
                            detailModalRegistrationData.level.substring(1)}
                        </p>
                        <p className=" text-gray-900">
                          <b>First Name:</b>{" "}
                          {detailModalRegistrationData.personalInfo.firstName}
                        </p>
                        <p className=" text-gray-900">
                          <b>Last Name:</b>{" "}
                          {detailModalRegistrationData.personalInfo.lastName}
                        </p>
                        <p className=" text-gray-900">
                          <b>Email:</b>{" "}
                          {detailModalRegistrationData.personalInfo.email}
                        </p>

                        <p className=" text-gray-900">
                          <b>Programming Language:</b>{" "}
                          {detailModalRegistrationData.personalInfo
                            .preferredLanguage === "java"
                            ? "Java"
                            : detailModalRegistrationData.personalInfo
                                .preferredLanguage === "cpp"
                            ? "C++"
                            : "Python"}
                        </p>
                        <p className=" text-gray-900">
                          <b>Referrer:</b>{" "}
                          {detailModalRegistrationData.personalInfo.referrer}
                        </p>
                        {["google", "other"].includes(
                          detailModalRegistrationData.personalInfo.referrer
                        ) && (
                          <p className=" text-gray-900">
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
                        <p className=" text-gray-900">
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
                        <p className=" text-gray-900">
                          <b>Join Link:</b>{" "}
                          {detailModalRegistrationData.joinLink || ""}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  {detailModalRegistrationData?.financialAid &&
                    detailModalRegistrationData?.status == "PENDING" && (
                      <button
                        onClick={() => {
                          if (
                            !confirm(
                              detailModalRegistrationData
                                .financialAidApplication.amount !== 25
                                ? "Are you sure you want to grant full financial aid? The applicant specified that they would be willing to pay part of the fee.  This action is irreversible."
                                : "Are you sure you would like to grant full financial aid? This action is irreversible."
                            )
                          ) {
                            return
                          }

                          handleGrantFinancialAid()
                        }}
                        type="button"
                        disabled={detailModalFASubmittingApproval}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        {detailModalFASubmittingApproval
                          ? "Granting Full Financial Aid..."
                          : "Grant Full Financial Aid"}
                      </button>
                    )}
                  {detailModalRegistrationData?.financialAid &&
                    detailModalRegistrationData?.status !== "ACCEPTED" && (
                      <button
                        onClick={() => {
                          if (
                            detailModalRegistrationData?.status === "PENDING" &&
                            !confirm(
                              "Rejection emails are not automatically sent. Do you confirm that you wish to reject this applicant and have already sent a rejection email?"
                            )
                          ) {
                            return
                          }

                          if (!firebase) {
                            alert("Please try again in 10 seconds")
                            return
                          }
                          setDetailModalFASubmittingRejection(true)
                          firebase
                            .firestore()
                            .collection("classes-registration")
                            .doc("usacobronze")
                            .collection("registrations")
                            .doc(detailModalRegistrationId)
                            .update({
                              status:
                                detailModalRegistrationData?.status ===
                                "REJECTED"
                                  ? "PENDING"
                                  : "REJECTED",
                            })
                            .then(() => {
                              setDetailModalFASubmittingRejection(false)
                            })
                            .catch(e => {
                              alert("An error occurred:" + e.message)
                              setDetailModalFASubmittingRejection(false)
                            })
                        }}
                        type="button"
                        disabled={detailModalFASubmittingRejection}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        {detailModalRegistrationData?.status === "REJECTED"
                          ? detailModalFASubmittingRejection
                            ? "Undoing Financial Aid Rejection..."
                            : "Undo Financial Aid Rejection"
                          : detailModalFASubmittingRejection
                          ? "Rejecting Financial Aid Application..."
                          : "Reject Financial Aid Application"}
                      </button>
                    )}
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        confirm(
                          "Delete registration? This can't be reversed (easily). Also, this does not (yet) remove join links, which you will have to do manually"
                        )
                      ) {
                        Promise.all([
                          firebase
                            .firestore()
                            .collection("classes-registration")
                            .doc("usacobronze")
                            .collection("registrations")
                            .doc(detailModalRegistrationId)
                            .update({
                              isDeleted: true,
                            }),
                          // Todo: move this to next.js function...
                          // firebase
                          //   .firestore()
                          //   .collection("group-join-links")
                          //   .doc("usacobronze")
                          //   .collection("links")
                          //   .doc(detailModalRegistrationId)
                          //   .delete(),
                        ]).catch(e => {
                          alert("An error occurred:" + e.message)
                        })
                      }
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Delete Registration
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      history.pushState(null, null, " ")
                      setShowDetailModal(false)
                    }}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:w-auto sm:text-sm"
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
