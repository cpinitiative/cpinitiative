import { NowRequest, NowResponse } from "@vercel/node"
import { db } from "../../../../firebase"
import * as payPalClient from "../../../util/classes/paypalClient"
import { FieldValue } from "firebase-admin/firestore"
import { getClientIp } from "request-ip"
import * as checkoutNodeJssdk from "@paypal/checkout-server-sdk"
import { sendWelcomeEmail } from "../../../util/classes/sendWelcomeEmail"

export default async function processLiveRegistration(
  request: NowRequest,
  response: NowResponse
) {
  try {
    let {
      level,
      firstName,
      lastName,
      email,
      preferredLanguage,
      referrer,
      referrerDetail,
      timezone,
      orderData,
    } = request.body
    email = email?.trim()

    console.warn("start process registration")
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
      return response.status(400).json({
        success: false,
        message:
          "The request to verify the payment was called with improper data.",
      })
    }

    // 3. Call PayPal to get the transaction details
    const paypalRequest = new checkoutNodeJssdk.orders.OrdersGetRequest(orderID)

    let order
    try {
      order = await payPalClient.client().execute(paypalRequest)
    } catch (err) {
      // 4. Handle any errors from the call
      console.error(err)
      return response.status(500).json({
        success: false,
        message: "An internal error occurred while trying to verify the order.",
      })
    }

    // 5. Validate the transaction details are as expected
    if (order.result.purchase_units[0].amount.value !== "100.00") {
      return response.status(500).json({
        success: false,
        message: "The value of the order was not $100.",
      })
    }
    const ref = db
      .collection("classes-registration")
      .doc("2024oct")
      .collection("registrations")
      .doc()
    console.log(
      `========== Processing registration ${ref.id} / ${firstName} ${lastName} / ${email} ==========`
    )

    const joinLinkRef = db.collection("group-join-links").doc()
    await joinLinkRef.set({
      groupId:
        level === "beginner" ? "UbWvzOgLWhfeGWMCenNL" : "NHJN8ySkm5lKfnKYlgo0",
      revoked: false,
      numUses: 0,
      maxUses: 1,
      expirationTime: null,
      usedBy: [],
      author: "REGISTRATION_" + email,
      id: joinLinkRef.id,
    })

    await Promise.all([
      ref.set({
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
        timestamp: FieldValue.serverTimestamp(),
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      }),
      sendWelcomeEmail({
        recipient: email,
        fname: firstName,
        lname: lastName,
        classLevel: level,
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      }),
    ])

    return response.status(200).json({
      success: true,
      data: {
        registrationId: ref.id,
        paymentId: orderID,
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      },
    })
  } catch (error) {
    console.error(
      "AN INTERNAL ERROR OCCURRED WHILE PROCESSING LIVE REGISTRATION"
    )
    console.error(error)
    return response.status(500).json({
      success: false,
      message: "An internal error occurred: " + error.message,
    })
  }
}
