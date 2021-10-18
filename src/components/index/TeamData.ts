import {
  adham,
  akshar,
  albertz,
  amogha_pokkulandra,
  andrew,
  arpan,
  atharv,
  ben,
  benq,
  daniel,
  darren,
  david_li,
  davidz,
  dong,
  dustin,
  egor,
  harry,
  jay,
  jeffrey,
  maggie,
  melody,
  michael,
  mrinall,
  nathanc,
  nathang,
  nathanw,
  neo,
  nikhil,
  oscar,
  pranav,
  ramit,
  ryan,
  sofia,
  varun,
  vikas_thoutam,
  vivian,
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
  instagram?: string
}

const roles = {
  webdev: "Web Developer",
  contentAuthor: "Content Author",
  instructor: "Instructor",
  clubCurriculum: "Curriculum Developer",
}

const members: { [key: string]: Member } = {
  adham: {
    photo: adham,
    name: "Adham Ibrahim",
    titles: [roles.instructor],
    email: "adhamibrahim719@gmail.com",
  },
  akshar: {
    photo: akshar,
    name: "Akshar Yeccherla",
    titles: [roles.instructor],
  },
  albertz: {
    photo: albertz,
    name: "Albert Zhu",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  amogha_pokkulandra: {
    photo: amogha_pokkulandra,
    name: "Amogha Pokkulandra",
    titles: [roles.clubCurriculum],
  },
  andrew: {
    photo: andrew,
    name: "Andrew Wang",
    titles: ["Former Secretary"],
    github: "andrewwangva",
    codeforces: "a.wang",
    email: "andrewwangva.biz@gmail.com",
  },
  arpan: {
    photo: arpan,
    name: "Arpan Banerjee",
    titles: [roles.clubCurriculum, roles.contentAuthor],
  },
  atharv: {
    photo: atharv,
    name: "Atharv Jain",
    titles: [roles.instructor],
    email: "atharvjain05@gmail.com",
  },
  ben: {
    photo: ben,
    name: "Ben Dodge",
    titles: [roles.contentAuthor],
  },
  benq: {
    photo: benq,
    name: "Benjamin Qi",
    titles: ["Former Content Director", "2x IOI Winner"],
    github: "bqi343",
    codeforces: "Benq",
    email: "bqi343@gmail.com",
  },
  dong: {
    photo: dong,
    name: "Bing-Dong Liu",
    titles: [roles.instructor, "Content Manager"],
    github: "dongliu0426",
    codeforces: "lunchbox",
    email: "dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
  daniel: {
    photo: daniel,
    name: "Daniel Guan",
    titles: ["Director of Classes", "Finalist"],
  },
  darren: {
    photo: darren,
    name: "Darren Yao",
    titles: ["Director of Outreach"],
    github: "darren-yao",
    website: "http://darrenyao.com/",
    codeforces: "darren_yao",
    email: "darren.yao@gmail.com",
  },
  david_li: {
    photo: david_li,
    name: "David Li",
    titles: [roles.instructor],
  },
  davidz: {
    photo: davidz,
    name: "David Zhang",
    titles: [roles.instructor],
  },
  dustin: {
    photo: dustin,
    name: "Dustin Miao",
    titles: [roles.instructor, roles.contentAuthor],
    github: "dutinmeow",
    email: "dutin20.meow@gmail.com",
  },
  egor: {
    photo: egor,
    name: "Egor Gagushin",
    titles: [roles.instructor],
    codeforces: "eggag32",
    github: "Eggag",
  },
  harry: {
    photo: harry,
    name: "Harry Wang",
    titles: ["Project Manager"],
    github: "harrywangatx",
    website: "https://harrycodes.com",
    email: "qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  jay: {
    photo: jay,
    name: "Jay Fu",
    titles: ["Project Manager"],
    email: "jayfu03@gmail.com",
  },
  jeffrey: {
    photo: jeffrey,
    name: "Jeffrey Meng",
    titles: ["Director of Operations"],
  },
  maggie: {
    photo: maggie,
    name: "Maggie Liu",
    titles: ["Executive"],
    github: "maggie-j-liu",
    website: "https://maggieliu.dev",
    codeforces: "ml1234",
    email: "maggie.j.liu@gmail.com",
  },
  melody: {
    photo: melody,
    name: "Melody Yu",
    titles: ["Executive"],
    github: "cskitty",
    website: "https://melodyyu.com/",
    email: "ocmelodyyu@gmail.com",
    youtube: "https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ",
  },
  michael: {
    photo: michael,
    name: "Michael Cao",
    titles: ["Director of Clubs"],
    github: "caoash",
    codeforces: "caoash",
    email: "caoash@gmail.com",
  },
  mrinall: {
    photo: mrinall,
    name: "Mrinall Umasudhan",
    titles: [roles.webdev],
    github: "MrinallU",
  },
  nathanc: {
    photo: nathanc,
    name: "Nathan Chen",
    titles: ["Former Treasurer", "2x Finalist"],
    github: "nchn27",
    codeforces: "nchn27",
    email: "nchn27@gmail.com",
  },
  nathang: {
    photo: nathang,
    name: "Nathan Gong",
    titles: [roles.webdev, roles.contentAuthor],
    github: "nathangong",
  },
  nathanw: {
    photo: nathanw,
    name: "Nathan Wang",
    titles: ["CEO", "2x Finalist"],
    github: "thecodingwizard",
    website: "https://thecodingwizard.me/",
    codeforces: "thecodingwizard",
    email: "nathan.r.wang@gmail.com",
  },
  neo: {
    photo: neo,
    name: "Neo Wang",
    titles: ["Project Manager"],
    github: "nwatx",
    website: "https://nwatx.me/",
    email: "neowangatx@gmail.com",
  },
  nikhil: {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  oscar: {
    photo: oscar,
    name: "Oscar Rendón",
    titles: [roles.webdev, roles.clubCurriculum],
  },
  pranav: {
    photo: pranav,
    name: "Pranav Jadhav",
    titles: [roles.clubCurriculum],
    github: "pranavgithub1",
    email: "pra168109@gmail.com",
  },
  ramit: {
    photo: ramit,
    name: "Ramit Goyal",
    titles: [roles.instructor],
    email: "24ramitg@students.harker.org",
    instagram: "ramit_goyal24",
  },
  ryan: {
    photo: ryan,
    name: "Ryan Chou",
    titles: [roles.instructor, roles.contentAuthor],
    github: "ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  sofia: {
    photo: sofia,
    name: "Sofia Yang",
    titles: [roles.contentAuthor],
  },
  varun: {
    photo: varun,
    name: "Varun Ragunath",
    titles: [roles.instructor],
  },
  vikas_thoutam: {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    titles: [roles.instructor],
    email: "vikas.thoutam@gmail.com",
  },
  vivian: {
    photo: vivian,
    name: "Vivian Han",
    titles: [roles.instructor],
  },
}

const core: Member[] = [
  members.nathanw,
  members.maggie,
  members.melody,
  members.daniel,
  members.jeffrey,
  members.darren,
  members.michael,
  members.harry,
  members.neo,
  members.jay,
  members.dong,
]
const webdev: Member[] = [members.mrinall, members.nathang, members.oscar]
const instructors: Member[] = [
  members.albertz,
  members.nikhil,
  members.amogha_pokkulandra,
  members.ryan,
  members.vikas_thoutam,
  members.davidz,
  members.varun,
  members.atharv,
  members.dong,
  members.dustin,
  members.adham,
  members.egor,
  members.ramit,
  members.david_li,
  members.akshar,
  members.vivian,
]
const curriculum: Member[] = [
  members.nikhil,
  members.arpan,
  members.albertz,
  members.oscar,
  members.pranav,
]
const contentAuthors: Member[] = [
  members.nathang,
  members.ryan,
  members.dustin,
  members.sofia,
  members.ben,
]
const alumni: Member[] = [members.andrew, members.benq, members.nathanc]
const notPictured: Omit<Member, "photo">[] = [
  {
    name: "Kevin Sheng",
    titles: [roles.contentAuthor],
    github: "sanspapyrus683",
  },
  {
    name: "Shreyas Thumathy",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  {
    name: "Sathvik Chundru",
    titles: [roles.contentAuthor],
    github: "sathu-beep",
    codeforces: "sus",
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
