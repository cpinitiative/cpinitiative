
import React from "react"
import "./src/styles/main.css"
import "./src/styles/tailwindcss-utils.css"
import { FirebaseProvider } from "./src/firebase/FirebaseContext"

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)
