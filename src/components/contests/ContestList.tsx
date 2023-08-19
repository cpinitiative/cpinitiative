import ContestCard from "./ContestCard"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isToday from "dayjs/plugin/isToday"
import {
  placeholder,
  taco,
  mbit,
  /*algirlithm,*/ lit,
  teamscode,
  tjioi,
  cerealcodes,
} from "./images"
import { StaticImageData } from "next/legacy/image"
dayjs.extend(customParseFormat)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)

export default function ContestList() {

 const listOfContests = contests.map(e => {
    return (
      <ContestCard
        key={e.name}
        name={e.name}
        photo={e.photo}
        link={e.link}
      />
    )
  })
  return (
    <>
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 md:gap-x-4 lg:gap-x-3 xl:gap-x-4"
        >
          {listOfContests}
        </ul>
      </div>
    </>
  )
}

const contests: {
  name: string
  photo: StaticImageData
  link: string
}[] = [
  {
    name: "CerealCodes",
    photo: cerealcodes,
    link: "https://www.cerealcodes.org/",
  },
  {
    name: "TeamsCode Summer 2022",
    photo: teamscode,
    link: "https://www.teamscode.org/contests/summer-2022",
  },
  {
    name: "TJIOI 2022",
    photo: tjioi,
    link: "https://codeforces.com/blog/entry/103256",
  },
  {
    name: "4th Turing Fun Cup",
    photo: placeholder,
    link: "https://tinyurl.com/4thTuringFunCupGuidebook",
  },
  {
    name: "The Andover Computing Open (TACO)",
    photo: taco,
    link: "https://andovercomputingopen.com/",
  },
  {
    name: "Montgomery Blair Informatics Tournament (mBIT)",
    photo: mbit,
    link: "https://mbit.mbhs.edu/",
  },
  {
    name: "traverse[cs]",
    photo: placeholder,
    link: "https://traverse-cs.org/",
  },
  {
    name: "alGIRLithm. A programming contest for high school girls.",
    photo: placeholder,
    link: "https://algirlithm.org/",
  },
  {
    name: "Lexington Informatics Tournament (LIT)",
    photo: lit,
    link: "https://lit.lhsmathcs.org/",
  },
]