import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

type Member = {
  photo: string // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title: string
}

const members: Member[] = [
  {
    photo: "nathanw",
    name: "Nathan Wang",
    title: "Lead Instructor / Finalist",
  },
  {
    photo: "daniel",
    name: "Daniel Guan",
    title: "Lead Instructor / Finalist",
  },
  {
    photo: "jeffrey",
    name: "Jeffrey Meng",
    title: "Lead Instructor",
  },
  {
    photo: "maggie",
    name: "Maggie Liu",
    title: "Instructor",
  },
  {
    photo: "melody",
    name: "Melody Yu",
    title: "Instructor",
  },
  {
    photo: "Varun",
    name: "Varun Ragunath",
    title: "Instructor / Finalist",
  },
  {
    photo: "Jay",
    name: "Jay Fu",
    title: "Instructor",
  },
  {
    photo: "jpaulson",
    name: "Jonathan Paulson",
    title: "Instructor",
  },
  {
    photo: "vivian",
    name: "Vivian Han",
    title: "Instructor / USA EGOI Team",
  },
  {
    photo: "neo",
    name: "Neo Wang",
    title: "Instructor",
  },
  {
    photo: "amogha_pokkulandra",
    name: "Amogha Pokkulandra",
    title: "Instructor",
  },
  {
    photo: "david_li",
    name: "David Li",
    title: "Instructor",
  },
  {
    photo: "vikas_thoutam",
    name: "Vikas Thoutam",
    title: "Instructor",
  },
  {
    photo: "yifan_ma",
    name: "Yifan Ma",
    title: "Instructor",
  },
  {
    photo: "Harry",
    name: "Harry Wang",
    title: "Instructor",
  },
  {
    photo: "arpan",
    name: "Arpan Banerjee",
    title: "Instructor",
  },
  {
    photo: "nikhil",
    name: "Nikhil Chatterjee",
    title: "Instructor",
  },
]

export default function RecordedClassInstructors() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "team_images" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 80, height: 80, cropFocus: CENTER, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Meet our instructors
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              With a curriculum designed by past USACO Finalists and thoroughly
              vetted instructors, students are in good hands.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {members.map(member => (
                <li key={member.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full lg:w-20 lg:h-20">
                      <Img
                        className="rounded-full"
                        fixed={
                          (data as any).allFile.edges.find(
                            x => x.node.name === member.photo
                          ).node.childImageSharp.fixed
                        }
                        alt={member.name}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{member.name}</h3>
                      <p className="text-indigo-600 text-base">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
