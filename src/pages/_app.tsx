import { AppProps } from "next/app"
import { FirebaseProvider } from "../firebase/FirebaseContext"
import "../styles/main.css"
import "../styles/tailwindcss-utils.css"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  )
}
