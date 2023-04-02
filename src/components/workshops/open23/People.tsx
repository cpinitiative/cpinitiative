import {
  melody,
  dustin,
  ryan,
  amogha,
  aditya,
  ryan_fu,
  kevin,
} from "../../index/images"
import xieting from "../../../images/xieting.jpeg"
import rohan_garg from "../../index/images/rohan_garg.jpg"
import chongtian_ma from "../../index/images/chongtian_ma.jpg"
import albert_ye from "../../index/images/albert_ye.jpeg"

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
