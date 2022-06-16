import type firebaseType from "firebase"
import { useEffect, useRef, useState } from "react"
import useFirebase from "../firebase/useFirebase"
import useFirebaseUser from "./useFirebaseUser"

// Warning: currently doesn't respond to changes in classDoc yet
export default function useClassRegistrations<RegistrationType>(
  classDoc: string, // classes-registration/${classDoc}
  soundOn: boolean
) {
  const firebase = useFirebase()
  const user = useFirebaseUser()
  const [loading, setLoading] = useState(true)
  const [hasPermission, setHasPermission] = useState(false)
  const [registrations, setRegistrations] = useState<RegistrationType[] | null>(
    null
  )
  const oldRegistrationCount = useRef<number>(0)

  useEffect(() => {
    if (!firebase || !user) {
      return
    }
    setLoading(false)

    let unsubscribe = null
    if (
      [
        "OjLKRTTzNyQgMifAExQKUA4MtfF2",
        "7G0y8xGyv4gkowb33Vmn478znod2",
        "BKFOe33Ym7Pc7aQuET57MiljpF03",
        "5IXfZDX1j2ZOftqfYiBcmmStmn93",
        "uolNeSdAeQRq7Tl1fMYsqfvYVwF3",
        "66c1KZcjpGMkGsT6IJUuLtUkkV23",
        "OnrIPCVMRXW3RX7m989nT9yJ8x93",
        "LLyjrLbioYZQiKfN0hxQDpXg5AR2",
      ].includes(user.uid)
    ) {
      setHasPermission(true)
      unsubscribe = firebase
        .firestore()
        .collection("classes-registration")
        .doc(classDoc)
        .collection("registrations")
        .onSnapshot(
          snapshot => {
            const newRegistrations = []
            snapshot.forEach(doc => {
              newRegistrations.push({
                id: doc.id,
                data: doc.data(),
              })
            })
            newRegistrations.sort(
              (a, b) =>
                /* desc */
                b.data.timestamp.toMillis() - a.data.timestamp.toMillis()
            )
            if (
              soundOn &&
              newRegistrations.length > oldRegistrationCount.current
            ) {
              const audio = new Audio(
                "https://github.com/thecodingwizard/super-coin-box/raw/gh-pages/assets/coin.mp3"
              )
              audio.play()
            }
            oldRegistrationCount.current = newRegistrations.length
            setRegistrations(newRegistrations)
          },
          error => {
            alert("Error: " + error.message)
          }
        )
    } else {
      setHasPermission(false)
    }

    return unsubscribe
  }, [user, soundOn])

  return {
    loading,
    hasPermission,
    registrations,
  }
}
