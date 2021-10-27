export const SHEETS_API_CREDS = {
  type: "service_account",
  project_id: "mapswithweather-323019",
  private_key_id: process.env.SHEETS_PRIVATE_KEY_ID,
  private_key: process.env.SHEETS_PRIVATE_KEY,
  client_email: "erwqaesrf@mapswithweather-323019.iam.gserviceaccount.com",
  client_id: "100256589686179656857",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/erwqaesrf%40mapswithweather-323019.iam.gserviceaccount.com",
}

export const SHEETS_METADATA = {
  spreadSheetId: "19hM_-D3ca3nziDNzM7INNjKAHQTu8_8dV4jrK8sK5FU",
}

// @ts-ignore
export const SWR_FETCHER = (...args) => fetch(...args).then(res => res.json())
