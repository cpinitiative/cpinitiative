import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"
import {
  abhiraj,
  andyc,
  david_zhou,
  hannah,
  i_chen_chou,
  kyle_liang,
  nathanc,
  ruben,
  satvika,
  srijith,
} from "../index/images"

type Member = {
  photo?: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title: string
}

const members: Member[] = [
  {
    photo: srijith,
    name: "Srijith Chinthalapudi",
    title: "Lead Instructor",
  },
  {
    photo: david_zhou,
    name: "David Zhou",
    title: "Instructor",
  },
  {
    photo: satvika,
    name: "Satvika Sridhar",
    title: "Instructor",
  },
  {
    photo: i_chen_chou,
    name: "I-Chen Chou",
    title: "Instructor",
  },
  {
    photo: abhiraj,
    name: "Abhiraj Mallangi",
    title: "Instructor",
  },
  {
    photo: hannah,
    name: "Hannah Ying",
    title: "Instructor",
  },
  {
    photo: andyc,
    name: "Andy Chen",
    title: "Instructor",
  },
  {
    photo: nathanc,
    name: "Nathan Chen",
    title: "Instructor",
  },
  {
    name: "Ayush Bansal",
    title: "Instructor",
  },
  {
    name: "Patrick Deng",
    title: "Instructor",
  },
  {
    photo: ruben,
    name: "Ruben Jing",
    title: "Instructor",
  },
  {
    photo: kyle_liang,
    name: "Kyle Liang",
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
                      {member.photo ? (
                        <Image
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center center"
                          src={member.photo}
                          alt={member.name}
                          placeholder="blur"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                          <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
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
