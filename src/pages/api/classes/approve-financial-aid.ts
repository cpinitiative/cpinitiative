import { NowRequest, NowResponse } from "@vercel/node"
import { getAuth } from "firebase-admin/auth"
import { db } from "../../../../firebase"
import { classRegistrationAdministrators } from "../../../util/permissions"
import { FieldValue } from "firebase-admin/firestore"
import { updateMailingList } from "../../../util/classes/updateMailingList"
import { getClientIp } from "request-ip"

export default async function approveFinancialAid(
  request: NowRequest,
  response: NowResponse
) {
  try {
    const {
      authToken,
      registrationId,
      email,
      firstName,
      lastName,
      preferredLanguage,
      level,
    } = request.body

    const authUser = await getAuth().verifyIdToken(authToken)
    if (!classRegistrationAdministrators.includes(authUser.uid)) {
      return response.status(403).json({
        success: false,
        message: "Insufficient permissions.",
      })
    }

    const joinLinkRef = db.collection("group-join-links").doc()
    await joinLinkRef.set({
      groupId: "d7eYGfddXq3m2trXG2xt",
      revoked: false,
      numUses: 0,
      maxUses: 1,
      expirationTime: null,
      usedBy: [],
      author: "REGISTRATION_" + email,
      id: joinLinkRef.id,
    })

    await Promise.all([
      updateMailingList({
        email,
        firstName,
        lastName,
        preferredLanguage,
        ip: getClientIp(request),
        level,
        fullFinancialAid: true,
        joinLink: `https://usaco.guide/groups/join?key=${joinLinkRef.id}`,
      }),
      db
        .collection("classes-registration")
        .doc("usacobronze")
        .collection("registrations")
        .doc(registrationId)
        .update({
          status: "ACCEPTED",
          acceptedBy: authUser.uid,
          acceptedTimestamp: FieldValue.serverTimestamp(),
        }),
    ])

    return response.status(200).json({
      success: true,
      message: "Financial Aid successfully granted",
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
