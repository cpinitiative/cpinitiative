import { aadit, andrew_xu, kevin, ryan } from "../../index/images"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Ryan Chou",
    title: "Host",
    photo: ryan,
  },
  {
    name: "Kevin Sheng",
    title: "Teacher / USACO Platinum",
    photo: kevin,
  },
  {
    name: "Aadit Ambadkar",
    title: "Teacher / USACO Platinum",
    photo: aadit,
  },
  {
    name: "Andrew Xu",
    title: "Teacher / USACO Gold",
    photo: andrew_xu,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
