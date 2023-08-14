import * as React from "react"
import Image from "next/legacy/image"
import HeroImg from "../../images/workshops-hero.jpg"
import EmailForm from "../video-classes/EmailForm"

export default function Hero() {
  return (
    <div>
      <div className="relative shadow-xl">
        <div className="absolute inset-0">
          <Image
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
            src={HeroImg}
            alt="Workshop"
          />
          <div
            className="absolute inset-0 bg-blue-800"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-blue-100">Attend High Quality</span>
            <span className="block text-white">Workshops</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
            Free online workshops hosted by CPI with{" "}
            <span className="font-medium text-white">
              interviews, webinars, and information
            </span>{" "}
            about competitive programming.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <EmailForm
                  listName={"workshops"}
                  mailjetListName={"workshops"}
                />
          </div>
        </div>
      </div>
    </div>
  )
}