import { andrew_xu, ryan, ryan_fu } from "../../index/images"

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
    photo: andrew_xu,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
