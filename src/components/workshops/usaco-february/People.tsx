import {
  maggie,
  dustin,
  ryan,
  evan,
  jesse,
  kevin,
  davidz,
} from "../../index/images"
import brendan from "../../../images/brendan.png"
import yizhong from "../../../images/yizhong.png"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Maggie Liu",
    title: "Host",
    photo: maggie,
  },
  {
    name: "Dustin Miao",
    title: "Teacher / USACO Platinum",
    photo: dustin,
  },
  {
    name: "Evan Zhao",
    title: "Teacher / USACO Platinum",
    photo: evan,
  },
  {
    name: "Jesse Choe",
    title: "Teacher / CPI",
    photo: jesse,
  },
  {
    name: "David Zhang",
    title: "Teacher / CPI",
    photo: davidz,
  },
  {
    name: "Ryan Chou",
    title: "Teacher / CPI",
    photo: ryan,
  },
  {
    name: "Kevin Sheng",
    title: "Teacher / CPI",
    photo: kevin,
  },
  {
    name: "Brendan Ruiz",
    title: "Teacher / X-Camp Academic Director",
    photo: brendan,
  },
  {
    name: "Yizhong Ru",
    title: "Teacher / X-Camp / NOI 2012 Gold Medalist",
    photo: yizhong,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
