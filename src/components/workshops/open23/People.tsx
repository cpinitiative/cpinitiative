import { kevin, melody, ryan, ryan_fu } from "../../index/images"
import rohan_garg from "../../index/images/rohan_garg.jpg"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    photo: melody,
    name: "Melody Yu",
    title: "Host / CPI",
  },
  {
    photo: rohan_garg,
    name: "Rohan Garg",
    title: "Teacher / CPI",
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    title: "Teacher / CPI",
  },
  {
    photo: ryan_fu,
    name: "Ryan Fu",
    title: "Teacher / CPI",
  },
  {
    photo: kevin,
    name: "Kevin Sheng",
    title: "Teacher / CPI",
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
