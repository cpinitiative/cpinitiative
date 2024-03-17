import dayjs from "dayjs"
import EGOI from "../../images/egoi-hero.png"
import USACO from "../../images/usaco-guide-logo.png"
import XCampCPI from "../../images/x-camp_cpi.png"
import Dec22Bronze from "../../images/workshops/dec22.png"
import Dec22Thumbnail from "../../images/workshops/dec22thumbnail.png"
import Jan23 from "../../images/workshops/jan23.png"
import Jan23Thumbnail from "../../images/workshops/jan23thumbnail.png"
import Feb23 from "../../images/workshops/feb23.png";
import Feb23Thumbnail from "../../images/workshops/feb23thumbnail.png";
import Open23 from "../../images/workshops/open23.png";
import Open23Thumbnail from "../../images/workshops/open23thumbnail.png";
import { StaticImageData } from "next/legacy/image"
import IOI23 from "../../images/workshops/ioi23.png";
import IOI23Thumbnail from "../../images/workshops/ioi23thumbnail.png";
import Dec23 from "../../images/workshops/dec23.png"
import Jan24 from "../../images/workshops/jan24.png"
import Feb24 from "../../images/workshops/feb24.jpg"
import Open24 from "../../images/workshops/open24.jpg"
// import Dec23Thumbnail from "../../images/workshops/dec23thumbnail.png"

export type Workshop = {
  photo: StaticImageData
  /** In case the event poster does not fit the thumbnail well for latest workshop */
  thumbnail?: StaticImageData
  title: string
  description: string
  date: dayjs.Dayjs
  /** For workshops pertaining to specific seasons (e.g. contest solutions) */
  season?: string
  url: string // joincpi.org/workshops/{url}
  themeColor: string
}

const themeColors = {
  blue: "bg-blue-700 hover:bg-blue-600 focus:border-blue-800 focus:shadow-outline-blue",
  yellow:
    "bg-yellow-600 hover:bg-yellow-500 focus:border-yellow-700 focus:shadow-outline-yellow",
  cyan: "bg-cyan-600 hover:bg-cyan-500 focus:border-cyan-700 focus:shadow-outline-cyan",
  purple:
    "bg-purple-600 hover:bg-purple-500 focus:border-purple-700 focus:shadow-outline-purple",
}

