import * as firebaseAdmin from "firebase-admin"

// import { FIREBASE_CONFIG } from "./config"

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: "usaco-guide",
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail:
        "firebase-adminsdk-nuibb@usaco-guide.iam.gserviceaccount.com",
    }),
  })
}

export const db = firebaseAdmin.firestore()

