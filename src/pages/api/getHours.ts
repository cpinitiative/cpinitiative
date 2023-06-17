// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleSpreadsheet } from "google-spreadsheet"
import { SHEETS_API_CREDS, SHEETS_METADATA } from "../../../config"
import { db } from "../../../firebase"
import YAML from "yaml"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session)
    return res.status(400).json({ error: "Please sign in through the portal" })

  const email = session?.user?.email

  const VolunteerInfo = await db
    .collection("configuration")
    .doc("volunteers")
    .get()
    .then(doc => {
      // console.log(doc.data())
      return doc.data()
    })

  // //@ts-ignore
  // if (!information[username])
  //   return res.status(303).json({ message: "Username not found" })
  // //@ts-ignore
  // if (information[username].password !== password)
  //   return res.status(400).json({ message: "Password is incorrect" })
  ;(async function () {
    // identify volunteer alias
    let volunteerRecord = Object.entries(VolunteerInfo).find(volunteer => {
      // @ts-ignore
      return volunteer[1]?.emails?.includes(email)
    })

    // console.log(volunteerInfo)
    let volunteerInfo
    if (volunteerRecord?.length > 1 && volunteerRecord[1]) {
      // @ts-ignore
      volunteerInfo = volunteerRecord[1]
    }

    // console.log(volunteerInfo)

    if (!volunteerInfo)
      return res.status(200).json({
        error:
          "No volunteer found, make sure you're signed in with the right email. Or, this is your first time.",
      })

    const doc = new GoogleSpreadsheet(SHEETS_METADATA.spreadSheetId)

    await doc.useServiceAccountAuth(SHEETS_API_CREDS)
    await doc.loadInfo()

    const hourSheet = doc.sheetsByIndex[0]
    const hourSheetRows = await hourSheet.getRows()
    const hourSheetRowLength = hourSheetRows.length + 1
    // console.log(`Sheet Title ${hourSheet.title}`)
    // console.log(`Sheet Length ${hourSheetRowLength}`)

    const rolesSheet = doc.sheetsByIndex[1]
    const rolesSheetRows = await rolesSheet.getRows()
    const roles = rolesSheet.headerValues
    const rolesSheetRowLength = rolesSheetRows.length + 1
    // load questions for each role and all responses
    await Promise.all([
      rolesSheet.loadCells(
        `A2:${String.fromCharCode(65 + roles.length - 1)}${rolesSheetRowLength}`
      ),
      // timestamp col
      hourSheet.loadCells(`A2:A${hourSheetRowLength}`),
      // name col
      hourSheet.loadCells(`B2:B${hourSheetRowLength}`),
      // email col
      hourSheet.loadCells(`C2:C${hourSheetRowLength}`),
      // hrs col
      hourSheet.loadCells(`D2:D${hourSheetRowLength}`),
      // response col
      hourSheet.loadCells(`E2:E${hourSheetRowLength}`),
      // role col
      hourSheet.loadCells(`F2:F${hourSheetRowLength}`),
    ])

    let totalHours = 0
    let data = []

    for (let i = 2; i <= hourSheetRowLength; i++) {
      const findData = async () => {
        let time = await hourSheet.getCellByA1(`A${i}`)
        // console.log(i, time.effectiveFormat?.numberFormat?.type);
        time =
          time.effectiveFormat?.numberFormat?.type === "DATE_TIME"
            ? time.formattedValue
            : time.value
        // const temp = await sheet.getCellByA1(`A${i}`)
        // console.log(temp.numberFormat);
        // console.log(i, time, temp.numberFormat);
        const em = await hourSheet.getCellByA1(`C${i}`).value
        const hrs = await hourSheet.getCellByA1(`D${i}`).value
        const response = YAML.parse(await hourSheet.getCellByA1(`E${i}`).value)
        const role = await hourSheet.getCellByA1(`F${i}`).value

        if (
          // @ts-ignore
          volunteerInfo?.emails?.some(
            email => em.trim().toLowerCase() === email.trim().toLowerCase()
          )
        ) {
          // console.log("found", i, parseFloat(hrs))
          totalHours += parseFloat(hrs) || 0 // default to 0 if not a number
          data = [...data, { time, em, hrs, response, role }]
        }
      }

      await findData()
    }

    let questions: Record<string, string[]> = {}

    for (let role in roles) {
      role = roles[role]
      const roleCol = roles.findIndex(col => role === col)
      for (let i = 2; i <= rolesSheetRowLength; i++) {
        const cell = `${String.fromCharCode(65 + roleCol)}${i}`
        if (!questions[role]) {
          questions[role] = []
        }
        questions[role].push(await rolesSheet.getCellByA1(cell).value)
        questions[role] = questions[role].filter(q => q)
      }
    }

    // @ts-ignore
    data = data.sort((a, b) => new Date(b.time) - new Date(a.time))

    return res.status(200).json({ totalHours, questions, data })
  })()
}
