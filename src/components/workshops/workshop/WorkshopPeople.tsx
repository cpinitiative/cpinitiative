import { nathanw, melody } from "../../index/images"
import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    title: "Three-time USACO Finalist",
  },
  {
    photo: melody,
    name: "Melody Yu",
    title: "Instructor",
  },
]
export default function WebinarPeople() {
  return <Speakers speakers={speakers} />
}
