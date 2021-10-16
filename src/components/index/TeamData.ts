import {
  nathanw,
  maggie,
  melody,
  daniel,
  jeffrey,
  darren,
  michael,
  harry,
  neo,
  jay,
  dong,
  ananth,
  mrinall,
  nathang,
  oscar,
  albertz,
  nikhil,
  amogha_pokkulandra,
  ryan,
  vikas_thoutam,
  davidz,
  varun,
  atharv,
  dustin,
  adham,
  arpan,
  pranav,
  vivian,
  sofia,
  ben,
  andrew,
  benq,
  nathanc,
  kevin,
  blank,
  sathvik,
} from "../index/images"
export type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  titles: string[]
  github?: string
  twitter?: string
  linkedin?: string
  website?: string
  codeforces?: string
  email?: string
  youtube?: string
}
const core: Member[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    titles: ["CEO", "2x Finalist"],
    github: "https://github.com/thecodingwizard",
    website: "https://thecodingwizard.me/",
    codeforces: "https://codeforces.com/profile/thecodingwizard",
    email: "mailto:nathan.r.wang@gmail.com",
  },
  {
    photo: maggie,
    name: "Maggie Liu",
    titles: ["Executive"],
    github: "https://github.com/maggie-j-liu",
    website: "https://maggieliu.dev",
    codeforces: "https://codeforces.com/profile/ml1234",
    email: "mailto:maggie.j.liu@gmail.com",
  },
  {
    photo: melody,
    name: "Melody Yu",
    titles: ["Executive"],
    github: "https://github.com/cskitty",
    website: "https://melodyyu.com/",
    email: "mailto:ocmelodyyu@gmail.com",
    youtube: "https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ",
  },
  {
    photo: daniel,
    name: "Daniel Guan",
    titles: ["Director of Classes", "Finalist"],
  },
  {
    photo: jeffrey,
    name: "Jeffrey Meng",
    titles: ["Director of Operations"],
  },
  {
    photo: darren,
    name: "Darren Yao",
    titles: ["Director of Outreach"],
    github: "https://github.com/darren-yao",
    website: "http://darrenyao.com/",
    codeforces: "https://codeforces.com/profile/darren_yao",
    email: "mailto:darren.yao@gmail.com",
  },
  {
    photo: michael,
    name: "Michael Cao",
    titles: ["Director of Clubs"],
    github: "https://github.com/caoash",
    codeforces: "https://codeforces.com/profile/caoash",
    email: "mailto:caoash@gmail.com",
  },
  {
    photo: harry,
    name: "Harry Wang",
    titles: ["Project Manager"],
    github: "https://github.com/harrywangatx",
    website: "https://harrycodes.com",
    email: "mailto:qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  {
    photo: neo,
    name: "Neo Wang",
    titles: ["Project Manager"],
    github: "https://github.com/nwatx",
    website: "https://nwatx.me/",
    email: "mailto:neowangatx@gmail.com",
  },
  {
    photo: jay,
    name: "Jay Fu",
    titles: ["Project Manager"],
    email: "mailto:jayfu03@gmail.com",
  },
  {
    photo: dong,
    name: "Bing-Dong Liu",
    titles: ["Content Manager"],
    github: "https://github.com/dongliu0426",
    codeforces: "https://codeforces.com/profile/lunchbox",
    email: "mailto:dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
]
const webdev: Member[] = [
  {
    photo: ananth,
    name: "Ananth Kashyap",
    titles: ["Web Developer", "Content Author"],
    github: "https://github.com/AAkashyap1",
    linkedin: "https://www.linkedin.com/in/ananth-kashyap-88b996209/",
    email: "mailto:ananthkashyap4@gmail.com",
  },
  {
    photo: mrinall,
    name: "Mrinall Umasudhan",
    titles: ["Web Developer"],
    github: "https://github.com/MrinallU",
  },
  {
    photo: nathang,
    name: "Nathan Gong",
    titles: ["Web Developer", "Content Author"],
  },
  {
    photo: oscar,
    name: "Oscar Rendón",
    titles: ["Web Developer", "Curriculum Developer"],
  },
]
const instructors: Member[] = [
  {
    photo: albertz,
    name: "Albert Zhu",
    titles: ["Instructor", "Curriculum Developer"],
  },
  {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: ["Instructor", "Curriculum Developer"],
  },
  {
    photo: amogha_pokkulandra,
    name: "Amogha Pokkulandra",
    titles: ["Curriculum Developer"],
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    titles: ["Instructor"],
    email: "mailto:vikas.thoutam@gmail.com",
  },
  {
    photo: davidz,
    name: "David Zhang",
    titles: ["Instructor"],
  },
  {
    photo: varun,
    name: "Varun Ragunath",
    titles: ["Instructor"],
  },
  {
    photo: atharv,
    name: "Atharv Jain",
    titles: ["Instructor"],
    email: "mailto:atharvjain05@gmail.com",
  },
  {
    photo: dustin,
    name: "Dustin Miao",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/dutinmeow",
    email: "mailto:dutin20.meow@gmail.com",
  },
  {
    photo: adham,
    name: "Adham Ibrahim",
    titles: ["Instructor"],
    email: "mailto:adhamibrahim719@gmail.com",
  },
]
const curriculum: Member[] = [
  {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: ["Instructor", "Curriculum Developer"],
  },
  {
    photo: arpan,
    name: "Arpan Banerjee",
    titles: ["Curriculum Developer"],
  },
  {
    photo: albertz,
    name: "Albert Zhu",
    titles: ["Instructor", "Curriculum Developer"],
  },
  {
    photo: oscar,
    name: "Oscar Rendón",
    titles: ["Web Developer", "Curriculum Developer"],
  },
  {
    photo: pranav,
    name: "Pranav Jadhav",
    titles: ["Curriculum Developer"],
    github: "https://github.com/pranavgithub1",
    email: "mailto:pra168109@gmail.com",
  },
]
const contentAuthors: Member[] = [
  {
    photo: nathang,
    name: "Nathan Gong",
    titles: ["Web Developer", "Content Author"],
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  {
    photo: vivian,
    name: "Vivian Han",
    titles: ["Content Author"],
    twitter: "heheh",
    website: "heheh",
  },
  {
    photo: ananth,
    name: "Ananth Kashyap",
    titles: ["Web Developer", "Content Author"],
    github: "https://github.com/AAkashyap1",
    linkedin: "https://www.linkedin.com/in/ananth-kashyap-88b996209/",
    email: "mailto:ananthkashyap4@gmail.com",
  },
  {
    photo: dustin,
    name: "Dustin Miao",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/dutinmeow",
    email: "mailto:dutin20.meow@gmail.com",
  },
  {
    photo: sofia,
    name: "Sofia Yang",
    titles: ["Content Author"],
  },
  {
    photo: ben,
    name: "Ben Dodge",
    titles: ["Content Author"],
  },
]
const alumni: Member[] = [
  {
    photo: andrew,
    name: "Andrew Wang",
    titles: ["Former Secretary"],
    github: "https://github.com/andrewwangva",
    codeforces: "https://codeforces.com/profile/a.wang",
    email: "mailto:andrewwangva.biz@gmail.com",
  },
  {
    photo: benq,
    name: "Benjamin Qi",
    titles: ["Former Content Director", "2x IOI Winner"],
    github: "https://github.com/bqi343",
    codeforces: "https://codeforces.com/profile/Benq",
    email: "mailto:bqi343@gmail.com",
  },
  {
    photo: nathanc,
    name: "Nathan Chen",
    titles: ["Former Treasurer", "2x Finalist"],
    github: "https://github.com/nchn27",
    codeforces: "https://codeforces.com/profile/nchn27",
    email: "mailto:nchn27@gmail.com",
  },
]
const notPictured: Member[] = [
  {
    photo: kevin,
    name: "Kevin Sheng",
    titles: ["Content Author"],
    github: "https://github.com/sanspapyrus683",
  },
  {
    photo: blank,
    name: "Shreyas Thumathy",
    titles: ["Instructor", "Curriculum Developer"],
  },
  {
    photo: sathvik,
    name: "Sathvik Chundru",
    titles: ["Content Author"],
    github: "https://github.com/sathu-beep",
    codeforces: "https://codeforces.com/profile/sus",
  },
]
const sections = [
  {
    title: "Core Team",
    members: core,
  },
  {
    title: "Web Developers",
    members: webdev,
  },
  {
    title: "Instructors",
    members: instructors,
  },
  {
    title: "Content Authors",
    members: contentAuthors,
  },
  {
    title: "Curriculum Developers",
    members: curriculum,
  },
  {
    title: "Alumni",
    members: alumni,
  },
]
export default sections
