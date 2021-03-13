import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Header from "../../components/Header"
import { useEffect, useMemo, useState } from "react"
import * as moment from "moment-timezone"
import useFirebase from "../../firebase/useFirebase"
import ErrorCard from "../../components/classes/registration/ErrorCard"
import ConfirmationCard from "../../components/classes/registration/ConfirmationCard"
import SubmittingCard from "../../components/classes/registration/SubmittingCard"
import CourseSelectionSection from "../../components/classes/registration/CourseSelectionSection"
import Divider from "../../components/classes/registration/Divider"
import StudentInformationSection from "../../components/classes/registration/StudentInformationSection"
import FinancialAidApplicationSection from "../../components/classes/registration/FinancialAidApplicationSection"
import FinancialAidSubmissionSection from "../../components/classes/registration/FinancialAidSubmissionSection"
import PaymentSection from "../../components/classes/registration/PaymentSection"

export default function Contests() {
  const [level, setLevel] = useState<"" | "beginner" | "intermediate">(
    ["beginner", "intermediate"].includes(window.location.hash.substring(1))
      ? window.location.hash.substring(1) == "beginner"
        ? "beginner"
        : "intermediate"
      : ""
  )
  useEffect(() => {
    window.location.hash = "#" + level
  }, [level])
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
  console.log({
    firstName,
    lastName,
    email,
    preferredLanguage,
    referrer,
    referrerDetail,
    timezone,
  })
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
            CPI USACO Course Registration
          </h1>
          {showError && <ErrorCard errorData={errorData} />}
          {success && !showError && (
            <ConfirmationCard
              level={level}
              financialAid={financialAid}
              email={email}
              registrationId={registrationId}
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
                />
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}
