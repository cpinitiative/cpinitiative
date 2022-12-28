import { useMemo } from "react"
import {
  BaseClassRegistration,
  ClassRegistration,
} from "../../../types/registration"

export default function RegistrationStats({
  registrations,
}: {
  registrations: BaseClassRegistration[]
}) {
  const numAcceptedFinancialAid = useMemo(
    () => registrations.filter(r => r.data?.status === "ACCEPTED").length,
    [registrations]
  )
  const numRejectedFinancialAid = useMemo(
    () =>
      registrations.filter(r => r.data?.status && r.data?.status !== "ACCEPTED")
        .length,
    [registrations]
  )
  const numPendingFinancialAid = useMemo(
    () => registrations.filter(r => r.data?.status === "PENDING").length,
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

  return (
    <div className="my-4">
      <p className={"font-bold"}>
        {registrations.length} Registrations &middot; {numPendingFinancialAid}{" "}
        Pending FA Applications
      </p>
      <p>
        {registrations.length -
          numAcceptedFinancialAid -
          numRejectedFinancialAid}{" "}
        Paid &middot; {numAcceptedFinancialAid} Accepted For Financial Aid
      </p>
      <p>
        {numBeginner} Beginner ({numBeginnerJava} Java,{" "}
        {numBeginner - numBeginnerJava} C++) &middot;{" "}
        {registrations.length - numBeginner} Intermediate ({numIntermediateJava}{" "}
        Java, {registrations.length - numBeginner - numIntermediateJava} C++)
      </p>
    </div>
  )
}
