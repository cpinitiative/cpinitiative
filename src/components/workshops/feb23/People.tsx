import { melody, dustin, ryan, amogha, aditya } from "../../index/images"
import xieting from "../../../images/xieting.jpeg"
import rohan_garg from "../../index/images/rohan_garg.jpg"
import chongtian_ma from "../../index/images/chongtian_ma.jpg"
import albert_ye from "../../index/images/albert_ye.jpeg"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Ryan Chou",
    title: "Host / CPI",
    photo: ryan,
  },
  {
    name: "Rohan Garg",
    title: "Teacher / CPI",
    photo: rohan_garg,
  },
  {
    name: "Aditya Gupta",
    title: "CPI / USACO Platinum",
    photo: aditya,
  },
  {
    name: "Chongtian Ma",
    title: "CPI / USACO Platinum",
    photo: chongtian_ma,
  },
  {
    name: "Albert Ye",
    title: "CPI / USACO Platinum",
    photo: albert_ye,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
