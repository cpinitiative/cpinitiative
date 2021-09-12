import React from "react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const people = [
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  // More people...
]
const activityItems = [
  {
    id: 1,
    person: people[0],
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    id: 2,
    person: people[0],
    project: "New thing",
  },
  {
    id: 3,
    person: people[0],
    project: "New thing3",
  },
  // More items...
]

export function VolunteerHourHistory() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {activityItems.map(activityItem => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <img
                className="h-6 w-6 rounded-full"
                src={activityItem.person.imageUrl}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">
                    {activityItem.person.name}
                  </h3>
                  <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed {activityItem.project} ({activityItem.commit} in
                  master) to {activityItem.environment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  

  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  
*/
export function AddVolunteerHours() {
  return (
    <div className="my-4 rounded-md shadow-sm">
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
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. 42"
        />
      </div>
      <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label
          htmlFor="job-title"
          className="block w-full text-sm font-medium text-gray-700"
        >
          Reason
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0"
          placeholder="Ex. I reviewed pull requests #1,2,3 and resolved issues #4,5,6"
        />
      </div>
      <button className="inline-flex my-10 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
        Submit Volunteer Hours
      </button>
    </div>
  )
}

export default function ViewHours() {
  return (
    <Layout>
      <SEO
        title="View Volunteer Hours"
        description="Volunteer hour portal for CPInitiative"
      />
      <div className="flex flex-col w-full h-full items-center">
        <Header />
        <div className="w-full max-w-7xl pt-24">
          <div className="w-full flex flex-row justify-between my-6">
            <h1 className="text-4xl font-semibold">Your Volunteering Hours</h1>
            <button className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
              Add Volunteer Hours
            </button>
          </div>
          <VolunteerHourHistory />
          <AddVolunteerHours />
        </div>
      </div>
    </Layout>
  )
}