const workshops: Workshop[] = [
  {
    photo: Open24,
    title: "USACO Open 2024 Contest Solutions",
    description: "This Thursday, learn how to solve USACO Bronze/Silver/Gold problems with our partner X-Camp Academy!",
    date: dayjs("Mar 21, 2024 5:00:00 PM PST"),
    season: "2023-2024",
    url: "open24",
    themeColor: themeColors.blue
  },
  {
    photo: Feb24,
    title: "USACO February 2024 Contest Solutions",
    description: "This Saturday, join a live USACO Bronze/Silver/Gold level solution session with our partner X-Camp Academy!",
    date: dayjs("Feb 24, 2024 5:00:00 PM PST"),
    season: "2023-2024",
    url: "feb24",
    themeColor: themeColors.blue
  },
  {
    photo: Jan24,
    title: "USACO January 2024 Contest Solutions",
    description: "Learn how to solve the Bronze/Silver problems by experienced instructors from the USACO Jan 2024 contest, from intuition to code!",
    date: dayjs("Feb 3, 2024 3:00:00 PM PST"),
    season: "2023-2024",
    url: "jan24",
    themeColor: themeColors.blue
  },
  {
    photo: Dec23,
    // thumbnail: Dec23Thumbnail,
    title: "USACO December Contest Solutions",
    description: "Having trouble understanding the USACO December solutions? Learn the bronze and silver solutions on December 31, 4PM PST/7PM EST!",
    date: dayjs("Dec 31, 2023 4:00:00 PM PST"),
    season: "2023-2024",
    url: "dec23",
    themeColor: themeColors.blue,
  },
  {
    photo: IOI23,
    thumbnail: IOI23Thumbnail,
    title: "IOI Team Workshop",
    description: "Watch 3 of the top 4 high school competitive programmers in the USA solve a contest and answer your Q&A, live!",
    date: dayjs("Nov 26, 2023 4:30:00 PM PST"),
    season: "2023-2024",
    url: "ioi23"    ,
    themeColor: themeColors.purple,
  },
  {
    photo: Open23,
    thumbnail: Open23Thumbnail,
    title: "USACO Open Workshop",
    description: "Learn how to solve the Bronze/Silver USACO U.S. Open solutions, and participate in a live discussion/Q&A about tips for USACO next year!",
    date: dayjs("Apr 2, 2023 2:00:00 PM PDT"),
    season: "2022-2023",
    url: "open23",
    themeColor: themeColors.purple
  },
  {
    photo: Feb23,
    thumbnail: Feb23Thumbnail,
    title: "USACO February Contest Solutions",
    description: "Learn how to solve the Bronze/Silver USACO February solutions, from intuition to code!",
    date: dayjs("Mar 4, 2023 4:00:00 PM PST"),
    season: "2022-2023",
    url: "feb23",
    themeColor: themeColors.blue
  },
  {
    photo: Jan23,
    thumbnail: Jan23Thumbnail,
    title: "USACO January Contest Solutions",
    description: "Having trouble understanding the USACO January solutions? Learn the bronze and silver solutions on February 4, 5PM PST/8PM EST!",
    date: dayjs("Feb 4, 2023 5:00:00 PM PST"),
    season: "2022-2023",
    url: "jan23",
    themeColor: themeColors.blue,
  },
  {
    photo: Dec22Bronze,
    thumbnail: Dec22Thumbnail,
    title: "USACO December Contest Solutions",
    description:
      "Watch a USACO Platinum and USACO Silver try to solve the 2022 December Bronze contest, live at youtube.com/@cpinitiative",
    date: dayjs("Jan 7, 2023 4:00:00 PM PST"),
    season: "2022-2023",
    url: "dec22",
    themeColor: themeColors.blue,
  },
  {
    photo: XCampCPI,
    title: "USACO US Open Contest Solutions",
    description:
      "Gain a better understanding of the solutions for the US Open Contest through a joint workshop with X-Camp!",
    date: dayjs("Apr 10, 2022 10:00:00 AM PST"),
    season: "2021-2022",
    url: "open22",
    themeColor: themeColors.purple,
  },
  {
    photo: XCampCPI,
    title: "USACO February Contest Solutions",
    description:
      "Gain a better understanding of the solutions for the February Contest through a joint workshop with X-Camp!",
    date: dayjs("Mar 6, 2022 10:00:00 AM PST"),
    season: "2021-2022",
    url: "feb22",
    themeColor: themeColors.purple,
  },
  {
    photo: XCampCPI,
    title: "USACO January Contest Solutions",
    description:
      "Gain an in-depth understanding of the solutions for the January Contest through a joint workshop with X-Camp!",
    date: dayjs("Feb 5, 2022 7:00:00 PM PST"),
    season: "2021-2022",
    url: "jan22",
    themeColor: themeColors.purple,
  },
  {
    photo: EGOI,
    title: "Experience & Tips from the USA EGOI Team",
    description:
      "Learn from the experience of the 2021 EGOI (European Girls' Olympiad in Informatics) team!",
    date: dayjs("Oct 17 2021 2:00:00 PM PDT"),
    url: "egoi",
    themeColor: themeColors.cyan,
  },
  {
    photo: USACO,
    title: "USACO for Absolute Beginners",
    description:
      "An introduction to USACO for new competitive programmers. No experience necessary!",
    date: dayjs("Aug 6 2021 4:00:00 PM PDT"),
    url: "beginner",
    themeColor: themeColors.blue,
  },
  {
    photo: USACO,
    title: "Intro to USACO Webinar",
    description:
      "Experienced USACO contestants explain everything you need to know about getting started with USACO.",
    date: dayjs("Nov 28 2020 5:00:00 PM PDT"),
    url: "intro-to-usaco",
    themeColor: themeColors.blue,
  },
]

workshops.sort((a, b) => -a.date.diff(b.date))
const now = dayjs()
console.log('date', workshops[0].date);
// calculate latest workshop
let latestWorkshop: Workshop
for (const workshop of workshops.slice().reverse()) {
  // include ongoing workshops as well
  if (workshop.date.add(1, "hour").isAfter(now)) {
    latestWorkshop = workshop
    break
  }
}
if (latestWorkshop! == null) {
  latestWorkshop = workshops.find(workshop => workshop.date.isBefore(now))!
}

const sections = [
  {
    title: "Upcoming Workshops",
    workshops: workshops.filter(
      workshop => workshop != latestWorkshop && workshop.date.isAfter(now)
    ),
  },
  {
    title: "Past Workshops",
    workshops: workshops.filter(
      workshop =>
        workshop != latestWorkshop && workshop.date.add(1, "hour").isBefore(now)
    ),
  },
]

export { latestWorkshop, sections }
