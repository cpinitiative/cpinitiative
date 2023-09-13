import * as React from "react"

export default function RegistrationProcess() {
  return (
    <div className="relative pt-20 pb-20" id="how-to-join">
      <div className="max-w-prose sm:text-lg mx-auto px-4">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center">
          How to Join
        </h2>
        <div className="h-10" />
        <div className="space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-800 mb-2">
              1. Fill out the Application Form
            </h3>
            <p className="text-gray-600">
              The form can be found here:{" "}
              <a
                href="https://forms.gle/ha9pQnHFNZZc6Y3W9"
                target="_blank"
                className="font-semibold text-black underline"
              >
                https://forms.gle/ha9pQnHFNZZc6Y3W9
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-800 mb-2">
              2. Join our Discord Server
            </h3>
            <p className="text-gray-600">
              Most of our communication takes place on Discord. Join here:{" "}
              <a
                href="https://discord.gg/VCxUzdYhzN"
                target="_blank"
                className="font-semibold text-black underline"
              >
                https://discord.gg/VCxUzdYhzN
              </a>
            </p>
          </div>
{/*           <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-purple-800 mb-2">
              3. Schedule an Interview
            </h3>
            <p className="text-gray-600">
              We want to get to know you! Schedule an informal, 10-minute
              interview through{" "}
              <a
                href="https://calendly.com/joincpi/clubinterview"
                target="_blank"
                className="font-semibold text-black underline"
              >
                Calendly
              </a>
              . If you can't find a time that works for you, send us a message
              through Discord or at{" "}
              <a href="mailto:usacoguide@gmail.com" className="underline">
                usacoguide@gmail.com
              </a>
              .
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
