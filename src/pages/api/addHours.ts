import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { getSession } from "next-auth/client"
import { SHEETS_API_CREDS, SHEETS_METADATA } from "../../../config"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  const email = session.user?.email

  const { name, hours, prsReviewed, other } = req.body

  if (!name) return res.status(400).json({ error: "Name is required" })
  // checks the existence of hours and whether it is a number
  if (hours && isNaN(hours))
    return res.status(400).json({ error: "Hours must be a number" })
  if (!hours || isNaN(hours))
    return res.status(400).json({ error: "Hours is required" })

  if (!prsReviewed)
    return res.status(400).json({ error: "PRs reviewed is required" })

  const time = new Date()
    .toISOString()
    .replace("T", " ")
    .replace("Z", "")
    .replaceAll("-", "/")
    .split(".")[0]

  console.log({
    time,
    email,
    hours,
    prsReviewed,
    other,
  })

  const idx = [time, name, email, prsReviewed, hours, other]

  ;(async function () {
    const doc = new GoogleSpreadsheet(SHEETS_METADATA.spreadSheetId)

    await doc.useServiceAccountAuth(SHEETS_API_CREDS)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    // console.log("rows", rows);
    await sheet.loadCells(`A${rows.length + 2}:F${rows.length + 2}`)

    idx.forEach(async (val, idx) => {
      // console.log(`${String.fromCharCode("A".charCodeAt(0) + idx)}${rows.length + 2}`)
      const cell = await sheet.getCellByA1(
        `${String.fromCharCode("A".charCodeAt(0) + idx)}${rows.length + 2}`
      )

    //   if (idx === 0) cell.formattedValue = val
      cell.value = val
      await sheet.saveUpdatedCells()
    })
  })()

  return res.status(200).json({
    message: "Successfully submitted",
  })
}