import { PayPalButton } from "react-paypal-button-v2"
import * as React from "react"

export default function PaymentSection({
  level,
  hasAttemptedPayment,
  setHasAttemptedPayment,
  setSubmitting,
  dataIsValid,
  firebase,
  firstName,
  lastName,
  email,
  emailValid,
  preferredLanguage,
  referrer,
  referrerDetail,
  timezone,
  setSuccess,
  setErrorData,
  setShowError,
  setRegistrationId,
  setJoinLink,
}) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Payment
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Your payment for this class helps the Competitive Programming
              Initiative, a registered 501(c)(3) nonprofit organization, further
              its goal of promoting the field of competitive programming.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              {!level && hasAttemptedPayment && (
                <p className="text-md text-red-800">
                  You must select a course above in order to register.
                </p>
              )}
              {!dataIsValid && hasAttemptedPayment && (
                <p className="text-md text-red-800">
                  {!emailValid &&
                    "Your email address is improperly formatted. "}
                  You must fill out all fields in order to register.
                </p>
              )}
              {(!hasAttemptedPayment || (level && dataIsValid)) && (
                <>
                  <p className="mt-1 text-sm text-gray-600">
                    To finalize your{" "}
                    {level && (
                      <b>
                        {level == "beginner" ? "Beginner" : "Intermediate"}{" "}
                        USACO Class{" "}
                      </b>
                    )}
                    registration, select a payment method below.
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Returns: If you are not satisfied with our classes, you may
                    cancel your class registration anytime before the{" "}
                    <b>second</b> class for a <b>full refund</b> by emailing{" "}
                    <a
                      href={"mailto:classes@joincpi.org"}
                      className={"underline"}
                    >
                      classes@joincpi.org
                    </a>
                    .
                  </p>
                  {/*
                       //@ts-ignore */}
                  <PayPalButton
                    amount="100.00"
                    shippingPreference="NO_SHIPPING"
                    createOrder={(data, actions) => {
                      console.log(data, actions)
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "100.00",
                              currency_code: "USD",
                              breakdown: {
                                item_total: {
                                  value: "100.00",
                                  currency_code: "USD",
                                },
                              },
                            },
                            items: [
                              {
                                name:
                                  (level == "beginner"
                                    ? "Beginner"
                                    : "Intermediate") + " USACO Class",
                                unit_amount: {
                                  value: "100.00",
                                  currency_code: "USD",
                                },
                                quantity: "1",
                              },
                            ],
                          },
                        ],
                      })
                    }}
                    // @ts-ignore
                    onClick={(data, actions) => {
                      setHasAttemptedPayment(true)
                      if (!dataIsValid || !level) {
                        return false
                      }
                    }}
                    onError={() => {
                      setErrorData({
                        title: "Error: Unable to complete registration",
                        message: (
                          <>
                            <p>
                              We encountered an error while trying to complete
                              your registration. If this was unexpected, please
                              send us an email at{" "}
                              <a className={"text-blue-700 hover:underline"}>
                                classes@joincpi.org
                              </a>
                              , and include a screenshot of this page.
                            </p>
                            <p>
                              <b>Error Code PAYPAL_CATCHALL</b>
                            </p>
                          </>
                        ),
                      })
                      setShowError(true)
                    }}
                    onSuccess={(details, data) => {
                      setSubmitting(true)

                      fetch(`/api/classes/process-live-registration`, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          level,
                          firstName,
                          lastName,
                          email,
                          preferredLanguage,
                          referrer,
                          referrerDetail,
                          timezone,
                          orderData: data,
                        }),
                      })
                        .then(resp => resp.json())
                        .then(data => {
                          if (!data.success) {
                            throw new Error(data.message)
                          }

                          setRegistrationId(data.data.registrationId)
                          setJoinLink(data.data.joinLink)
                          setSuccess(true)
                          setSubmitting(false)
                        })
                        .catch(e => {
                          setErrorData({
                            title: "Error: Unable to complete registration",
                            message: (
                              <>
                                <p>
                                  We encountered an error while trying to
                                  complete your registration: {e.message}. If
                                  this was unexpected, please send us an email
                                  at{" "}
                                  <a
                                    className={"text-blue-700 hover:underline"}
                                  >
                                    classes@joincpi.org
                                  </a>
                                  , and include a screenshot of this page.
                                </p>
                                <p>
                                  <b>Order Details: </b>
                                  <textarea
                                    rows={4}
                                    readOnly={true}
                                    value={JSON.stringify({
                                      payer: details.payer,
                                      data,
                                      e,
                                    })}
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  />
                                </p>
                                <p>
                                  <b>
                                    You may have already been charged, so please
                                    email us before trying again.
                                  </b>
                                </p>
                              </>
                            ),
                          })
                          setShowError(true)

                          return
                        })
                    }}
                    options={{
                      disableFunding: "credit",
                      clientId:
                        "AeRSduV1FG3pQYaXGSZcvkXXBD1oyV2cCbNtn7VJPS6yF_0QO9doD7dUn9inLveCGWrTgd-sR2Vllwp-",
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
