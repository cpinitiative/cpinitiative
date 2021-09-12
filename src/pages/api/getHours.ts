// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { getSession } from "next-auth/client"
import { SHEETS_API_CREDS, SHEETS_METADATA } from "../../../config"
import { VolunteerInfo } from "../../../metadata"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  const email = session.user?.email

  // console.log(username, password);
  // console.log(information["Neo Wang"]);

  if (!session)
    return res.status(400).json({ error: "Please sign in through the portal" })

    // //@ts-ignore
    // if (!information[username])
    //   return res.status(303).json({ message: "Username not found" })
    // //@ts-ignore
    // if (information[username].password !== password)
    //   return res.status(400).json({ message: "Password is incorrect" })
  ;(async function () {
    const doc = new GoogleSpreadsheet(SHEETS_METADATA.spreadSheetId)

    await doc.useServiceAccountAuth(SHEETS_API_CREDS)
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    console.log(`Sheet Title ${sheet.title}`)
    console.log(`Sheet Length ${rows.length}`)

    await sheet.loadCells(`A2:C${rows.length}`)
    await sheet.loadCells(`C2:C${rows.length}`)
    await sheet.loadCells(`D2:D${rows.length}`)
    await sheet.loadCells(`E2:E${rows.length}`)
    await sheet.loadCells(`F2:F${rows.length}`)

    let totalHours = 0
    let data = []

    // identify volunteer alias
    let volunteerInfo = Object.entries(VolunteerInfo).find(volunteer => {
      // @ts-ignore
      return volunteer[1]?.emails?.includes(email)
    })
    
    // @ts-ignore
    volunteerInfo = volunteerInfo?.length > 1 && volunteerInfo[1]

    console.log(volunteerInfo)

    for (let i = 2; i < rows.length; i++) {
      const findData = async () => {
        const time = await sheet.getCellByA1(`A${i}`).formattedValue
        const em = await sheet.getCellByA1(`C${i}`).value
        const prs = await sheet.getCellByA1(`D${i}`).value
        const hrs = await sheet.getCellByA1(`E${i}`).value
        const other = await sheet.getCellByA1(`F${i}`).value

        if (
          // @ts-ignore
          volunteerInfo?.emails.some(
            email => em.trim().toLowerCase() === email.trim().toLowerCase()
          )
        ) {
          totalHours += parseInt(hrs)
          data = [...data, { time, em, prs, hrs, other }]
        }
      }

      await findData()
    }

    // @ts-ignore
    data = data.sort((a, b) => new Date(b.time) - new Date(a.time))

    return res.status(200).json({ totalHours, data })
  })()
}
