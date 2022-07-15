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
import { StaticImageData } from "next/image"
dayjs.extend(customParseFormat)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)

export default function ContestList() {
  let pastContests = contests.filter(e => {
    return e.date === "" ? true : dayjs().isAfter(dayjs(e.date), "day")
  })

  let upcomingContests = contests.filter(e => {
    return dayjs().isSameOrBefore(dayjs(e.date), "day")
  })

  pastContests.sort(
    (a, b) =>
      dayjs(b.date, "MMMM DD, YYYY").valueOf() -
      dayjs(a.date, "MMMM DD, YYYY").valueOf()
  )

  upcomingContests.sort(
    (a, b) =>
      dayjs(a.date, "MMMM DD, YYYY").valueOf() -
      dayjs(b.date, "MMMM DD, YYYY").valueOf()
  )

  const sortedContestList = upcomingContests.concat(pastContests)

  const listOfContests = sortedContestList.map(e => {
    let isPastContest =
      e.date === "" ? true : dayjs().isAfter(dayjs(e.date), "day")
    let isToday = e.date === "" ? false : dayjs(e.date).isToday()
    return (
      <ContestCard
        key={e.name}
        name={e.name}
        date={e.date}
        photo={e.photo}
        link={e.link}
        isPast={isPastContest}
        isToday={isToday}
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
      <p className="text-center">
        Are you organizing a contest targeted towards high schoolers? If you
        want to partner with us, send us an email at{" "}
        <a
          href="mailto:contests@joincpi.org"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          contests@joincpi.org
        </a>
        .
      </p>
    </>
  )
}

const contests: {
  name: string
  date: string
  photo: StaticImageData
  link: string
}[] = [
  {
    name: "CerealCodes",
    date: "August 13, 2022",
    photo: cerealcodes,
    link: "https://www.cerealcodes.org/",
  },
  {
    name: "TJIOI 2022",
    date: "June 11, 2022",
    photo: tjioi,
    link: "https://codeforces.com/blog/entry/103256",
  },
  {
    name: "4th Turing Fun Cup",
    date: "May 14, 2022",
    photo: placeholder,
    link: "https://tinyurl.com/4thTuringFunCupGuidebook",
  },
  {
    name: "The Andover Computing Open (TACO)",
    date: "May 21, 2022",
    photo: taco,
    link: "https://andovercomputingopen.com/",
  },
  {
    name: "Montgomery Blair Informatics Tournament (mBIT)",
    date: "May 22, 2022",
    photo: mbit,
    link: "https://mbit.mbhs.edu/",
  },
  {
    name: "traverse[cs]",
    date: "June 19, 2022",
    photo: placeholder,
    link: "https://traverse-cs.org/",
  },
  {
    name: "alGIRLithm. A programming contest for high school girls.",
    date: "",
    photo: placeholder,
    link: "https://algirlithm.org/",
  },
  {
    name: "Lexington Informatics Tournament (LIT)",
    date: "",
    photo: lit,
    link: "https://lit.lhsmathcs.org/",
  },
  {
    name: "Teamscode",
    date: "",
    photo: teamscode,
    link: "https://teamscode.org/",
  },
]
