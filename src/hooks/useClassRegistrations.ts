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
  const { user, isLoading: isUserLoading } = useFirebaseUser()
  const [loading, setLoading] = useState(true)
  const [hasPermission, setHasPermission] = useState(false)
  const [registrations, setRegistrations] = useState<RegistrationType[] | null>(
    null
  )
  const oldRegistrationCount = useRef<number>(0)

  useEffect(() => {
    setLoading(true)
    if (!firebase || isUserLoading) return
    if (!user) {
      setLoading(false)
      setHasPermission(false)
      setRegistrations(null)
      return
    }

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
        "7AF1MKJjqmXfBDGhimSWEhXqe8k1",
        "M2JoLeXI1NMPU8haWLweUOMGAGr2",
        "xqK4FiUP0VU8L5GABh2SBaSs0Dd2",
        "fRKOjFTFtuTfL65TPMSYhDLrwXs2",
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

            setLoading(false)
          },
          error => {
            alert("Error: " + error.message)
            setLoading(false)
          }
        )
    } else {
      setHasPermission(false)
    }

    return unsubscribe
  }, [user, isUserLoading, soundOn])

  return {
    loading,
    hasPermission,
    registrations,
  }
}
