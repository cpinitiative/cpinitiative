import {
  aadit,
  aarav,
  adham,
  aditya,
  akshar,
  albert_jiang,
  albertz,
  alex_chen,
  alex_wang,
  alice,
  amogha,
  amy_chang,
  ananth,
  andi,
  andrew,
  andrew_xu,
  arnan,
  arpan,
  arnav,
  atharv,
  ben,
  benq,
  chuyang,
  daniel,
  darren,
  david_li,
  davidz,
  dong,
  dustin,
  egor,
  eric,
  evan,
  faris,
  frank,
  harry,
  harsh_akunuri,
  ian,
  jason,
  jay,
  jeffrey,
  jeffrey_zhang,
  jesse,
  john,
  jpaulson,
  julie,
  justin_huang,
  maggie,
  max,
  melody,
  michael,
  mithil,
  mrinall,
  nathanc,
  nathang,
  nathanw,
  nathan_zhang,
  neo,
  nikhil,
  omar_ahmed,
  oscar,
  paul,
  peng_bai,
  tian,
  pranav,
  ramit,
  riley,
  rishabh,
  ryan,
  shikhar,
  siyong,
  sofia,
  stanley,
  trisha,
  varun,
  vidith,
  vikas_thoutam,
  vincent,
  vivian,
  yifan_ma,
  lokesh_pampatti,
  akshat,
  justin_ji,
  hassan,
  sathvik,
  satvika,
  avyan,
  ryan_fu,
  rahul_verma,
  fnu,
  aakash,
  tatha,
  omar,
  srijith,
  aarush,
  kinan,
  zein,
  audrey,
} from "./images"
import { StaticImageData } from "next/legacy/image"
type Socials =
  | "linkedin"
  | "youtube"
  | "github"
  | "codeforces"
  | "website"
  | "email"
  | "instagram"
  | "facebook"

type SocialsObject<T> = {
  [social in Socials]?: T
}
export type Member = SocialsObject<string> & {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  titles: string[]
}
export const socialLinks: {
  [social in Socials]: {
    icon: JSX.Element
    url?: (x: string) => string
  }
} = {
  linkedin: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1792 1792">
        <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
      </svg>
    ),
  },
  youtube: {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
        ></path>
      </svg>
    ),
  },
  github: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    url: (id: string) => `https://github.com/${id}`,
  },
  codeforces: {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
    url: (id: string) => `https://codeforces.com/profile/${id}`,
  },
  website: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    ),
  },

  email: {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    url: (email: string) => `mailto:${email}`,
  },
  instagram: {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
    url: (id: string) => `https://instagram.com/${id}`,
  },
  facebook: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    url: (id: string) => `https://github.com/${id}`,
  },
}

const roles = {
  webdev: "Web Developer",
  contentAuthor: "Content Author",
  liveInstructor: "Live Classes",
  videoInstructor: "Self-Study Classes",
  clubCurriculum: "Curriculum Developer",
  founder: "Founding Member",
  workshops: "Workshops",
  outreach: "Outreach",
}

