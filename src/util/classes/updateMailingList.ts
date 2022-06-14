import axios from "axios"
import * as crypto from "crypto"
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY

const updateMailchimp = async ({
  email,
  mailchimpIpSignup,
  mailchimpMergeFields,
  mailchimpTags,
}) => {
  try {
    const listID = "e122c7f3eb"
    const emailHash = crypto
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
      .then(resp => {
        return resp.data
      })
      .catch(e => {
        console.warn(
          "No Mailchimp Existing Fields Found (or an error occurred)"
        )
        // the user probably doesn't exist
        // so just assume there is no previous data
        if (e.response?.status !== 404) {
          console.warn(e?.toJSON())
        }

        // return empty object
        return Promise.resolve({})
      })
    console.log("done getting existing fields")
    const data = {
      email_address: email,
      status: "subscribed",
      status_if_new: "subscribed",
      ip_signup: mailchimpIpSignup,
      merge_fields: {
        ...(existingFields?.merge_fields || {}),
        ...mailchimpMergeFields,
      },
    }
    console.log("data", data)
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
    console.log("posting mailchimp")
    await axios.post(
      `https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`,
      {
        tags: mailchimpTags,
      },
      {
        auth: {
          username: "nousername",
          password: MAILCHIMP_API_KEY,
        },
      }
    )
    console.log("done posting to mailchimp")
  } catch (error) {
    console.error("INTERNAL ERROR", error)
    throw new Error(
      "An internal error occurred while trying to update mailchimp information."
    )
  }
}

export async function updateMailingList({
  email,
  firstName,
  lastName,
  preferredLanguage,
  ip,
  level,
  fullFinancialAid,
  joinLink,
}: {
  email: string
  firstName: string
  lastName: string
  preferredLanguage: string
  ip: string
  level: string
  fullFinancialAid: boolean
  joinLink: string
}) {
  await updateMailchimp({
    email,
    mailchimpIpSignup: ip,
    mailchimpMergeFields: {
      FNAME: firstName,
      LNAME: lastName,
      PROGLANG:
        preferredLanguage === "java"
          ? "Java"
          : preferredLanguage === "cpp"
          ? "C++"
          : "Python",
      BRVCJOINLK: joinLink,
    },
    mailchimpTags: [
      {
        name: `Bronze Video Class`,
        status: "active",
      },
      ...(fullFinancialAid
        ? [
            {
              name: `Bronze Video Class Full Financial Aid`,
              status: "active",
            },
          ]
        : []),
    ],
  })
}

export async function updateLiveMailingList({
  email,
  firstName,
  lastName,
  preferredLanguage,
  ip,
  level,
  fullFinancialAid,
}: {
  email: string
  firstName: string
  lastName: string
  preferredLanguage: string
  ip: string
  level: string
  fullFinancialAid: boolean
}) {
  await updateMailchimp({
    email,
    mailchimpIpSignup: ip,
    mailchimpMergeFields: {
      FNAME: firstName,
      LNAME: lastName,
      PROGLANG: preferredLanguage === "java" ? "Java" : "C++",
    },
    mailchimpTags: [
      {
        name: `Summer 2022 ${
          level === "beginner" ? "Beginner" : "Intermediate"
        } Class`,
        status: "active",
      },
      ...(fullFinancialAid
        ? [
            {
              name: `Summer 2022 Full Financial Aid`,
              status: "active",
            },
          ]
        : []),
    ],
  })
}
