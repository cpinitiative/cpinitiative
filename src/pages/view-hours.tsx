import { signIn, signOut, useSession } from "next-auth/react"
import React, { Fragment, useEffect, useReducer } from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import useSWR from "swr"
import { Dialog, Transition } from "@headlessui/react"
import { SWR_FETCHER } from "../../config"
const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}
const parseDate = (date: string) => {
  const [year, month, day] = date.split("-").map(x => Number(x))
  return new Date(year, month - 1, day, 0, 0, 0, 0)
}
export function VolunteerHourHistory({ data }) {
  // console.log("data: ", data)
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {data?.error && <div>{data.error}</div>}
        {data &&
          !data?.error &&
          data.data.map(item => (
            <li key={item.time} className="py-4">
              <div className="flex space-x-3">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {new Date(item.time).toDateString()} {`(${item.role})`}
                    </h3>
                    {item.hrs == null || item.hrs == 0 ? (
                      <p className="text-sm text-gray-500">none</p>
                    ) : item.hrs == 1 ? (
                      <p className="text-sm text-gray-500">1 hour</p>
                    ) : (
                      <p className="text-sm text-gray-500">{item.hrs} hours</p>
                    )}
                  </div>
                  {item.response && (
                    <div className="flex flex-col space-y-1">
                      {Object.entries(item.response).map(pair => {
                        return (
                          <span
                            className="text-sm text-gray-500 whitespace-pre-wrap"
                            key={`${item.time}_${pair[0]}`}
                          >
                            <>
                              <br />
                              <b>{pair[0]}:</b>
                              <br />
                              {pair[1]}
                            </>
                          </span>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

type State = Record<string, string>
type Action = { q: string; value: string }

function reducer(state: State, action: Action): State {
  return { ...state, [action.q]: action.value }
}

export function AddVolunteerHoursForm({ data, onClose }) {
  console.log(data)
  const initialState = {}
  const [state, dispatch] = useReducer(reducer, initialState)
  const [response, setResponse] = React.useState(null)
  const [hours, setHours] = React.useState("")
  const [error, setError] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [role, setRole] = React.useState("")
  const [date, setDate] = React.useState(new Date())
  // useEffect(()=>console.log("state", state),[state])
  const submitHours = () => {
    setError("")
    setResponse("")
    setLoading(true)
    if (role === "") {
      setError("Please select a role before submitting.")
      setLoading(false)
      return
    }
    const keys = data?.questions[role] as string[]
    fetch("/api/addHours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formatDate(date) === formatDate(new Date()) ? undefined : date,
        hours,
        response: keys.reduce(
          (acc, key) => ({ ...acc, [key]: state[key] }),
          {}
        ),
        role,
      }),
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        if (res.error) {
          setError(res.error)
        } else {
          setResponse(res)
        }

        setLoading(false)
        setDate(new Date())
        onClose()
        setHours("")
        setRole("")
        setResponse("")
      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
  }
  return (
    <div className="my-4 rounded-md">
      {/* <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
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
      </div> */}
      <div className="relative border border-gray-300 px-3 py-2 focus-within:z-10 rounded-t-md focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="date"
          className="block w-full text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="mm/dd/yyyy"
          value={formatDate(date)}
          onChange={e => {
            // console.log(parseDate(e.target.value))
            setDate(parseDate(e.target.value))
          }}
          max={formatDate(new Date())}
        />
      </div>
      <div className="relative border border-gray-300 px-3 py-2 focus-within:z-10 rounded-t-md focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="role"
          className="block w-full text-sm font-medium text-gray-700"
        >
          Role
        </label>
        <select
          onChange={e => setRole(e.target.value)}
          value={role}
          name="role"
          id="role"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
        >
          <option value="">Select a role...</option>
          {Object.keys(data?.questions).map(role => (
            <option key={`role_${role}`} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="relative border border-gray-300 px-3 py-2 focus-within:z-10 rounded-t-md focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="job-title"
          className="block w-full text-sm font-medium text-gray-700"
        >
          Number of hours
        </label>
        <input
          onChange={e => setHours(e.target.value)}
          type="number"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. 42"
        />
      </div>
      {data?.questions &&
        Object.entries<string>(data.questions[role] ?? []).map(([_, q]) => {
          return (
            <div
              key={`question_form_${q}`}
              className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
            >
              <label className="block w-full text-sm font-medium text-gray-700">
                {q}
              </label>
              <textarea
                rows={5}
                onChange={e => dispatch({ q, value: e.target.value })}
                value={state[q]}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
                placeholder="Enter your text here..."
              />
            </div>
          )
        })}
      {error && (
        <div className="w-full flex flex-row p-1 bg-red-200 my-2 rounded-md text-red-800">
          {/* Error Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {JSON.stringify(error)}
        </div>
      )}
      {response?.message && (
        <div className="w-full flex flex-row p-1 bg-green-200 my-2 rounded-md text-green-900">
          {/* Checkmark Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {response && response?.message}
        </div>
      )}
      <div className="w-full p-1">
        Your last request was made on:{" "}
        {new Date(data.data?.length >= 1 && data.data[0]?.time)?.toDateString()}
      </div>

      <button
        onClick={() => submitHours()}
        className="inline-flex mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      >
        {loading ? (
          // spinner
          <div className="flex items-center justify-center ">
            <div className="h-6 w-6 border-t-2 border-white-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <p className="h-6">Submit Volunteer Hours</p>
        )}
      </button>
    </div>
  )
}

export default function ViewHours() {
  const { data: session } = useSession()
  const [viewAddHoursForm, setViewAddHoursForm] = React.useState(false)
  // add conditional fetching for useSWR so that it doesn't fetch when the user isn't signed in
  const { data, error } = useSWR(session ? "/api/getHours" : null, SWR_FETCHER)

  // console.log(data, error)

  return (
    <Layout>
      <SEO
        title="View Volunteer Hours"
        description="Volunteer hour portal for CPInitiative"
      />
      <div className="flex flex-col w-full h-full items-center px-4">
        <Header />
        {session && (
          <div className="w-full max-w-4xl pt-24">
            <div className="w-full mt-4 mb-10">
              <div className="grid w-full grid-rows-6 grid-cols-none md:grid-rows-2 md:grid-cols-1 md:grid-flow-col gap-3">
                <div className="row-span-3 bg-white p-3 flex flex-col rounded-md shadow-lg text-5xl font-extrabold">
                  <h1 className="m-auto text-purple-900 underline text-center">
                    {session?.user?.name}
                  </h1>
                  <h3 className="mx-auto mb-6 text-purple-800 text-sm">
                    Email: {session?.user?.email}
                  </h3>
                </div>
                <div className="flex bg-white flex-col px-3 py-5 col-span-2 row-span-2 rounded-lg shadow-lg">
                  {data ? (
                    <p className="text-purple-800 font-semibold text-3xl m-auto">
                      <b>{Math.round(data?.totalHours * 100) / 100}</b> hours
                      volunteered
                    </p>
                  ) : (
                    // spinner
                    <div className="flex items-center justify-center ">
                      <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  disabled={!data}
                  onClick={() => setViewAddHoursForm(true)}
                  className="flex cursor-pointer px-3 shadow-lg rounded-lg row-span-1 col-span-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:saturate-50"
                >
                  <p className="text-white text-base font-medium m-auto">
                    Add Volunteer Hours
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="flex cursor-pointer p-3 shadow-lg rounded-lg row-span-1 col-span-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <p className="text-white text-base font-medium m-auto">
                    Sign out
                  </p>
                </button>
              </div>
            </div>
            {/* <div>
              <div className="w-full flex flex-col md:flex-row justify-between">
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
            </div> */}
            <VolunteerHourHistory data={data} />
            {viewAddHoursForm && (
              <>
                <div className="flex fixed items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" />
                <div
                  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>
              </>
            )}
            <Transition appear show={viewAddHoursForm} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 pt-10 overflow-auto"
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
                    <div className="inline-block w-full max-w-5xl p-6 mt-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add your hours
                      </Dialog.Title>

                      <AddVolunteerHoursForm
                        onClose={() => setViewAddHoursForm(false)}
                        data={data}
                      />

                      {/* <div className="">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          onClick={() => setViewAddHoursForm(false)}
                        >
                          Close
                        </button>
                      </div> */}
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
                <button
                  type="button"
                  onClick={() => signIn("google")}
                  className="text-blue-400 cursor-pointer underline"
                >
                  Sign in?
                </button>
              </h1>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
