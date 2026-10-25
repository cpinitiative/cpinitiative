import justin from "../../index/images/justin_ji.jpg"
import john_zhou from "../../index/images/john_zhou.png"
import jason_sun from "../../index/images/jason_sun.png"
import nelson from "../../index/images/nelson.png"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Justin Ji",
    title: "USACO Guide Director",
    photo: justin,
  },
  {
    name: "John Zhou",
    title: "CPI Workshops Lead",
    photo: john_zhou,
  },
  {
    name: "Jason Sun",
    title: "IOI '26 Team Member",
    photo: jason_sun,
  },
  {
    name: "Nelson Huang",
    title: "IOI '26 Team Member",
    photo: nelson,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
