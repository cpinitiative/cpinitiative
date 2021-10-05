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
    title: "EGOI Member / USACO Platinum",
  },
  {
    photo: tarushii,
    name: "Tarushii Goel",
    title: "EGOI Member / USACO Platinum",
  },
  {
    name: "Claire Zhang",
    title: "EGOI Member / USACO Platinum",
  },
]
export default function People() {
  return <Speakers speakers={speakers} />
}
