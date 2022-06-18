import * as React from "react"

export default function ({
  financialAid,
  level,
  email,
  registrationId,
  joinLink,
}) {
  return (
    <div className="mt-5">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-2">
            Registration Complete!
          </h3>

          {financialAid ? (
            <>
              <p>
                {" "}
                We have successfully received your application for the{" "}
                {level == "beginner" ? "Beginner" : "Intermediate"} USACO Class.
                We will review your application and send you a decision via
                email within one week.
              </p>
              <p>
                <b>Your Application ID:</b> {registrationId}
              </p>
            </>
          ) : (
            <>
              We have successfully processed your registration for the{" "}
              {level == "beginner" ? "Beginner" : "Intermediate"} USACO Class.
              Within a minute, {email} should receive an email from
              team@classes.joincpi.org with the subject{" "}
              <i>
                Welcome to your CPI{" "}
                {level == "beginner" ? "Beginner" : "Intermediate"} USACO Class!
              </i>{" "}
              containing all the information necessary for this course.{" "}
              <b>
                If you don't see the email after a few minutes, please check
                your promotions and spam tabs (and mark team@classes.joincpi.org
                as a trusted sender). If you still don't see it, email us at{" "}
                <a
                  className={"underline text-blue-700"}
                  href={"mailto:classes@joincpi.org"}
                >
                  classes@joincpi.org
                </a>
                .
              </b>
              <p>
                You can use this unique, <i>one time use</i> link to join the
                class on our online learning management system:{" "}
                <a
                  className="underline text-blue-700 font-bold"
                  href={joinLink}
                  target="_blank"
                >
                  {joinLink}
                </a>
                . After that, you can access the group by visiting this URL:{" "}
                <a
                  className="underline text-blue-700"
                  href="https://usaco.guide/groups"
                  target="_blank"
                >
                  https://usaco.guide/groups
                </a>
                .
              </p>
              <p>
                <b>Your Registration ID:</b> {registrationId}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
