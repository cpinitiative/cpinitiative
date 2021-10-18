import { nathanw, daniel, darren, michael, andrew } from "../../index/images"
import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    title: "2x USACO Finalist",
  },
  {
    photo: daniel,
    name: "Daniel Guan",
    title: "USACO Finalist",
  },
  {
    photo: darren,
    name: "Darren Yao",
    title: "Author of An Introduction to USACO",
  },
  {
    photo: michael,
    name: "Michael Cao",
  },
  {
    photo: andrew,
    name: "Andrew Wang",
  },
]

export default function WebinarPeople() {
  return (
    <Speakers
      speakers={speakers}
      description={
        "This webinar will be hosted by top USACO contestants and USACO Finalists, with ample experience in competitive programming."
      }
    />
  )
}
