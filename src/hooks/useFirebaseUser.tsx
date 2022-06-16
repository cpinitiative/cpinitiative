import { useEffect, useState } from "react"
import useFirebase from "../firebase/useFirebase"
import type firebaseType from "firebase"

export default function useFirebaseUser() {
  const firebase = useFirebase()
  const [user, setUser] = useState<firebaseType.User | null>(null)

  useEffect(() => {
    if (!firebase) {
      return
    }
    return firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [firebase])

  return user
}
