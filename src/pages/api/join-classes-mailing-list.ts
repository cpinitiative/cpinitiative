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
    response.status(400).json({
      success: false,
      code: "missing_parameters",
      message: "Either the email or tags field was not provided."
    })
    return;
  }
  const tags = unprocessedTags.split(",");

  try {
    const listID = "e122c7f3eb"
    let emailHash = createHash("md5").update(email.toLowerCase()).digest("hex")
    const existingDataResponse = await axios.get(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, {
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


    if (Object.keys(existingDataResponse).length > 0 && (existingDataResponse as AxiosResponse).data.tags && transformedTags.every(tag => (existingDataResponse as AxiosResponse).data.tags.findIndex(c => c.name === tag.name) > -1)) {

      response.status(409).json({
        success: false,
        code: "already_subscribed",
        message: "The email is already part of the Classes Info list."
      });
      return;
    }
    const data = {
      email_address: email,
      status: "subscribed",
      status_if_new: "subscribed",
      ip_signup: request.headers["client-ip"]
    }

    await axios.put(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}`, data, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    })

    await axios.post(`https://us2.api.mailchimp.com/3.0/lists/${listID}/members/${emailHash}/tags`, {
      tags:transformedTags,
    }, {
      auth: {
        username: "no-username",
        password: MAILCHIMP_API_KEY
      }
    })
  } catch (error) {
    console.log("INTERNAL ERROR", error)
    console.log(error.response.data)
    response.status(500).json({
      success: false,
      code: "internal_error",
      mailchimpErrorData: { ...error.response.data } // in case of circular JSON
    })
    return;
  }
  response.status(200).json({
    success: true,
    code: "subscribed"
  })
}