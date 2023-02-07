import Mailjet from "node-mailjet"

export const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
})

export const CONTACT_LIST_IDS = {
  general: 10230889,
  cpg: 10230892,
  contests: 10230893,
}
