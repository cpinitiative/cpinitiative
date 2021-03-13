/* eslint-disable */
// @ts-nocheck
import * as checkoutNodeJssdk from "@paypal/checkout-server-sdk"
import * as functions from "firebase-functions"
/**
 *
 * Returns PayPal HTTP client instance with environment that has access
 * credentials context. Use this instance to invoke PayPal APIs, provided the
 * credentials have access.
 *
 * @return any
 */
export function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment())
}

/**
 *
 * Set up and return PayPal JavaScript SDK environment with PayPal access credentials.
 * This sample uses SandboxEnvironment. In production, use LiveEnvironment.
 *
 * @return any
 */
function environment() {
  const clientId =
    "AQs24h0QDn7C1l4penHhK7x3XbDTL9E5Dh-6FPz3HycxvRw22wiBdMo3UMftn2m1kOmiUcOVZUdzEWFL"
  const clientSecret = functions.config().paypal.apisecret

  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
}

export async function prettyPrint(jsonData: any, pre = "") {
  let pretty = ""
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      if (isNaN(key)) pretty += pre + capitalize(key) + ": "
      else pretty += pre + (parseInt(key) + 1) + ": "
      if (typeof jsonData[key] === "object") {
        pretty += "\n"
        pretty += await prettyPrint(jsonData[key], pre + "    ")
      } else {
        pretty += jsonData[key] + "\n"
      }
    }
  }
  return pretty
}
