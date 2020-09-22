import { NowRequest, NowResponse } from "@vercel/node"
import { createHash } from "crypto"
import axios, { AxiosResponse } from "axios"
const { MAILCHIMP_API_KEY } = process.env


export default async function joinClassesMailingList(request: NowRequest, response: NowResponse) {
  console.log("running")
  const {
    email,
    tags:unprocessedTags
  } = request.body
  if (!unprocessedTags || !email) {
    console.log("missing", email, unprocessedTags, JSON.stringify(request.body))
    response.status(400).json({
      success: false,
      code: "missing_parameters",
      message: "Either the email or tags field was not provided."
    })
  }
  const tags = unprocessedTags.split(",");

  try {
    const listID = "e122c7f3eb"
    let emailHash = createHash("md5").update(email.toLowerCase()).digest("hex")
    console.log("sent list")
    const existingDataResponse = await axios.get(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    }).catch((e) => {
      // console.log("Unable to GET existing mailchimp fields", e)
      // the user probably doesn't exist
      // so just assume there is no previous data
      console.log("list error")

      return Promise.resolve({})
    })
    if (Object.keys(existingDataResponse).length > 0 && (existingDataResponse as AxiosResponse).data.tags && (existingDataResponse as AxiosResponse).data.tags.findIndex(c => c.name === "Classes Info") > -1) {
      console.log("already subscribed")

      response.status(409).json({
        success: false,
        code: "already_subscribed",
        message: "The email is already part of the Classes Info list."
      })
    }
    const data = {
      email_address: email,
      status: "subscribed",
      status_if_new: "subscribed",
      ip_signup: request.headers["client-ip"]
    }
    console.log("sending update for data")

    await axios.put(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, data, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    })
    const transformedTags = [];
    if (tags.indexOf("classes") > -1) {
      transformedTags.push({
        name: "Classes Info",
        status: "active"
      });
    }
    if (tags.indexOf("general") > -1) {
      transformedTags.push({
        name: "General",
        status: "active"
      });
    }
    if (tags.indexOf("contests") > -1) {
      transformedTags.push({
        name: "Contest Info",
        status: "active"
      });
    }
    console.log("sending update for tags")

    await axios.post(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`, {
      tags:tags,
    }, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    })
  } catch (error) {
    console.log("INTERNAL ERROR", error)
    response.status(500).json({
      success: false,
      code: "internal_error",
      mailchimpErrorData: { ...error } // in case of circular JSON
    })
  }
  console.log("done")
  response.status(200).json({
    success: true,
    code: "subscribed"
  })
}