import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { getServerSession } from "next-auth/next"
import { SHEETS_API_CREDS, SHEETS_METADATA } from "../../../config"
import { db } from "../../../firebase"
import YAML from "yaml"
import { authOptions } from "./auth/[...nextauth]"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const VolunteerInfo = await db
    .collection("configuration")
    .doc("volunteers")
    .get()
    .then(doc => {
      // console.log(doc.data())
      return doc.data()
    })
  const session = await getServerSession(req, res, authOptions)
  const email = session?.user?.email

  const { date, hours, response, role } = req.body
  const name = session?.user?.name

  if (!name) return res.status(400).json({ error: "Name is required" })
  // checks the existence of hours and whether it is a number
  if (hours && isNaN(hours))
    return res.status(400).json({ error: "Hours must be a number" })
  if (!response || !isNaN(response))
    return res.status(400).json({ error: "Response is required" })
  if (!role || !isNaN(role))
    return res.status(400).json({ error: "Role is required" })

  if (
    !Object.keys(VolunteerInfo).some(key =>
      VolunteerInfo[key].emails.includes(email)
    )
  )
    return res
      .status(403)
      .json({ error: "You are not authorized to add hours" })

  const time = date ? new Date(date).toISOString() : new Date().toISOString()
  // .replace("T", " ")
  // .replace("Z", "")
  // .replaceAll("-", "/")
  // .split(".")[0]

  console.log({
    time,
    email,
    hours,
    response,
    role,
  })
  await (async function () {
    const doc = new GoogleSpreadsheet(SHEETS_METADATA.spreadSheetId)

    await doc.useServiceAccountAuth(SHEETS_API_CREDS)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow({
      Timestamp: time,
      Name: name,
      Email: email,
      Hours: hours,
      Response: YAML.stringify(response),
      Role: role,
    })
  })()

  return res.status(200).json({
    message: "Successfully submitted",
  })
}
