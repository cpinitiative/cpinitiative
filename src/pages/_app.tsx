import { AppProps } from "next/app"
import { FirebaseProvider } from "../firebase/FirebaseContext"
import { Provider } from "next-auth/client"
import "../styles/main.css"
import "../styles/tailwindcss-utils.css"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
    </Provider>
  )
}
