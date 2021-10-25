import EGOI from '../../images/egoi-hero.png'
import USACO from '../../images/usaco-guide-logo.png'

export type Workshop = {
  photo: StaticImageData
  title: string,
  description: string,
  date: Date
  url: string  // joincpi.org/workshops/{url}
}

const workshops: Workshop[] = [
  {
    photo: EGOI,
    title: "Experience & Tips from the USA EGOI Team",
    description: "Learn from the experience of the 2021 EGOI (European Girls' Olympiad in Informatics) team!",
    date: new Date('Oct 17 2021 2:00:00 PM'),
    url: "/egoi"
  },
  {
    photo: USACO,
    title: "USACO for Absolute Beginners",
    description: "An introduction to USACO for new competitive programmers. No experience necessary!",
    date: new Date('Aug 6 2021 4:00:00 PM'),
    url: "/beginner"
  }
]

const sections = [
  {
    title: "Upcoming Workshops",
    workshops: workshops.filter(workshop => workshop.date > new Date()),
  },
  {
    title: "Past Workshops",
    workshops: workshops.filter(workshop => workshop.date <= (new Date())),
  },
]
export default sections
