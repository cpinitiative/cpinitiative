import { melody, tarushii } from "../../index/images"
import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    photo: melody,
    name: "Melody Yu",
    title: "USACO Platinum",
  },
  {
    name: "Rayna Arora",
    title: "EGOI Team Member / USACO Platinum",
  },
  {
    photo: tarushii,
    name: "Tarushii Goel",
    title: "EGOI Team Member / USACO Platinum",
  },
  {
    name: "Claire Zhang",
    title: "EGOI Team Member / USACO Platinum",
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-cyan-600" />
}
