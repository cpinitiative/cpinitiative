import dayjs from "dayjs"
import EGOI from "../../images/egoi-hero.png"
import USACO from "../../images/usaco-guide-logo.png"
import XCampCPI from "../../images/x-camp_cpi.png"

export type Workshop = {
  photo: StaticImageData
  title: string
  description: string
  date: dayjs.Dayjs
  url: string // joincpi.org/workshops/{url}
  themeColor: string
}

const themeColors = {
  blue:
    "bg-blue-600 hover:bg-blue-500 focus:border-blue-700 focus:shadow-outline-blue",
  yellow:
    "bg-yellow-600 hover:bg-yellow-500 focus:border-yellow-700 focus:shadow-outline-yellow",
  cyan:
    "bg-cyan-600 hover:bg-cyan-500 focus:border-cyan-700 focus:shadow-outline-cyan",
  purple:
    "bg-purple-600 hover:bg-purple-500 focus:border-purple-700 focus:shadow-outline-purple",
}

const workshops: Workshop[] = [
  {
    photo: XCampCPI,
    title: "USACO February Contest Solutions",
    description:
      "Gain a better understanding of the solutions for the February Contest through a joint workshop with X-Camp!",
    date: dayjs("Mar 6, 2022 10:00:00 AM PST"),
    url: "usaco-february",
    themeColor: themeColors.purple,
  },
  {
    photo: XCampCPI,
    title: "USACO January Contest Solutions",
    description:
      "Gain an in-depth understanding of the solutions for the January Contest through a joint workshop with X-Camp!",
    date: dayjs("Feb 5, 2022 7:00:00 PM PST"),
    url: "usaco-january",
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
// calculate latest workshop
let latestWorkshop: Workshop
for (const workshop of workshops.slice().reverse()) {
  // include ongoing workshops as well
  if (workshop.date.add(1, "hour").isAfter(now)) {
    latestWorkshop = workshop
    break
  }
}
if (latestWorkshop == null) {
  latestWorkshop = workshops.find(workshop => workshop.date.isBefore(now))
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
