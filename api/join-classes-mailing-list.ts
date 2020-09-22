import { NowRequest, NowResponse } from "@vercel/node"
import { createHash } from "crypto"
import axios, { AxiosResponse } from "axios"
const { MAILCHIMP_API_KEY } = process.env


export default async function joinClassesMailingList(request: NowRequest, response: NowResponse) {
  const {
    email,
    tags:unprocessedTags
  } = request.body
  if (!unprocessedTags || !email) {
    response.status(400).send(JSON.stringify({
      success: false,
      code: "missing_parameters",
      message: "Either the email or tags field was not provided."
    }))
  }
  const tags = unprocessedTags.split(",");

  try {
    const listID = "e122c7f3eb"
    let emailHash = createHash("md5").update(email.toLowerCase()).digest("hex")
    const existingDataResponse = await axios.get(`https://us11.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    }).catch((e) => {
      // console.log("Unable to GET existing mailchimp fields", e)
      // the user probably doesn't exist
      // so just assume there is no previous data
      return Promise.resolve({})
    })
    if (Object.keys(existingDataResponse).length > 0 && (existingDataResponse as AxiosResponse).data.tags && (existingDataResponse as AxiosResponse).data.tags.findIndex(c => c.name === "Classes Info") > -1) {
      response.status(409).send(JSON.stringify({
        success: false,
        code: "already_subscribed",
        message: "The email is already part of the Classes Info list."
      }))
    }
    const data = {
      email_address: email,
      status: "subscribed",
      status_if_new: "subscribed",
      ip_signup: request.headers["client-ip"]
    }
    await axios.put(`https://us11.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, data, {
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

    await axios.post(`https://us11.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`, {
      tags:tags,
    }, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    })
  } catch (error) {
    console.log("INTERNAL ERROR", error)
    response.status(500).send(JSON.stringify({
      success: false,
      code: "internal_error",
      mailchimpErrorData: { ...error } // in case of circular JSON
    }))
  }
  response.status(200).send(JSON.stringify({
    success: true,
    code: "subscribed"
  }))
}