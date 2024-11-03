import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"
import {
  ian,
  arnan,
  evan,
  jesse,
  nikhil,
  ryan,
  davidz,
  frank,
  julie,
  varun,
  vidith,
  blank,
  trisha,
  rohan_garg,
  faris,
  niranjana_sankar,
  rahul_verma,
  ryan_fu,
  andrew_xu,
  peng_bai
} from "../index/images"

type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title: string
}

const members: Member[] = [
  {
    photo: trisha,
    name: "Trisha Sabadra",
    title: "Project Manager of Classes / Director of Bronze Classes / Silver Instructor",
  },
  {
    photo: varun,
    name: "Varun Ragunath",
    title: "Project Manager of Classes / Finalist",
  },
  {
    photo: frank,
    name: "Frank Xiao",
    title: "Bronze & Silver Instructor",
  },
  {
    photo: andrew_xu,
    name: "Andrew Xu",
    title: "Bronze & Silver Instructor"
  },
  {
    photo: rohan_garg,
    name: "Rohan Garg",
    title: "Bronze & Silver Instructor",
  },
  {
    photo: peng_bai,
    name: "Peng Bai",
    title: "Silver Instructor"
  },
  {
    photo: ryan_fu,
    name: "Ryan Fu",
    title: "Silver Instructor",
  },
  {
    photo: faris,
    name: "Faris Raza",
    title: "Bronze & Silver Instructor",
  },
  {
    photo: niranjana_sankar,
    name: "Niranjana Sankar",
    title: "Bronze Instructor",
  },
  {
    photo: rahul_verma,
    name: "Rahul Verma",
    title: "Bronze Instructor",
  },
  {
    photo: ryan,
    name: "Ryan Chou",
    title: "Bronze Instructor",
  },
]

export default function ClassInstructors() {
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
            <ul className="sm:grid sm:grid-cols-2 sm:gap-12 lg:gap-x-8">
              {members.map(member => (
                <li key={member.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden relative lg:w-20 lg:h-20">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center center"
                        src={member.photo}
                        alt={member.name}
                        placeholder="blur"
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
