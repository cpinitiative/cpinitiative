// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // console.log(username, password);
  // console.log(information["Neo Wang"]);

  if (!username || !password)
    return res
      .status(400)
      .json({ error: "Please enter a username and password" });

  //@ts-ignore
  if (!information[username])
    return res.status(303).json({ message: "Username not found" });
  //@ts-ignore
  if (information[username].password !== password)
    return res.status(400).json({ message: "Password is incorrect" });

  const data = {
    spreadSheetId: "1_vnkTOlc6nXzi0Q_DBGEaJ7TQMYjEmJ5U9oFeZIMgy0",
  };

  (async function () {
    const doc = new GoogleSpreadsheet(data.spreadSheetId);

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    console.log(`Sheet Title ${sheet.title}`);
    console.log(`Sheet Length ${rows.length}`);

    let hoursData = new Object();

    await sheet.loadCells(`B2:B${rows.length}`);
    await sheet.loadCells(`E2:E${rows.length}`);

    // console.log(sheet.cellStats);

    // @ts-ignore
    const aliasesTL = information[username]?.aliases?.map((alias) =>
      alias.toLowerCase()
    );

    console.log(aliasesTL)

    for (let i = 2; i < rows.length; i++) {
      const findData = async () => {
        //@ts-ignore
        const name = await sheet.getCellByA1(`B${i}`).value.toLowerCase();
        const hrs = await sheet.getCellByA1(`E${i}`).value;

        if (aliasesTL.includes(name.trim().toLowerCase())) {
          // @ts-ignore
          hoursData[name] = (hoursData[name] || 0) + (hrs || 0);
        }
      };

      await findData();
    }

    res.status(200).json(hoursData);
  })();
}
