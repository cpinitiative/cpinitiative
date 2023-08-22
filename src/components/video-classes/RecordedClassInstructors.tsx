import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"
import {
  nathanw,
  daniel,
  jeffrey,
  maggie,
  melody,
  varun,
  jay,
  jpaulson,
  vivian,
  neo,
  amogha,
  david_li,
  vikas_thoutam,
  yifan_ma,
  harry,
  arpan,
  nikhil,
} from "../index/images"

type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title: string
}

const members: Member[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    title: "Lead Instructor / Finalist",
  },
  {
    photo: daniel,
    name: "Daniel Guan",
    title: "Lead Instructor / Finalist",
  },
  {
    photo: jeffrey,
    name: "Jeffrey Meng",
    title: "Lead Instructor",
  },
  {
    photo: maggie,
    name: "Maggie Liu",
    title: "Instructor",
  },
  {
    photo: melody,
    name: "Melody Yu",
    title: "Instructor",
  },
  {
    photo: varun,
    name: "Varun Ragunath",
    title: "Instructor / Finalist",
  },
  {
    photo: jay,
    name: "Jay Fu",
    title: "Instructor",
  },
  {
    photo: jpaulson,
    name: "Jonathan Paulson",
    title: "Instructor / USACO Coach",
  },
  {
    photo: vivian,
    name: "Vivian Han",
    title: "Instructor / USA EGOI Team",
  },
  {
    photo: neo,
    name: "Neo Wang",
    title: "Instructor",
  },
  {
    photo: amogha,
    name: "Amogha Pokkulandra",
    title: "Instructor",
  },
  {
    photo: david_li,
    name: "David Li",
    title: "Instructor",
  },
  {
    photo: vikas_thoutam,
    name: "Vikas Thoutam",
    title: "Instructor",
  },
  {
    photo: yifan_ma,
    name: "Yifan Ma",
    title: "Instructor",
  },
  {
    photo: harry,
    name: "Harry Wang",
    title: "Instructor",
  },
  {
    photo: arpan,
    name: "Arpan Banerjee",
    title: "Instructor",
  },
  {
    photo: nikhil,
    name: "Nikhil Chatterjee",
    title: "Instructor",
  },
]

export default function RecordedClassInstructors() {
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
                    <div className="flex-shrink-0 w-16 h-16 rounded-full relative overflow-hidden lg:w-20 lg:h-20">
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
