import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = []
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
