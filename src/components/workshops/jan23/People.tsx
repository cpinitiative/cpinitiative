import { melody, dustin, kevin, ryan, aadit } from "../../index/images"

import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
    {
        name: "Melody Yu",
        title: "Host / USACO Platinum",
        photo: melody,
    },
    {
        name: "Dustin Miao",
        title: "Teacher / USACO Platinum",
        photo: dustin,
    },
    {
        name: "Kevin Sheng",
        title: "Teacher / CPI",
        photo: kevin,
    },
    {
        name: "Ryan Chou",
        title: "Teacher / CPI",
        photo: ryan,
    },
    {
        name: "Aadit Ambadkar",
        title: "Teacher / CPI",
        photo: aadit,
    }
];

export default function People() {
    return <Speakers speakers={speakers} titleColor="text-purple-600" />
  }