// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { getSession } from "next-auth/client"
import { SHEETS_API_CREDS, SHEETS_METADATA } from "../../../config"
import { db } from "../../../firebase"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })

  const email = session?.user?.email

  const VolunteerInfo = await db
    .collection("configuration")
    .doc("volunteers")
    .get()
    .then(doc => {
      // console.log(doc.data())
      return doc.data()
    })

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
    const rowsLength = rows.length + 1
    console.log(`Sheet Title ${sheet.title}`)
    console.log(`Sheet Length ${rowsLength}`)

    await sheet.loadCells(`A2:C${rowsLength}`)
    await sheet.loadCells(`C2:C${rowsLength}`)
    await sheet.loadCells(`D2:D${rowsLength}`)
    await sheet.loadCells(`E2:E${rowsLength}`)
    await sheet.loadCells(`F2:F${rowsLength}`)

    let totalHours = 0
    let data = []

    // identify volunteer alias
    let volunteerInfo = Object.entries(VolunteerInfo).find(volunteer => {
      // @ts-ignore
      return volunteer[1]?.emails?.includes(email)
    })

    // console.log(volunteerInfo)

    if (volunteerInfo?.length > 1 && volunteerInfo[1]) {
      // @ts-ignore
      volunteerInfo = volunteerInfo[1]
    }

    // console.log(volunteerInfo)

    if (!volunteerInfo)
      return res.status(200).json({
        error:
          "No volunteer found, make sure you're signed in with the right email. Or, this is your first time.",
      })

    for (let i = 2; i <= rowsLength; i++) {
      const findData = async () => {
        let time = await sheet.getCellByA1(`A${i}`)
        // console.log(i, time.effectiveFormat?.numberFormat?.type);
        time =
          time.effectiveFormat?.numberFormat?.type === "DATE_TIME"
            ? time.formattedValue
            : time.value
        // const temp = await sheet.getCellByA1(`A${i}`)
        // console.log(temp.numberFormat);
        // console.log(i, time, temp.numberFormat);
        const em = await sheet.getCellByA1(`C${i}`).value
        const prs = await sheet.getCellByA1(`D${i}`).value
        const hrs = await sheet.getCellByA1(`E${i}`).value
        const other = await sheet.getCellByA1(`F${i}`).value

        if (
          // @ts-ignore
          volunteerInfo?.emails?.some(
            email => em.trim().toLowerCase() === email.trim().toLowerCase()
          )
        ) {
          console.log("found", i, parseFloat(hrs))
          totalHours += parseFloat(hrs) || 0 // default to 0 if not a number
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
