import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

type Member = {
  photo: string // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  titles: [string, string]
  github: string
  twitter: string
  linkedin: string
  website: string
  codeforces: string
  email: string
  youtube: string
}

const socialLinks = {
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
  },
  linkedin: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1792 1792">
        <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
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
  },
  codeforces: {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  website: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
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
    )
  },
}

const core: Member[] = [
  {
    photo: "nathanw",
    name: "Nathan Wang",
    titles: ["CEO", "2x Finalist"],
    github: "https://github.com/thecodingwizard",
    twitter: "",
    linkedin: "",
    website: "https://thecodingwizard.me/",
    codeforces: "https://codeforces.com/profile/thecodingwizard",
    email: "mailto:nathan.r.wang@gmail.com",
    youtube: "",
  },
  {
    photo: "maggie",
    name: "Maggie Liu",
    titles: ["Executive", ""],
    github: "https://github.com/maggie-j-liu",
    twitter: "",
    linkedin: "",
    website: "https://maggieliu.dev",
    codeforces: "https://codeforces.com/profile/ml1234",
    email: "mailto:maggie.j.liu@gmail.com",
    youtube: "",
  },
  {
    photo: "melody",
    name: "Melody Yu",
    titles: ["Executive", ""],
    github: "https://github.com/cskitty",
    twitter: "",
    linkedin: "",
    website: "https://melodyyu.com/",
    codeforces: "",
    email: "mailto:ocmelodyyu@gmail.com",
    youtube: "https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ",
  },
  {
    photo: "daniel",
    name: "Daniel Guan",
    titles: ["Director of Classes", "Finalist"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "jeffrey",
    name: "Jeffrey Meng",
    titles: ["Director of Operations", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "darren",
    name: "Darren Yao",
    titles: ["Director of Outreach", ""],
    github: "https://github.com/darren-yao",
    twitter: "",
    linkedin: "",
    website: "http://darrenyao.com/",
    codeforces: "https://codeforces.com/profile/darren_yao",
    email: "mailto:darren.yao@gmail.com",
    youtube: "",
  },
  {
    photo: "michael",
    name: "Michael Cao",
    titles: ["Director of Clubs", ""],
    github: "https://github.com/caoash",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/caoash",
    email: "mailto:caoash@gmail.com",
    youtube: "",
  },
  {
    photo: "Harry",
    name: "Harry Wang",
    titles: ["Project Manager", ""],
    github: "https://github.com/harrywangatx",
    twitter: "",
    linkedin: "",
    website: "https://harrycodes.com",
    codeforces: "",
    email: "mailto:qiwang@joincpi.org",
    youtube: "https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw",
  },
  {
    photo: "neo",
    name: "Neo Wang",
    titles: ["Project Manager", ""],
    github: "https://github.com/nwatx",
    twitter: "",
    linkedin: "",
    website: "https://nwatx.me/",
    codeforces: "",
    email: "mailto:neowangatx@gmail.com",
    youtube: "",
  },
  {
    photo: "Jay",
    name: "Jay Fu",
    titles: ["Project Manager", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:jayfu03@gmail.com",
    youtube: "",
  },
  {
    photo: "Dong",
    name: "Bing-Dong Liu",
    titles: ["Content Manager", ""],
    github: "https://github.com/dongliu0426",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/lunchbox",
    email: "mailto:dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
]

const webdev: Member[] = [
  {
    photo: "ananth",
    name: "Ananth Kashyap",
    titles: ["Web Developer", "Content Author"],
    github: "https://github.com/AAkashyap1",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ananth-kashyap-88b996209/",
    website: "",
    codeforces: "",
    email: "mailto:ananthkashyap4@gmail.com",
    youtube: "",
  },
  {
    photo: "mrinall",
    name: "Mrinall Umasudhan",
    titles: ["Web Developer", ""],
    github: "https://github.com/MrinallU",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "nathang",
    name: "Nathan Gong",
    titles: ["Web Developer", "Content Author"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "oscar",
    name: "Oscar Rendón",
    titles: ["Web Developer", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
]

const instructors: Member[] = [
  {
    photo: "albertz",
    name: "Albert Zhu",
    titles: ["Instructor", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "nikhil",
    name: "Nikhil Chatterjee",
    titles: ["Instructor", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "amogha_pokkulandra",
    name: "Amogha Pokkulandra",
    titles: ["Curriculum Developer", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "ryan",
    name: "Ryan Chou",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/ryanchou-dev",
    twitter: "",
    linkedin: "",
    website: "https://www.ryanchou.dev/",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "vikas_thoutam",
    name: "Vikas Thoutam",
    titles: ["Instructor", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:vikas.thoutam@gmail.com",
    youtube: "",
  },
  {
    photo: "davidz",
    name: "David Zhang",
    titles: ["Instructor", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "Varun",
    name: "Varun Ragunath",
    titles: ["Instructor", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "atharv",
    name: "Atharv Jain",
    titles: ["Instructor", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:atharvjain05@gmail.com",
    youtube: "",
  },
  {
    photo: "dustin",
    name: "Dustin Miao",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/dutinmeow",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:dutin20.meow@gmail.com",
    youtube: "",
  },
  {
    photo: "adham",
    name: "Adham Ibrahim",
    titles: ["Instructor", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:adhamibrahim719@gmail.com",
    youtube: "",
  },
]

const curriculum: Member[] = [
  {
    photo: "nikhil",
    name: "Nikhil Chatterjee",
    titles: ["Instructor", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "arpan",
    name: "Arpan Banerjee",
    titles: ["Curriculum Developer", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "albertz",
    name: "Albert Zhu",
    titles: ["Instructor", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "oscar",
    name: "Oscar Rendón",
    titles: ["Web Developer", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "pranav",
    name: "Pranav Jadhav",
    titles: ["Curriculum Developer", ""],
    github: "https://github.com/pranavgithub1",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:pra168109@gmail.com",
    youtube: "",
  },
]

const contentAuthors: Member[] = [
  {
    photo: "nathang",
    name: "Nathan Gong",
    titles: ["Web Developer", "Content Author"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "ryan",
    name: "Ryan Chou",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/ryanchou-dev",
    twitter: "",
    linkedin: "",
    website: "https://www.ryanchou.dev/",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "vivian",
    name: "Vivian Han",
    titles: ["Content Author", ""],
    github: "",
    twitter: "heheh",
    linkedin: "",
    website: "heheh",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "ananth",
    name: "Ananth Kashyap",
    titles: ["Web Developer", "Content Author"],
    github: "https://github.com/AAkashyap1",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ananth-kashyap-88b996209/",
    website: "",
    codeforces: "",
    email: "mailto:ananthkashyap4@gmail.com",
    youtube: "",
  },
  {
    photo: "dustin",
    name: "Dustin Miao",
    titles: ["Instructor", "Content Author"],
    github: "https://github.com/dutinmeow",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "mailto:dutin20.meow@gmail.com",
    youtube: "",
  },
  {
    photo: "sofia",
    name: "Sofia Yang",
    titles: ["Content Author", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "ben",
    name: "Ben Dodge",
    titles: ["Content Author", ""],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
]

const alumni: Member[] = [
  {
    photo: "Andrew",
    name: "Andrew Wang",
    titles: ["Former Secretary", ""],
    github: "https://github.com/andrewwangva",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/a.wang",
    email: "mailto:andrewwangva.biz@gmail.com",
    youtube: "",
  },
  {
    photo: "benq",
    name: "Benjamin Qi",
    titles: ["Former Content Director", "2x IOI Winner"],
    github: "https://github.com/bqi343",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/Benq",
    email: "mailto:bqi343@gmail.com",
    youtube: "",
  },
  {
    photo: "nathanc",
    name: "Nathan Chen",
    titles: ["Former Treasurer", "2x Finalist"],
    github: "https://github.com/nchn27",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/nchn27",
    email: "mailto:nchn27@gmail.com",
    youtube: "",
  },
]

const notPictured: Member[] = [
  {
    photo: "kevin",
    name: "Kevin Sheng",
    titles: ["Content Author", ""],
    github: "https://github.com/sanspapyrus683",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "blank",
    name: "Shreyas Thumathy",
    titles: ["Instructor", "Curriculum Developer"],
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "",
    email: "",
    youtube: "",
  },
  {
    photo: "sathvik",
    name: "Sathvik Chundru",
    titles: ["Content Author", ""],
    github: "https://github.com/sathu-beep",
    twitter: "",
    linkedin: "",
    website: "",
    codeforces: "https://codeforces.com/profile/sus",
    email: "",
    youtube: "",
  },
]

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "team_images" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 120, height: 120, cropFocus: CENTER, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
            name
          }
        }
      }
    }
  `)

  function GetSocialLinks(person: Member) {
    return (
      <div className="-mr-1">
        <ul className="flex">
          {person.linkedin !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.linkedin} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.linkedin.icon}
                </a>
              </li>
            </div>
          }
          {person.youtube !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.youtube} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.youtube.icon}
                </a>
              </li>
            </div>
          }
          {person.github !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.github} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.github.icon}
                </a>
              </li>
            </div>
          }
          {person.codeforces !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.codeforces} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.codeforces.icon}
                </a>
              </li>
            </div>
          }
          {person.website !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.website} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.website.icon}
                </a>
              </li>
            </div>
          }
          {person.email !== "" && 
            <div>
              <li className="mr-1">
                <a target="_blank" href={person.email} className="p-1.5 inline-block hover:text-gray-500 text-gray-700">
                  {socialLinks.email.icon}
                </a>
              </li>
            </div>
          }
        </ul>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="py-12 px-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:py-18">
        <div className="mb-8 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-extrabold tracking-tight text-4xl">Meet our team</h2>
          <p className="flex justify-center text-center text-xl text-gray-500">
            Comprised of USACO Finalists and top USACO competitors, our team
            is committed to increasing participation in competitive
            programming.
          </p>
        </div>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Core Team:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {core.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Web Developers:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {webdev.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Instructors:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {instructors.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Content Authors:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {contentAuthors.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Curriculum Developers:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {curriculum.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Alumni:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {alumni.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-10 space-y-5 sm:space-y-4">
          <h2 className="flex justify-center font-bold tracking-tight text-3xl">Not Pictured:</h2>
        </div>
        <ul
          role="list"
          className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-3"
        >
          {notPictured.map((member) => (
            <li key={member.name} className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5">
              <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                <div className="flex-shrink-0">
                  <Img
                      className="rounded-full bg-gray-900 object-cover"
                      fixed={
                        (data as any).allFile.edges.find(
                          x => x.node.name === member.photo
                        ).node.childImageSharp.fixed
                      }
                      alt={member.name}
                  />
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <span className="" aria-hidden="true"></span>
                  <p className="text-xl font-medium">{member.name}</p>
                  <div className="-mx-0.5">
                    {member.titles.map(title => {
                      return title !== "" ? <span className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium">{title}</span> : ""
                    })}
                  </div>
                  {GetSocialLinks(member)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
