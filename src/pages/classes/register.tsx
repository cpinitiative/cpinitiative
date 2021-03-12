import * as React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Hero from "../../components/classes/Hero"
import Header from "../../components/Header"
import NotLowQuality from "../../components/classes/NotLowQuality"
import ClassLevels from "../../components/classes/ClassLevels"
import ClassInstructors from "../../components/classes/ClassInstructors"
import EmailForm from "../../components/classes/EmailForm"
import Newsletter from "../../components/index/Newsletter"
import { PayPalButton } from "react-paypal-button-v2"
import { useState } from "react"
import LevelSelect from "../../components/classes/registration/LevelSelect"

export default function Contests() {
  const [level, setLevel] = useState<"" | "beginner" | "intermediate">("")
  return (
    <Layout grayFooter>
      <SEO
        title="Online USACO Classes"
        description="Learn USACO through affordable, high-quality classes with vetted, experienced instructors and a curriculum designed and developed by past USACO Finalists."
      />
      <Header noBanner={true} />
      <div className="margin-top-nav" />
      <div className={" bg-gray-100"}>
        <div className={"max-w-6xl mx-auto pt-10"}>
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Course
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Select the level that you would like to register for.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div>
                        <LevelSelect level={level} setLevel={setLevel} />
                      </div>

                      {level && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            You Selected:{" "}
                            {level.charAt(0).toUpperCase() + level.substring(1)}{" "}
                            USACO Course
                          </label>

                          {level == "beginner" ? (
                            <>
                              <p className="mt-2 text-sm text-gray-500">
                                This course is designed for USACO newcomers, and
                                assumes no prior USACO knowledge. The topics
                                taught in this class will prepare students to
                                pass USACO Bronze and become USACO Silver
                                contestants.
                              </p>
                              <i className="mt-2 text-sm text-gray-500">
                                Prerequisite: Basic Programming Experience in
                                Java or C++
                              </i>
                            </>
                          ) : (
                            <>
                              {" "}
                              <p className="mt-2 text-sm text-gray-500">
                                This course is designed for students currently
                                in USACO Silver. The topics taught in this class
                                will prepare students to pass USACO Silver and
                                become USACO Gold contestants.
                              </p>
                              <i className="mt-2 text-sm text-gray-500">
                                Recommended Prerequisite: Currently in USACO
                                Silver
                              </i>
                            </>
                          )}

                          <p className="mt-2 text-sm text-gray-500">
                            {level == "beginner"
                              ? "Every Saturday from March 28 to June 3, 4-6pm PST (UTC-8). (Total 9 Sessions)"
                              : "Every Friday from March 27 to June 8, 4-6pm PST (UTC-8). (Total 9 Sessions)"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="street_address"
                            id="street_address"
                            autoComplete="street-address"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal_code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Payment
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Your payment for this class helps the Competitive
                    Programming Initiative, a registered 501(c)(3) nonprofit
                    organization, further its goal of promoting the field of
                    competitive programming.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <p className="mt-1 text-sm text-gray-600">
                        To finalize your registration, select a payment method
                        below.
                      </p>
                      {/*
                       //@ts-ignore */}
                      <PayPalButton
                        amount="100.00"
                        shippingPreference="NO_SHIPPING"
                        onClick={(data, actions) => {
                          console.log(data, actions)
                          // do validation
                        }}
                        onSuccess={(details, data) => {
                          alert(
                            "Transaction completed by " +
                              details.payer.name.given_name
                          )

                          // OPTIONAL: Call your server to save the transaction
                          // return fetch("/paypal-transaction-complete", {
                          //   method: "post",
                          //   body: JSON.stringify({
                          //     orderID: data.orderID,
                          //   }),
                          // })
                          // TODO: call function
                        }}
                        options={{
                          disableFunding: "credit",
                          // sandbox id
                          clientId:
                            "AQs24h0QDn7C1l4penHhK7x3XbDTL9E5Dh-6FPz3HycxvRw22wiBdMo3UMftn2m1kOmiUcOVZUdzEWFL",
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
