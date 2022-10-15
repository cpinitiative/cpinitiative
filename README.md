# Competitive Programming Initiative

We promote competitive programming among students through resources, outreach, classes, and contests.

Thanks to [Vercel](https://vercel.com/?utm_source=cp-initiative&utm_campaign=oss) for providing free hosting & continuous deployment!

## Development Environment Setup

**Instructions (for volunteer hours -- not necessarily needed for other stuff)**

1. If not done already, clone the repository `cpinitiative/cpinitiative` and
   open up the folder.
2. At the root directory, add a file `.env`, which will contain the environment
   configuration for the volunteer-hours. An example `.env` file will look like

   ```env
   GOOGLE_CLIENT_ID="....apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="asdkjflasdjfklas"
   NEXTAUTH_URL="http://localhost:3000"
   SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
   SHEETS_PRIVATE_KEY_ID="1298301asfa98sf09ac0291023"
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
   ENCRYPTION_KEY="asdjkflajsdflkjas;ldjfa"
   MAILCHIMP_API_KEY="asdlfkjasf"
   PAYPAL_API_SECRET="ddd"
   MAILGUN_API_KEY=""
   ```

   Here's how to get the following keys:

   - **Google Sheets:**
     https://developers.google.com/sheets/api/guides/authorizing#APIKey
   - **NEXT_AUTH_URL:** choose the address of deployment
   - FIREBASE_PRIVATE_KEY -- I don't think this is even needed??
   - ENCRYPTION_KEY -- ask Nathan (or modify cryptography file), used to decrypt firebase key on vercel
   - MAILCHIMP_API_KEY -- ask Nathan, only needed for class registration system + mailing list I think
   - PAYPAL_API_SECRET -- ask Nathan, only needed for class registration system

3. Using the correct configuration file, go into `SHEETS_API_CREDS`
   in`config.ts` and make sure the credential object matches your Google Sheet
   configuration that you retrieved in the previous step.
4. Acquire firebase credentials (or setup emulator), and make sure to replace
   the configuration in the `firebaseAdmin.initializeApp` in `firebase.ts` with
   the correct configuration.
5. To navigate to the volunteer hours page after running `yarn dev`, you can go
   to `localhost:3000/view-hours`. Then, it should be able to test.
6. Make sure to add access to the sheet in mind through Google Sheets itself
(add the service account email as an editor in the sheet)

Here is a sample entry in the table, for reference, which can be called with the
[google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) node
package, :

<table>
<tr>
<th>Timestamp</th>
<th>What is your name?</th>
<th>What is your email address?</th>
<th>List any PR's that you reviewed or submitted this week.</th>
<th>How many hours did you spend on the USACO Guide this week? Enter only a number. (Optional, only if you want volunteer hours)</th>
<th>Anything else you want to tell us? (Optional)</th>
</tr>
<tbody>
<tr>
<td>2021-10-23T23:18:42.653Z</td>
<td>Someone</td>
<td>me@gmail.com</td>
<td>I worked on pull requests and reviewed things.</td>
<td>4</td>
<td>Yes, I made some stuff.</td>
</tr>
</tbody>
</table>
