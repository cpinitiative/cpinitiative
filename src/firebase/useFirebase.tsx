import * as React from "react"
import FirebaseContext from "./FirebaseContext"
import type firebaseType from "firebase"

// from https://github.com/alexluong/gatsby-packages/blob/master/packages/gatsby-plugin-firebase/src/components/FirebaseContext.js

export default function useFirebase(
  fn: (firebase: typeof firebaseType) => void | (() => void | undefined) = null,
  dep: React.DependencyList = []
): typeof firebaseType {
  const firebase = React.useContext(FirebaseContext)

  React.useEffect(() => {
    if (!firebase || !fn) return
    return fn(firebase)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firebase, fn, ...dep])
  return firebase
}
