import { melody, ryan, evan, jesse, kevin, nikhil } from "../../index/images"
import yizhong from "../../../images/yizhong.png"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "Host",
    photo: melody,
  },
  {
    name: "Evan Zhao",
    title: "Teacher / USACO Platinum",
    photo: evan,
  },
  {
    name: "Nikhil Chatterjee",
    title: "Teacher / CPI",
    photo: nikhil,
  },
  {
    name: "Jesse Choe",
    title: "Teacher / CPI",
    photo: jesse,
  },
  {
    name: "Ryan Chou",
    title: "Teacher / CPI",
    photo: ryan,
  },
  {
    name: "Kevin Sheng",
    title: "Teacher / CPI",
    photo: kevin,
  },
  {
    name: "Yizhong Ru",
    title: "Teacher / X-Camp / NOI 2012 Gold Medalist",
    photo: yizhong,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