const _members: { [key: string]: Member } = {
  aadit: {
    photo: aadit,
    name: "Aadit Ambadkar",
    titles: [roles.liveInstructor],
  },
  aakash: {
    photo: aakash,
    name: "Aakash Gokhale",
    titles: ["Director of Contests"],
    codeforces: "skeyes",
  },
  aarav: {
    photo: aarav,
    name: "Aarav Sethi",
    titles: [roles.webdev],
    github: "asynchronousai",
  },
  aarush: {
    photo: aarush,
    name: "Aarush Kute",
    titles: [roles.webdev],
  },
  adham: {
    photo: adham,
    name: "Adham Ibrahim",
    titles: [roles.liveInstructor],
    email: "adhamibrahim719@gmail.com",
    github: "adham-ibrahim7",
  },
  aditya: {
    photo: aditya,
    name: "Aditya Gupta",
    titles: [roles.contentAuthor],
    website: "https://thepuzzlr.com/",
    youtube: "https://www.youtube.com/c/ThePuzzlr",
  },
  akshar: {
    photo: akshar,
    name: "Akshar Yeccherla",
    titles: [roles.videoInstructor],
  },
  akshat: {
    photo: akshat,
    name: "Akshat Singhania",
    titles: [roles.webdev],
    youtube: "https://www.youtube.com/@AkshatSinghania",
    github: "akshatsinghania",
    codeforces: "aksht",
    email: "singhaniaakshat1@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshatsinghania",
    instagram: "https://www.instagram.com/akshat_singhania_",
    website: "https://akshatsinghaniaweb.web.app/",
  },
  albert_jiang: {
    photo: albert_jiang,
    name: "Albert Jiang",
    titles: [roles.videoInstructor],
  },
  albertz: {
    photo: albertz,
    name: "Albert Zhu",
    titles: [roles.videoInstructor, roles.clubCurriculum],
  },
  alex: {
    photo: alex_chen,
    name: "Alex Chen",
    titles: [roles.liveInstructor],
    github: "alexwenchen",
    codeforces: "Alx",
  },
  alex_wang: {
    photo: alex_wang,
    name: "Alex Wang",
    titles: ["Director of Clubs", roles.liveInstructor],
  },
  alice: {
    photo: alice,
    name: "Alice Li",
    titles: [roles.clubCurriculum],
  },
  amogha: {
    photo: amogha,
    name: "Amogha Pokkulandra",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "amogha.pokkulandra@gmail.com",
    github: "x3n0coder",
  },
  amy: {
    photo: amy_chang,
    name: "Amy Chang",
    titles: [
      "Director of Classes",
      roles.liveInstructor,
      roles.videoInstructor,
    ],
  },
  ananth: {
    photo: ananth,
    name: "Ananth Kashyap",
    titles: [roles.webdev, roles.contentAuthor],
    github: "AAkashyap1",
  },
  andi: {
    photo: andi,
    name: "Andi Qu",
    titles: [roles.founder],
    email: "andi@andiqu.com",
    github: "dolphingarlic",
    codeforces: "dolphingarlic",
    website: "https://andiqu.com/",
  },
  andrew: {
    photo: andrew,
    name: "Andrew Wang",
    titles: [roles.founder, "Former Secretary"],
    github: "andrewwangva",
    codeforces: "a.wang",
    email: "andrewwangva.biz@gmail.com",
  },
  andrew_xu: {
    photo: andrew_xu,
    name: "Andrew Xu",
    titles: [roles.liveInstructor],
  },
  arnan: {
    photo: arnan,
    name: "Arnan Bawa",
    titles: [roles.liveInstructor],
  },
  arnav: {
    photo: arnav,
    name: "Arnav Adhikari",
    titles: [roles.videoInstructor],
    email: "realarnavadhikari24@gmail.com",
    github: "LitMSCTBB",
    website: "https://computercrafter.netlify.app/",
  },
  arpan: {
    photo: arpan,
    name: "Arpan Banerjee",
    github: "ar492",
    titles: [roles.clubCurriculum, roles.contentAuthor, roles.videoInstructor],
  },
  atharv: {
    photo: atharv,
    name: "Atharv Jain",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "atharvjain05@gmail.com",
  },
  audrey: {
    photo: audrey,
    name: "Audrey Wang",
    titles: [roles.outreach, roles.liveInstructor],
    email: "audreywang2027@gmail.com",
  },
  avyan: {
    photo: avyan,
    name: "Avyan Gupta",
    titles: [roles.liveInstructor],
  },
  ben: {
    photo: ben,
    name: "Ben Dodge",
    github: "Navigator365",
    titles: [roles.contentAuthor],
  },
  benq: {
    photo: benq,
    name: "Benjamin Qi",
    titles: [roles.founder, "Board", "Content Director", "2x IOI Winner"],
    github: "bqi343",
    codeforces: "Benq",
    email: "bqi343@gmail.com",
  },
  chuyang: {
    photo: chuyang,
    name: "Chuyang Wang",
    titles: [roles.contentAuthor],
    email: "mail@chuyang-wang.de",
    github: "ChuangSheep",
  },
  daniel: {
    photo: daniel,
    name: "Daniel Guan",
    github: "DGuan64",
    titles: [roles.founder, "Director of Classes", "Finalist"],
  },
  darren: {
    photo: darren,
    name: "Darren Yao",
    titles: [roles.founder, "Board"],
    github: "darren-yao",
    website: "http://darrenyao.com/",
    codeforces: "darren_yao",
    email: "darren.yao@gmail.com",
  },
  david_li: {
    photo: david_li,
    name: "David Li",
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  davidz: {
    photo: davidz,
    name: "David Zhang",
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  dong: {
    photo: dong,
    name: "Bing-Dong Liu",
    titles: ["Director of USACO Guide", roles.liveInstructor],
    github: "dongliu0426",
    codeforces: "lunchbox",
    email: "dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
  dustin: {
    photo: dustin,
    name: "Dustin Miao",
    titles: [roles.liveInstructor, roles.contentAuthor],
    github: "dutinmeow",
    email: "dutin20.meow@gmail.com",
    codeforces: "dutinmeow",
  },
  egor: {
    photo: egor,
    name: "Egor Gagushin",
    titles: [roles.videoInstructor],
    codeforces: "eggag32",
    github: "Eggag",
  },
  eric: {
    photo: eric,
    name: "Eric Xu",
    titles: [roles.webdev],
    github: "cirex-web",
    codeforces: "cotester",
    email: "erxu@ctemc.org",
  },
  evan: {
    photo: evan,
    name: "Evan Zhao",
    titles: ["President", "Director of Classes", roles.liveInstructor],
    email: "evanzhao@joincpi.org",
  },
  faris: {
    photo: faris,
    name: "Faris Raza",
    titles: [roles.clubCurriculum],
  },
  fnu: {
    photo: fnu,
    name: "Fnu Prince",
    titles: ["Director of Classes", roles.liveInstructor],
  },
  frank: {
    photo: frank,
    name: "Frank Xiao",
    titles: [roles.liveInstructor],
    github: "frankyaoxiao",
    email: "frankyaoxiao@gmail.com",
  },
  harry: {
    photo: harry,
    name: "Harry Wang",
    titles: ["Director of USACO Guide", roles.videoInstructor],
    github: "harrywangatx",
    website: "https://harrycodes.com",
    email: "qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  harsh_akunuri: {
    photo: harsh_akunuri,
    name: "Harsh Akunuri",
    titles: [roles.clubCurriculum],
  },
  hassan: {
    photo: hassan,
    name: "Hassan	Ramadan",
    titles: [roles.webdev],
  },
  ian: {
    photo: ian,
    name: "Ian Zhang",
    titles: [roles.liveInstructor],
    github: "izhang05",
    codeforces: "izhang",
  },
  jason: {
    photo: jason,
    name: "Jason Antwi-Appah",
    titles: [roles.webdev],
    github: "jasonappah",
    email: "hey@jasonaa.me",
    website: "https://jasonaa.me",
  },
  jay: {
    photo: jay,
    name: "Jay Fu",
    titles: [
      "Director of Classes",
      roles.liveInstructor,
      roles.videoInstructor,
    ],
    email: "jayfu03@gmail.com",
  },
  jeffrey: {
    photo: jeffrey,
    name: "Jeffrey Meng",
    titles: ["Director of Operations", roles.videoInstructor],
    github: "jeffreymeng",
    website: "https://jeffkmeng.com",
  },
  jeffrey_zhang: {
    photo: jeffrey_zhang,
    name: "Jeffrey Zhang",
    titles: [roles.contentAuthor],
    github: "RedBlueBird",
    email: "jiefu.zhang1226@gmail.com",
  },
  jesse: {
    photo: jesse,
    name: "Jesse Choe",
    titles: [
      "Director of Classes",
      "Director of USACO Guide",
      roles.contentAuthor,
      roles.liveInstructor,
    ],
    github: "jessechoe10",
    email: "jessechoe10@gmail.com",
    codeforces: "YoRepi7",
  },
  john: {
    photo: john,
    name: "John Tian",
    titles: [roles.clubCurriculum],
  },
  jonathan: {
    photo: jpaulson,
    name: "Jonathan Paulson",
    github: "jonathanpaulson",
    titles: [roles.videoInstructor],
  },
  julie: {
    photo: julie,
    name: "Juheon Rhee",
    titles: [roles.contentAuthor, roles.liveInstructor],
    website: "https://juheonrhee.com",
    github: "jjliewie",
  },
  justin_ji: {
    photo: justin_ji,
    name: "Justin Ji",
    titles: [roles.contentAuthor],
    codeforces: "eysbutno",
  },
  justin_huang: {
    photo: justin_huang,
    name: "Justin Huang",
    titles: ["Director of Software", roles.webdev],
    website: "https://jh316.me",
    github: "mjh316",
  },
  kinan: {
    photo: kinan,
    name: "Kinan Saad",
    titles: [roles.liveInstructor],
    website: "https://icpc.global/ICPCID/W7BTHQ4RQ1AW",
    codeforces: "USACOW",
  },
  maggie: {
    photo: maggie,
    name: "Maggie Liu",
    titles: ["Board", roles.webdev, roles.videoInstructor],
    github: "maggie-j-liu",
    website: "https://maggieliu.dev",
    codeforces: "ml1234",
    email: "maggie.j.liu@gmail.com",
  },
  max: {
    photo: max,
    name: "Max Yang",
    titles: [roles.workshops, roles.liveInstructor],
  },
  melody: {
    photo: melody,
    name: "Melody Yu",
    titles: [
      "President",
      "Director of Outreach",
      roles.videoInstructor,
      roles.workshops,
    ],
    github: "cskitty",
    website: "https://melodyyu.com/",
    email: "ocmelodyyu@gmail.com",
    youtube: "https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ",
  },
  michael: {
    photo: michael,
    name: "Michael Cao",
    titles: [roles.founder, "Board"],
    github: "caoash",
    codeforces: "caoash",
    email: "caoash@gmail.com",
  },
  mithil: {
    photo: mithil,
    name: "Mithil Srungarapu",
    titles: [roles.webdev],
    linkedin: "https://www.linkedin.com/in/srungarapumithil/",
    email: "mithilsmail@gmail.com",
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
    titles: [roles.founder, "Former Treasurer", "2x Finalist"],
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
    titles: [
      roles.founder,
      "Board",
      "3x Finalist",
      roles.webdev,
      roles.videoInstructor,
    ],
    github: "thecodingwizard",
    website: "https://thecodingwizard.me/",
    codeforces: "thecodingwizard",
    email: "nathan.r.wang@gmail.com",
  },
  nathan_zhang: {
    photo: nathan_zhang,
    name: "Nathan Zhang",
    titles: [roles.clubCurriculum],
  },
  neo: {
    photo: neo,
    name: "Neo Wang",
    titles: ["Director of USACO Guide", roles.videoInstructor, roles.webdev],
    github: "nwatx",
    website: "https://nwatx.me/",
    email: "neowangatx@gmail.com",
  },
  nikhil: {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    titles: [roles.liveInstructor, roles.videoInstructor, roles.clubCurriculum],
  },
  omar: {
    photo: omar,
    name: "Omar Elbayoumi",
    titles: [roles.clubCurriculum],
  },
  omar_ahmed: {
    photo: omar_ahmed,
    name: "Omar Ahmed",
    titles: [roles.clubCurriculum],
  },
  oscar: {
    photo: oscar,
    name: "Oscar Rendón",
    github: "orendon",
    titles: [roles.clubCurriculum],
  },
  paul: {
    photo: paul,
    name: "Paul Chen",
    titles: [roles.contentAuthor],
    codeforces: "876pol",
    github: "876pol",
  },
  peng: {
    photo: peng_bai,
    name: "Peng Bai",
    titles: [roles.contentAuthor, roles.liveInstructor],
    codeforces: "HaccerKat",
    github: "HaccerKat",
  },
  tian: {
    photo: tian,
    name: "Tianqin Meng",
    titles: [roles.contentAuthor, roles.webdev],
    github: "tqmsh",
  },
  pranav: {
    photo: pranav,
    name: "Pranav Jadhav",
    titles: ["Director of Clubs", roles.clubCurriculum],
    github: "pranavgithub1",
    email: "pra168109@gmail.com",
  },
  rahul: {
    photo: rahul_verma,
    name: "Rahul Verma",
    titles: [roles.liveInstructor, "Lead Bronze Instructor"],
  },
  ramit: {
    photo: ramit,
    name: "Ramit Goyal",
    titles: [roles.videoInstructor],
    email: "24ramitg@students.harker.org",
    instagram: "ramit_goyal24",
  },
  riley: {
    photo: riley,
    name: "Riley Bonner",
    titles: [roles.clubCurriculum],
    linkedin: "https://www.linkedin.com/in/riley-bonner-6b8726213/",
  },
  rishabh: {
    photo: rishabh,
    name: "Rishabh Agarwal",
    titles: [roles.webdev],
    github: "shaubby",
    email: "agar5333@gmail.com",
  },
  ryan: {
    photo: ryan,
    name: "Ryan Chou",
    titles: [
      "Director of USACO Guide",
      roles.liveInstructor,
      roles.videoInstructor,
      roles.contentAuthor,
      roles.workshops,
    ],
    github: "ryanchou-dev",
    website: "https://www.ryanchou.dev/",
  },
  ryan_fu: {
    photo: ryan_fu,
    name: "Ryan Fu",
    titles: ["Director of Silver Classes", roles.liveInstructor],
  },
  sathvik: {
    name: "Sathvik Chundru",
    photo: sathvik,
    titles: [roles.contentAuthor],
    github: "sathu-beep",
    codeforces: "sus",
  },
  satvika: {
    name: "Satvika Sridhar",
    photo: satvika,
    titles: [roles.liveInstructor],
  },
  shikhar: {
    photo: shikhar,
    name: "Shikhar Ahuja",
    titles: [roles.liveInstructor],
    email: "ahujashikhar314@gmail.com",
  },
  siyong: {
    photo: siyong,
    name: "Siyong Huang",
    titles: [roles.founder],
    github: "frodakcin",
    codeforces: "frodakcin",
  },
  sofia: {
    photo: sofia,
    name: "Sofia Yang",
    github: "TruaShamu",
    titles: [roles.contentAuthor],
  },
  srijith: {
    photo: srijith,
    name: "Srijith Chinthalapudi",
    titles: [
      roles.liveInstructor,
      roles.videoInstructor,
      "Director of Self-Study Classes",
    ],
  },
  stanley: {
    photo: stanley,
    name: "Stanley Zhao",
    github: "zhao-stanley",
    titles: [roles.webdev],
    email: "stanleyhzhao@gmail.com",
    website: "https://szhao.dev/",
  },
  tatha: {
    photo: tatha,
    name: "Tatha Pandey",
    titles: [roles.liveInstructor],
  },
  trisha: {
    photo: trisha,
    name: "Trisha Sabadra",
    titles: [
      "Director of Classes",
      "Director of Bronze Classes",
      roles.liveInstructor,
    ],
  },
  varun: {
    photo: varun,
    name: "Varun Ragunath",
    titles: [
      "Director of Classes",
      roles.liveInstructor,
      roles.videoInstructor,
    ],
  },
  vidith: {
    photo: vidith,
    name: "Vidith Madhu",
    titles: [roles.liveInstructor],
  },
  vikas_thoutam: {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: "vikas.thoutam@gmail.com",
  },
  vincent: {
    photo: vincent,
    name: "Vincent You",
    titles: ["Director of Software", roles.webdev, roles.clubCurriculum],
    github: "vinceyou1",
    linkedin: "https://www.linkedin.com/in/vincent-you-3211a327a/",
  },
  vivian: {
    photo: vivian,
    name: "Vivian Han",
    github: "vivianhan404",
    titles: [roles.videoInstructor],
  },
  yifan: {
    photo: yifan_ma,
    name: "Yifan Ma",
    titles: [roles.videoInstructor],
  },
  zein: {
    photo: zein,
    name: "Zein Alabdeen Zammar",
    titles: [roles.liveInstructor],
  },
  lokesh: {
    photo: lokesh_pampatti,
    name: "Lokesh Pampatti",
    titles: [roles.clubCurriculum],
  },
}

// TODO: do something with this section
const notPictured: Omit<Member, "photo">[] = [
  {
    name: "Chongtian Ma",
    titles: [roles.contentAuthor, roles.workshops],
  },
  {
    name: "Dylan Karpf",
    titles: [roles.videoInstructor],
  },
  {
    name: "Kevin Sheng",
    titles: ["Director of USACO Guide", roles.contentAuthor],
    github: "sanspapyrus683",
  },
  {
    name: "Shreyas Thumathy",
    titles: [roles.liveInstructor, roles.clubCurriculum],
    github: "therealshreyas",
  },
]

const board: Member[] = [
  _members.benq,
  _members.nathanw,
  _members.darren,
  _members.michael,
  _members.daniel,
  _members.andi,
  _members.andrew,
  _members.nathanc,
  _members.siyong,
  _members.evan,
  _members.maggie,
]

const currentMembers: Member[] = [
  // board
  _members.nathanw,
  _members.benq,

  _members.melody,

  // usaco guide
  _members.dong,
  _members.ryan,
  _members.tian,
  _members.peng,
  _members.justin_ji,

  // classes
  _members.trisha,
  _members.fnu,
  _members.ryan_fu,
  _members.frank,
  _members.andrew_xu,
  _members.max,
  _members.avyan,
  _members.satvika,
  _members.rahul,
  _members.tatha,
  _members.srijith,
  _members.kinan,
  _members.zein,

  // video instructors
  _members.albert_jiang,

  // webdev
  _members.vincent,
  _members.eric,
  _members.rishabh,
  _members.akshat,
  _members.aarav,
  _members.hassan,
  _members.aarush,
  _members.audrey,

  // clubs n stuff
  _members.alex_wang,
  _members.nathan_zhang,
  _members.faris,
  _members.omar_ahmed,
  _members.lokesh,
  _members.harsh_akunuri,
  _members.omar,
  _members.alice,

  _members.aakash,
]
const formerMembers: Member[] = [
  _members.aditya,
  _members.nikhil,
  _members.dustin,
  _members.jesse,
  _members.stanley,
  _members.jeffrey_zhang,
  _members.riley,
  _members.chuyang,
  _members.paul,
  _members.aadit,
  _members.justin_huang,
  _members.neo,
  _members.jay,
  _members.amogha,
  _members.albertz,
  _members.vikas_thoutam,
  _members.akshar,
  _members.nathang,
  _members.vivian,
  _members.mrinall,
  _members.jeffrey,
  _members.jason,
  _members.arpan,
  _members.jonathan,
  _members.atharv,
  _members.david_li,
  _members.davidz,
  _members.adham,
  _members.alex,
  _members.arnan,
  _members.arnav,
  _members.ben,
  _members.mithil,
  _members.oscar,
  _members.shikhar,
  _members.sofia,
  _members.vidith,
  _members.yifan,
  _members.john,
  _members.ian,
  _members.pranav,
  _members.julie,
  _members.amy,
  _members.harry,
  _members.ananth,
  _members.varun,
]

function sortPeople(people: Member[]) {
  return people.sort((a, b) => {
    if (a.titles.length === b.titles.length) {
      return a.name.localeCompare(b.name)
    }
    return b.titles.length - a.titles.length
  })
}

function sortByHierarchy(people: Member[]) {
  const definedHierachy = [
    "Board",
    "President",
    "Director of",
    "Founding Member",
  ]
  return people
    .map(a => {
      for (let i = 0; i < definedHierachy.length; ++i) {
        if (a.titles.some(x => x.startsWith(definedHierachy[i]))) {
          return {
            ...a,
            rank: i,
          }
        }
      }
      const newPerson = {
        ...a,
        rank: definedHierachy.length,
      }

      console.log(a.name, newPerson.rank)

      return newPerson
    })
    .sort((a, b) => {
      if (a.rank === b.rank) {
        return a.name.localeCompare(b.name)
      }
      return a.rank - b.rank
    })
}

export const members = {
  board: sortByHierarchy(board),
  activePeople: sortByHierarchy(currentMembers),
  formerMembers: sortPeople(formerMembers),
}
