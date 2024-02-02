import { ryan, albert, kevin, rohan_garg } from "../../index/images"
import chongtian_ma from "../../index/images/chongtian_ma.jpg"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Ryan Chou",
    title: "Host",
    photo: ryan,
  },
  {
    name: "Albert Ye",
    title: "Teacher",
    photo: albert,
  },
  {
    name: "Kevin Sheng",
    title: "Teacher",
    photo: kevin,
  },
  {
    name: "Rohan Garg",
    title: "Teacher",
    photo: rohan_garg,
  },
  {
    name: "Chongtian Ma",
    title: "Teacher",
    photo: chongtian_ma,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}