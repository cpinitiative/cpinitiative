import { ryan, evan, melody } from "../../index/images"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "Host / USACO Platinum",
    photo: melody,
  },
  {
    name: "Evan Zhao",
    title: "Teacher / USACO Platinum",
    photo: evan,
  },
  {
    name: "Ryan Chou",
    title: "Teacher / USACO Silver",
    photo: ryan,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
