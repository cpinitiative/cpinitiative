import { AppProps } from "next/app"
import { FirebaseProvider } from "../firebase/FirebaseContext"
import { SessionProvider } from "next-auth/react"
import "../styles/main.css"
import "../styles/tailwindcss-utils.css"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <FirebaseProvider>
          <Component {...pageProps} />
        </FirebaseProvider>
      </SessionProvider>
      <Analytics />
    </>
  )
}
