import { ryan, albert, kevin, rohan_garg, aadit, andrew_xu, melody } from "../../index/images"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "Host",
    photo: melody,
  },
  {
    name: "Max Yang",
    title: "Teacher",
  },
  {
    name: "Andrew Xu",
    title: "Teacher / USACO Gold",
    photo: andrew_xu
  }
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
