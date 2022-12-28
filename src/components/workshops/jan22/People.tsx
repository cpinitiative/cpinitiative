import { melody, dustin, ryan, amogha } from "../../index/images"
import xieting from "../../../images/xieting.jpeg"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "Host / USACO Platinum",
    photo: melody,
  },
  {
    name: "Dustin Miao",
    title: "Teacher / USACO Platinum",
    photo: dustin,
  },
  {
    name: "Ryan Chou",
    title: "Teacher / CPI",
    photo: ryan,
  },
  {
    name: "Amogha Pokkulandra",
    title: "Teacher / CPI",
    photo: amogha,
  },
  {
    name: "Xieting Chu",
    title: "Teacher / X-Camp",
    photo: xieting,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
