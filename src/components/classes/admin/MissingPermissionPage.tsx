import Link from "next/link"
import useFirebase from "../../../firebase/useFirebase"
import useFirebaseUser from "../../../hooks/useFirebaseUser"
import Header from "../../Header"
import Layout from "../../Layout"

export default function MissingPermissionPage() {
  const firebase = useFirebase()
  const { user } = useFirebaseUser()
  return (
    <Layout>
      <Header />
      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28">
        <h1 className={"text-4xl font-bold tracking-tight leading-9"}>
          Error 404: Page Not Found
        </h1>
        <Link
          href={"/"}
          className={"text-2xl text-blue-600 hover:underline pt-4 block"}>
          
            Go Home
          
        </Link>

        <button
          onClick={() => {
            if (user) {
              firebase.auth().signOut()
            } else {
              firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            }
          }}
          className={"text-2xl text-blue-600 hover:underline pt-4 block"}
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </Layout>
  );
}
