import ContestCard from "./ContestCard"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import isToday from "dayjs/plugin/isToday"
import {
  taco,
  lit,
  algirlithm,
  teamscode,
  bapc,
  calico,
  tjioi,
  wwpit,
  indigo,
}  from "./images"
import Image, { StaticImageData } from "next/legacy/image"
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
        desc={e.desc}
      />
    )
  })
  return (
    <>
      <div className="relative max-w-7xl flex flex-wrap justify-evenly gap-x-4 gap-y-4 mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        {listOfContests}
      </div>
    </>
  )
}

const contests: {
  name: string
  photo: StaticImageData
  link: string,
  desc: string,
}[] = [
  {
    name: "TJ Invitational Open In Informatics (TJIOI)",
    photo: tjioi,
    link: "https://activities.tjhsst.edu/tjioi/",
    desc: "The TJ Invitational Open In Informatics (TJIOI) is Thomas Jefferson High School for Science and Technology’s annual programming contest, designed to encourage the involvement of middle and high schoolers with computer science.",
  },
  {
    name: "WWP Informatics Tournament (WWPIT)",
    photo: wwpit,
    link: "https://wwppc.tech/", 
    desc:"WWPIT is a round-based informatics tournament with advanced and novice divisions targeting competitive programmers of all skill levels, hosted by students at West Windsor-Plainsboro High School South.",
  },
  {
    name: "The CALICO Informatics Competition",
    photo: calico,
    link: "https://calico.cs.berkeley.edu/", 
    desc:"The CALICO Informatics Competition is a high-school programming competition hosted by students at UC Berkeley. We create contest problems to promote the understanding of useful algorithms and encourage students to grow their problem-solving skills!",
  },
  {
    name: "TeamsCode",
    photo: teamscode,
    link: "https://teamscode.org/", 
    desc: "TeamsCode is a student-run 501(c)(3) non-profit that works to encourage middle school and high school students to study computer science. We work with teachers and sponsors to create awesome programming contests – both online and in-person!",
  },
  {
    name: "BAPC",
    photo: bapc,
    link: "https://bapc.gunncpc.com/", 
    desc: "Bay Area Programming Contest is an in-person contest in ICPC format, with an online mirror also available. This contest is hosted by the Gunn Competitive Programming Club.",
  },
  {
    name: "The Andover Computing Open (TACO)",
    photo: taco,
    link: "https://andovercomputingopen.com/",
    desc: "The Andover Computing Open (TACO) is a secondary school tournament run and designed by Phillips Academy Andover students. Compete for prizes, attend workshops, and join a community of programmers!",
  },
  {
    name: "alGIRLithm. A programming contest for high school girls.",
    photo: algirlithm,
    link: "https://algirlithm.org/",
    desc: "alGIRLithm is a student-led high school programming contest working to inspire the next generation of female computer scientists by making competitive programming accessible to high school girls. Girls with all levels of experience in competitive programming are encouraged to join!"
  },
  {
    name: "Lexington Informatics Tournament (LIT)",
    photo: lit,
    link: "https://lit.lhsmathcs.org/",
    desc: "LIT (Lexington Informatics Tournament) is a competitive programming tournament for middle/high school students, hosted by members of the LexMACS club from Lexington High School, along with many guest problemsetters/testers.",
  },
  {
    name: "Indigo Informatics Competition",
    photo: indigo,
    link: "https://indigocode.org/",
    desc: "The Indigo Informatics Competition is a programming contest for pre-college students, run by a group of students from Carmel High School in Indiana. We aim to share our passion for computer science with students all over the world. The contest is entirely virtual, and programmers of all skill levels are welcome!",
  },
]
