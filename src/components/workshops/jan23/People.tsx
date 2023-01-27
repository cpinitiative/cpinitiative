import { melody, dustin, ryan, amogha, kevin, aadit } from "../../index/images"
import xieting from "../../../images/xieting.jpeg"

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
        photo: kevin
    },
    {
        name: "Aadit Ambadkar",
        title: "Teacher / CPI",
        photo: aadit
    },
    {
        name: "Ryan Chou",
        title: "Teacher / CPI",
        photo: ryan,
    },
]
export default function People() {
    return <Speakers speakers={speakers} titleColor="text-purple-600" />
}
