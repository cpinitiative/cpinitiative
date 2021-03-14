import React from "react"
import "./src/styles/main.css"
import "./src/styles/tailwindcss-utils.css"
import { FirebaseProvider } from "./src/firebase/FirebaseContext"

export function wrapRootElement({ element }) {
  return <FirebaseProvider>{element}</FirebaseProvider>
}
