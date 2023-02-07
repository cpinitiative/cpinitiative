import { VercelRequest, VercelResponse } from "@vercel/node"
import { mailjet, CONTACT_LIST_IDS } from "../../util/mailjet"

export default async function joinMailingList(
  request: VercelRequest,
  response: VercelResponse
) {
  const { email, mailingList }: { email: string; mailingList: string } =
    request.body
  if (!mailingList || !email) {
    response.status(400).json({
      success: false,
      code: "missing_parameters",
      message: "Either the email or mailing list field was not provided.",
    })
    return
  }

  try {
    await mailjet.post("contact", { version: "v3" }).request({
      IsExcludedFromCampaigns: "false",
      Email: email,
    })
  } catch (e) {
    if ((e as any).response?.statusText.startsWith("MJ18")) {
      // Subscriber already exists; ignore
    } else {
      response.status(500).json({
        success: false,
        code: "internal_error",
        message: (e as any).response?.statusText ?? e,
      })
      return
    }
  }

  if (!CONTACT_LIST_IDS.hasOwnProperty(mailingList)) {
    response.status(400).json({
      success: false,
      code: "unknown_list",
      message: "Unknown mailing list name provided.",
    })
    return
  }

  await mailjet
    .post("contact", { version: "v3" })
    .id(email)
    .action("managecontactslists")
    .request({
      ContactsLists: [
        {
          Action: "addforce",
          ListID: "" + (CONTACT_LIST_IDS as any)[mailingList],
        },
      ],
    })

  response.status(200).json({
    success: true,
    code: "subscribed",
  })
}
