import { benq } from "../../index/images"
import aakash from "../../index/images/aakash.png"
import ryan from "../../index/images/ryan_fu.jpeg"
import suhas_nagar from "../../index/images/suhas_nagar.png"

import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Ryan Fu",
    title: "Host/CPI",
    photo: ryan,
  },
  {
    name: "Aakash Gokhale",
    title: "USACO Problemsetter",
    photo: aakash,
  },
  {
    name: "Benjamin Qi",
    title: "USACO Problemsetter",
    photo: benq,
  },
  {
    name: "Suhas Nagar",
    title: "USACO Problemsetter",
    photo: suhas_nagar,
  },
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
