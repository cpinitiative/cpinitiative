import * as React from "react"
import Image from "next/image"
import { nathanw, daniel, darren, michael, Andrew } from "../index/images"

type Member = {
  photo: StaticImageData // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string
  title?: string
}

const members: Member[] = [
  {
    photo: nathanw,
    name: "Nathan Wang",
    title: "2x USACO Finalist",
  },
  {
    photo: daniel,
    name: "Daniel Guan",
    title: "USACO Finalist",
  },
  {
    photo: darren,
    name: "Darren Yao",
    title: "Author of An Introduction to USACO",
  },
  {
    photo: michael,
    name: "Michael Cao",
  },
  {
    photo: Andrew,
    name: "Andrew Wang",
  },
]

export default function WebinarPeople() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Meet the speakers
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              This webinar will be hosted by top USACO contestants and USACO
              Finalists, with ample experience in competitive programming.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
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
                      {member.title && (
                        <p className="text-indigo-600 text-base">
                          {member.title}
                        </p>
                      )}
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
