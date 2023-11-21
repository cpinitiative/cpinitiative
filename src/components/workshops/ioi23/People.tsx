import {
    melody,
    agastya_goel,
    austin_geng,
    rohin_garg
  } from "../../index/images"

  
  import Speakers, { Speaker } from "../Speakers"
  const speakers: Speaker[] = [
    {
      photo: melody,
      name: "Melody Yu",
      title: "Host / CPI",
    },
    {
        photo: rohin_garg,
        name: "Rohin Garg",
        title: "IOI 23 Gold Medalist"
    },
    {
        photo: austin_geng,
        name: "Austin Geng",
        title: "IOI 23 Gold Medalist"
    },
    {
        photo: agastya_goel,
        name: "Agastya Goel",
        title: "IOI 23 Gold Medalist"
    }
  ]
  export default function People() {
    return <Speakers speakers={speakers} titleColor="text-purple-600" />
  }
  