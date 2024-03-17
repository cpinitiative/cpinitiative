import {
  ryan,

  ryan_fu,
  andrew_xu

} from "../../index/images"
import xieting from "../../../images/xieting.jpeg"
import rohan_garg from "../../index/images/rohan_garg.jpg"
import chongtian_ma from "../../index/images/chongtian_ma.jpg"
import albert_ye from "../../index/images/albert_ye.jpeg"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    photo: ryan,
    name: "Ryan Chou",
    title: "Host",
  },
  {
    photo: ryan_fu,
    name: "Ryan Fu",
    title: "Teacher",
  },
  {
    name: "Max Yang",
    title: "Teacher",
  },
  {
    name: "Andrew Xu",
    title: "Teacher",
    photo: andrew_xu
  }
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
