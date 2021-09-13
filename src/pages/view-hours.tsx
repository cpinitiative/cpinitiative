import { signIn, signOut, useSession } from "next-auth/client"
import React, { Fragment } from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import useSWR from "swr"
import { Dialog, Transition } from "@headlessui/react"
import { SWR_FETCHER } from "../../config"

export function VolunteerHourHistory({ data }) {
  console.log("data: ", data)
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {data?.error && <div>{data.error}</div>}
        {data &&
          !data?.error &&
          data.data.map(item => (
            <li key={item.id} className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {new Date(item.time).toDateString()}
                    </h3>
                    <p className="text-sm text-gray-500">{item.hrs} hours</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    <b>Reviewed prs:</b> {item.prs}
                  </p>
                  {item.other && (
                    <p className="text-sm text-gray-500">
                      <b>Other information:</b> {item.other}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export function AddVolunteerHoursForm({ data }) {
  const [response, setResponse] = React.useState(null)
  const [name, setName] = React.useState("")
  const [hours, setHours] = React.useState("")
  const [prsReviewed, setPrsReviewed] = React.useState("")
  const [other, setOther] = React.useState("")
  const [error, setError] = React.useState("")
  const submitHours = () => {
    // todo: add hours into the google sheet
    setError("")
    fetch("/api/addHours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        hours: hours,
        prsReviewed,
        other,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          setError(res.error)
        } else {
          setResponse(res)
        }
      })
  }
  return (
    <div className="my-4 rounded-md">
      <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="name"
          className="block font-medium text-sm text-gray-700"
        >
          Name (same as what you signed up with)
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={e => setName(e.target.value)}
          className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. N. Wang"
        />
      </div>
      <div className="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="job-title"
          className="block w-full text-sm font-medium text-gray-700"
        >
          Number of hours
        </label>
        <input
          onChange={e => setHours(e.target.value)}
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. 42"
        />
      </div>
      <div className="relative border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label className="block w-full text-sm font-medium text-gray-700">
          What pull requests did you review?
        </label>
        <textarea
          onChange={e => setPrsReviewed(e.target.value)}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. I reviewed pull requests #1,2,3 and resolved issues #4,5,6"
        />
      </div>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label className="block w-full text-sm font-medium text-gray-700">
          Is there anything else you would like to add?
        </label>
        <textarea
          onChange={e => setOther(e.target.value)}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. The majority of my time was dedicated to creating visualizations."
        />
      </div>
      <div className="w-full p-1 bg-red-200 my-2 rounded-md text-red-800">
        {error && JSON.stringify(error)}
      </div>
      <div className="w-full p-1">{response && JSON.stringify(response)}</div>
      <div className="w-full p-1">
        Your last pull request was made on:{" "}
        {new Date(data && data[0].time).toDateString()}
      </div>
      <button
        onClick={() => submitHours()}
        className="inline-flex mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      >
        Submit Volunteer Hours
      </button>
    </div>
  )
}

export default function ViewHours() {
  const [session, loading] = useSession()
  const [viewAddHoursForm, setViewAddHoursForm] = React.useState(false)
  const { data, error } = useSWR("/api/getHours", SWR_FETCHER)

  console.log(data, error)

  return (
    <Layout>
      <SEO
        title="View Volunteer Hours"
        description="Volunteer hour portal for CPInitiative"
      />
      <div className="flex flex-col w-full h-full items-center px-4">
        <Header />
        {session && (
          <div className="w-full max-w-7xl pt-24">
            <div className="w-full flex flex-col md:flex-row justify-between my-6">
              <h1 className="text-4xl font-semibold">
                Your volunteer hours: {data ? data?.totalHours : "..."}
              </h1>
              <div>
                <button
                  onClick={() => setViewAddHoursForm(true)}
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Add Volunteer Hours
                </button>
                <button
                  onClick={() => signOut()}
                  className="inline-flex px-4 ml-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign out
                </button>
              </div>
            </div>
            <VolunteerHourHistory data={data} />
            <Transition appear show={viewAddHoursForm} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10"
                onClose={() => setViewAddHoursForm(false)}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add your hours
                      </Dialog.Title>
                      <AddVolunteerHoursForm data={data?.data} />

                      <div className="">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => setViewAddHoursForm(false)}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </div>
        )}
        {!session && (
          <div className="w-full max-w-7xl pt-24">
            <div className="w-full flex flex-row justify-between my-6">
              <h1 className="text-4xl font-semibold">
                You're not signed in.{" "}
                <p
                  onClick={() => signIn()}
                  className="text-blue-400 cursor-pointer underline"
                >
                  Sign in?
                </p>
              </h1>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
