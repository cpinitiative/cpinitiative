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

const core: Member[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    titles: ["CEO", "2x Finalist"],
    github: "thecodingwizard",
    website: "https://thecodingwizard.me/",
    codeforces: "https://codeforces.com/profile/thecodingwizard",
    email: "nathan.r.wang@gmail.com",
  },
  {
    photo: maggie,
    name: "Maggie Liu",
    titles: ["Executive"],
    github: "maggie-j-liu",
    website: "https://maggieliu.dev",
    codeforces: "https://codeforces.com/profile/ml1234",
    email: "maggie.j.liu@gmail.com",
  },
  {
    photo: melody,
    name: "Melody Yu",
    titles: ["Executive"],
    github: "cskitty",
    website: "https://melodyyu.com/",
    email: "ocmelodyyu@gmail.com",
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
    github: "darren-yao",
    website: "http://darrenyao.com/",
    codeforces: "https://codeforces.com/profile/darren_yao",
    email: "darren.yao@gmail.com",
  },
  {
    photo: michael,
    name: "Michael Cao",
    titles: ["Director of Clubs"],
    github: "caoash",
    codeforces: "https://codeforces.com/profile/caoash",
    email: "caoash@gmail.com",
  },
  {
    photo: harry,
    name: "Harry Wang",
    titles: ["Project Manager"],
    github: "harrywangatx",
    website: "https://harrycodes.com",
    email: "qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  {
    photo: neo,
    name: "Neo Wang",
    titles: ["Project Manager"],
    github: "nwatx",
    website: "https://nwatx.me/",
    email: "neowangatx@gmail.com",
  },
  {
    photo: jay,
    name: "Jay Fu",
    titles: ["Project Manager"],
    email: "jayfu03@gmail.com",
  },
  {
    photo: dong,
    name: "Bing-Dong Liu",
    titles: ["Content Manager"],
    github: "dongliu0426",
    codeforces: "https://codeforces.com/profile/lunchbox",
    email: "dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
]
const webdev: Member[] = [
  {
    photo: mrinall,
    name: "Mrinall Umasudhan",
    titles: [roles.webdev],
    github: "MrinallU",
  },
  {
    photo: nathang,
    name: "Nathan Gong",
    titles: [roles.webdev, roles.contentAuthor],
    github: "nathangong",
  },
  {
    photo: oscar,
    name: "Oscar Rendón",
    titles: [roles.webdev, roles.clubCurriculum],
  },
]
const instructors: Member[] = [
  {
    photo: albertz,
    name: "Albert Zhu",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  {
    photo: amogha_pokkulandra,
    name: "Amogha Pokkulandra",
    titles: [roles.clubCurriculum],
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    titles: [roles.instructor, roles.contentAuthor],
    github: "ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    titles: [roles.instructor],
    email: "vikas.thoutam@gmail.com",
  },
  {
    photo: davidz,
    name: "David Zhang",
    titles: [roles.instructor],
  },
  {
    photo: varun,
    name: "Varun Ragunath",
    titles: [roles.instructor],
  },
  {
    photo: atharv,
    name: "Atharv Jain",
    titles: [roles.instructor],
    email: "atharvjain05@gmail.com",
  },
  {
    photo: dong,
    name: "Dong Liu",
    titles: [roles.instructor, roles.contentAuthor],
    email: "dongliu0426@gmail.com",
    github: "dongliu0426",
    codeforces: "lunchbox",
  },
  {
    photo: dustin,
    name: "Dustin Miao",
    titles: [roles.instructor, roles.contentAuthor],
    github: "dutinmeow",
    email: "dutin20.meow@gmail.com",
  },
  {
    photo: adham,
    name: "Adham Ibrahim",
    titles: [roles.instructor],
    email: "adhamibrahim719@gmail.com",
  },
  {
    photo: egor,
    name: "Egor Gagushin",
    titles: [roles.instructor],
    codeforces: "eggag32",
    github: "Eggag",
  },
  {
    photo: ramit,
    name: "Ramit Goyal",
    titles: [roles.instructor],
    email: "24ramitg@students.harker.org",
    instagram: "ramit_goyal24",
  },
  {
    photo: david_li,
    name: "David Li",
    titles: [roles.instructor],
  },
  {
    photo: akshar,
    name: "Akshar Yeccherla",
    titles: [roles.instructor],
  },
  {
    photo: vivian,
    name: "Vivian Han",
    titles: [roles.instructor],
  },
]
const curriculum: Member[] = [
  {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  {
    photo: arpan,
    name: "Arpan Banerjee",
    titles: [roles.clubCurriculum, roles.contentAuthor],
  },
  {
    photo: albertz,
    name: "Albert Zhu",
    titles: [roles.instructor, roles.clubCurriculum],
  },
  {
    photo: oscar,
    name: "Oscar Rendón",
    titles: [roles.webdev, roles.clubCurriculum],
  },
  {
    photo: pranav,
    name: "Pranav Jadhav",
    titles: [roles.clubCurriculum],
    github: "pranavgithub1",
    email: "pra168109@gmail.com",
  },
]
const contentAuthors: Member[] = [
  {
    photo: nathang,
    name: "Nathan Gong",
    titles: [roles.webdev, roles.contentAuthor],
    github: "nathangong",
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    titles: [roles.instructor, roles.contentAuthor],
    github: "ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  {
    photo: dustin,
    name: "Dustin Miao",
    titles: [roles.instructor, roles.contentAuthor],
    github: "dutinmeow",
    email: "dutin20.meow@gmail.com",
  },
  {
    photo: sofia,
    name: "Sofia Yang",
    titles: [roles.contentAuthor],
  },
  {
    photo: ben,
    name: "Ben Dodge",
    titles: [roles.contentAuthor],
  },
]
const alumni: Member[] = [
  {
    photo: andrew,
    name: "Andrew Wang",
    titles: ["Former Secretary"],
    github: "andrewwangva",
    codeforces: "https://codeforces.com/profile/a.wang",
    email: "andrewwangva.biz@gmail.com",
  },
  {
    photo: benq,
    name: "Benjamin Qi",
    titles: ["Former Content Director", "2x IOI Winner"],
    github: "bqi343",
    codeforces: "https://codeforces.com/profile/Benq",
    email: "bqi343@gmail.com",
  },
  {
    photo: nathanc,
    name: "Nathan Chen",
    titles: ["Former Treasurer", "2x Finalist"],
    github: "nchn27",
    codeforces: "https://codeforces.com/profile/nchn27",
    email: "nchn27@gmail.com",
  },
]
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
