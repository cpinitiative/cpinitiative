import { benq } from "../../index/images"
import chongtian_ma from "../../index/images/chongtian_ma.jpg"
import suhas_nagar from "../../index/images/suhas_nagar.png"


import Speakers, { Speaker } from "../Speakers"

const speakers: Speaker[] = [
  {
    name: "Chongtian Ma",
    title: "USACO Problemsetter",
    photo: chongtian_ma,
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
  }
]

export default function People() {
  return <Speakers speakers={speakers} titleColor="text-blue-700" />
}
