import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Header from "../../components/Header"
import { useEffect, useMemo, useState } from "react"
import * as moment from "moment-timezone"
import useFirebase from "../../firebase/useFirebase"
import ErrorCard from "../../components/video-classes/registration/ErrorCard"
import ConfirmationCard from "../../components/classes/registration/ConfirmationCard"
import SubmittingCard from "../../components/video-classes/registration/SubmittingCard"
import CourseSelectionSection from "../../components/classes/registration/CourseSelectionSection"
import Divider from "../../components/video-classes/registration/Divider"
import StudentInformationSection from "../../components/classes/registration/StudentInformationSection"
import FinancialAidApplicationSection from "../../components/classes/registration/FinancialAidApplicationSection"
import FinancialAidSubmissionSection from "../../components/classes/registration/FinancialAidSubmissionSection"
import PaymentSection from "../../components/classes/registration/PaymentSection"

export default function ClassRegistrationPage() {
  const [level, setLevel] = useState<"" | "beginner" | "intermediate">("")
  useEffect(() => {
    const handler = () => {
      if (
        ["beginner", "intermediate"].includes(window.location.hash.substring(1))
      ) {
        setLevel(
          window.location.hash.substring(1) == "beginner"
            ? "beginner"
            : "intermediate"
        )
      }
      else if (
        window.location.hash.substring(1) == "fa"
      ) {
        setFinancialAid(true);
      }
    }
    document.addEventListener("hashchange", handler)
    handler()
    return () => {
      document.removeEventListener("hashchange", handler)
    }
  }, [])
  useEffect(() => {
    if (["beginner", "intermediate"].includes(level)) {
      window.location.hash = "#" + level
    }
  }, [level])
  // for some reason, clicking the "Register Now" button wouldn't scroll to the top of the window.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [errorData, setErrorData] = useState<{
    title?: string
    message?: React.ReactNode
  }>({})
  const [showError, setShowError] = useState(false)
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
  const [registrationId, setRegistrationId] = useState("")
  const [joinLink, setJoinLink] = useState("")

  const firebase = useFirebase()
  const dataIsValid = useMemo(() => {
    return !(
      !level ||
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
    level,
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
    <Layout grayFooter className="bg-gray-100">
      <SEO
        title="Online USACO Classes"
        description="Learn USACO through affordable, high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists."
      />
      <Header noBanner={true} />
      <div className={"margin-top-nav"}>
        <div className={"px-5 sm:px-12 max-w-6xl mx-auto pt-10"}>
          <h1 className={"text-4xl font-bold tracking-tight leading-9 mb-10"}>
            USACO Live Course Registration
          </h1>
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc0IgtbVoYsWv_2E2ZIcN8UE29OVpmx6FsiM0x9lfwNdGey3Q/viewform"
            target="_blank"
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            aria-describedby="tier-standard"
          >
            Get Notified of Future Classes
          </a> */}
          {showError && <ErrorCard errorData={errorData} />}
          {success && !showError && (
            <ConfirmationCard
              level={level}
              financialAid={financialAid}
              email={email}
              registrationId={registrationId}
              joinLink={joinLink}
            />
          )}
          {submitting && !success && !showError && (
            <SubmittingCard financialAid={financialAid} />
          )}
          {!success && !submitting && (
            <>
              <CourseSelectionSection level={level} setLevel={setLevel} />
              <Divider />
              <StudentInformationSection
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                timezone={timezone}
                setTimezone={setTimezone}
                setPreferredLanguage={setPreferredLanguage}
                preferredLanguage={preferredLanguage}
                referrer={referrer}
                setReferrer={setReferrer}
                referrerDetail={referrerDetail}
                setReferrerDetail={setReferrerDetail}
                financialAid={financialAid}
                setFinancialAid={setFinancialAid}
              />
              <Divider />
              {financialAid && (
                <>
                  <FinancialAidApplicationSection
                    faAmount={faAmount}
                    setFaAmount={setFaAmount}
                    faWhyTakeCourse={faWhyTakeCourse}
                    setFaWhyTakeCourse={setFaWhyTakeCourse}
                    faWhyInNeed={faWhyInNeed}
                    setFaWhyInNeed={setFaWhyInNeed}
                  />
                  <Divider />
                  <FinancialAidSubmissionSection
                    faTermsAgree={faTermsAgree}
                    setFaTermsAgree={setFaTermsAgree}
                    level={level}
                    hasAttemptedPayment={hasAttemptedPayment}
                    setHasAttemptedPayment={setHasAttemptedPayment}
                    submitting={submitting}
                    setSubmitting={setSubmitting}
                    faDataIsValid={faDataIsValid}
                    dataIsValid={dataIsValid}
                    firebase={firebase}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    preferredLanguage={preferredLanguage}
                    referrer={referrer}
                    referrerDetail={referrerDetail}
                    timezone={timezone}
                    faAmount={faAmount}
                    faWhyInNeed={faWhyInNeed}
                    faWhyTakeCourse={faWhyTakeCourse}
                    setSuccess={setSuccess}
                    setErrorData={setErrorData}
                    setShowError={setShowError}
                    setRegistrationId={setRegistrationId}
                  />
                </>
              )}

              {!financialAid && !showError && (
                <PaymentSection
                  level={level}
                  hasAttemptedPayment={hasAttemptedPayment}
                  setHasAttemptedPayment={setHasAttemptedPayment}
                  setSubmitting={setSubmitting}
                  dataIsValid={dataIsValid}
                  firebase={firebase}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  preferredLanguage={preferredLanguage}
                  referrer={referrer}
                  referrerDetail={referrerDetail}
                  timezone={timezone}
                  setSuccess={setSuccess}
                  setErrorData={setErrorData}
                  setShowError={setShowError}
                  setRegistrationId={setRegistrationId}
                  setJoinLink={setJoinLink}
                />
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
