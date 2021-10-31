import dayjs from 'dayjs'
import EGOI from '../../images/egoi-hero.png'
import USACO from '../../images/usaco-guide-logo.png'

export type Workshop = {
  photo: StaticImageData,
  title: string,
  description: string,
  date: dayjs.Dayjs,
  url: string,  // joincpi.org/workshops/{url}
  themeColor?: string, // tailwind color (e.g. blue, red, etc.), defaults to blue if undefined
}

const workshops: Workshop[] = [
  {
    photo: EGOI,
    title: "Experience & Tips from the USA EGOI Team",
    description: "Learn from the experience of the 2021 EGOI (European Girls' Olympiad in Informatics) team!",
    date: dayjs('Oct 17 2021 2:00:00 PM PDT'),
    url: "egoi",
    themeColor: "cyan",
  },
  {
    photo: USACO,
    title: "USACO for Absolute Beginners",
    description: "An introduction to USACO for new competitive programmers. No experience necessary!",
    date: dayjs('Aug 6 2021 4:00:00 PM PDT'),
    url: "beginner"
  },
  {
    photo: USACO,
    title: "Intro to USACO Webinar",
    description: "Experienced USACO contestants explain everything you need to know about getting started with USACO.",
    date: dayjs('Nov 28 2020 5:00:00 PM PDT'),
    url: "intro-to-usaco"
  },
]

workshops.sort((a, b) => -a.date.diff(b.date));
const now = dayjs();
// calculate latest workshop
let latestWorkshop: Workshop;
for (const workshop of workshops.slice().reverse()) {
  // include ongoing workshops as well
  if (workshop.date.add(1, 'hour').isAfter(now)) {
    latestWorkshop = workshop;
    break;
  }
}
if (latestWorkshop == null) {
  latestWorkshop = workshops.find(workshop => workshop.date.isBefore(now));
}

const sections = [
  {
    title: "Upcoming Workshops",
    workshops: workshops.filter(workshop => workshop != latestWorkshop && workshop.date.isAfter(now)),
  },
  {
    title: "Past Workshops",
    workshops: workshops.filter(workshop => workshop != latestWorkshop && workshop.date.add(1, 'hour').isBefore(now)),
  },
];

export { latestWorkshop, sections };
