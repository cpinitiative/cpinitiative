import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import * as crypto from "crypto"
import axios from "axios"

// @ts-ignore
import * as checkoutNodeJssdk from "@paypal/checkout-server-sdk"
import * as payPalClient from "./payPalClient"

admin.initializeApp()

const MAILCHIMP_API_KEY = functions.config().mailchimp.apikey
export const processClassRegistration = functions.https.onCall(
  async (
    {
      level,
      firstName,
      lastName,
      email,
      preferredLanguage,
      referrer,
      referrerDetail,
      timezone,
      orderData,
    },
    context
  ) => {
    const orderID = orderData.orderID

    if (
      !level ||
      !firstName ||
      !lastName ||
      !email ||
      !preferredLanguage ||
      !referrer ||
      !timezone ||
      !orderData ||
      !orderID
    ) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "The request to verify the payment was called with improper data."
      )
    }

    // 3. Call PayPal to get the transaction details
    const request = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID)

    let order
    try {
      order = await payPalClient.client().execute(request)
    } catch (err) {
      // 4. Handle any errors from the call
      console.error(err)
      throw new functions.https.HttpsError(
        "internal",
        "An internal error occurred while trying to verify the order."
      )
    }

    // 5. Validate the transaction details are as expected
    if (order.result.purchase_units[0].amount.value !== "100.00") {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "The value of the order was not $100."
      )
    }
    try {
      const listID = "e122c7f3eb"
      let emailHash = crypto
        .createHash("md5")
        .update(email.toLowerCase())
        .digest("hex")
      const existingFields = await axios
        .get(
          `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`,
          {
            auth: {
              username: "nousername",
              password: MAILCHIMP_API_KEY,
            },
          }
        )
        .then(data => {
          return data.data
        })
        .catch(e => {
          console.log("Mailchimp Existing Fields GET Error")
          // the user probably doesn't exist
          // so just assume there is no previous data
          return Promise.resolve({})
        })
      const data = {
        email_address: email,
        status: "subscribed",
        status_if_new: "subscribed",
        ip_signup: context.rawRequest.ip,
        merge_fields: {
          ...(existingFields?.merge_fields || {}),
          FNAME: firstName,
          LNAME: lastName,
          PROGLANG: preferredLanguage == "java" ? "Java" : "C++",
        },
      }

      await axios.put(
        `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`,
        data,
        {
          auth: {
            username: "nousername",
            password: MAILCHIMP_API_KEY,
          },
        }
      )

      await axios.post(
        `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`,
        {
          tags: [
            {
              name: `March 2021 ${
                level == "beginner" ? "Beginner" : "Intermediate"
              } Class`,
              status: "active",
            },
          ],
        },
        {
          auth: {
            username: "nousername",
            password: MAILCHIMP_API_KEY,
          },
        }
      )
    } catch (error) {
      console.log("INTERNAL ERROR", error)
      throw new functions.https.HttpsError(
        "internal",
        "An internal error occurred while trying to send the order confirmation email."
      )
    }

    const ref = admin
      .firestore()
      .collection("classes-registration")
      .doc("2021march")
      .collection("registrations")
      .doc()
    await ref.set({
      financialAid: false,
      paid: true,
      orderId: orderData.orderID,
      orderDetails: orderData,
      level,
      personalInfo: {
        firstName,
        lastName,
        email,
        preferredLanguage,
        referrer,
        referrerDetail,
        timezone,
      },
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    return {
      registrationId: ref.id,
      paymentId: orderID,
    }
  }
)
