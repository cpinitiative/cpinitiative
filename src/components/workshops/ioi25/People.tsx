import { dong } from "../../index/images"
import ryan from "../../index/images/ryan_fu.jpeg"
import alex_chen from "../../index/images/alexchen.png"
import brian_xue from "../../index/images/brianxue.png"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Ryan Fu",
    title: "Host/CPI",
    photo: ryan,
  },
  {
    name: "Dong Liu",
    title: "IOI '25 Team Member",
    photo: dong,
  },
  {
    name: "Brian Xue",
    title: "IOI '25 Team Member",
    photo: brian_xue,
  },
  {
    name: "Alex Chen",
    title: "IOI '25 Team Member",
    photo: alex_chen,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
