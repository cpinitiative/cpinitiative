/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"

import { FirebaseProvider } from "./src/firebase/FirebaseContext"

export const wrapRootElement = ({ element }) => (
  <FirebaseProvider>{element}</FirebaseProvider>
)
