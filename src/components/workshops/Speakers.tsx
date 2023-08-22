import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"

export type Speaker = {
  photo?: StaticImageData
  name: string
  title?: string
}

export default function Speakers({
  speakers,
  description,
  titleColor = "text-indigo-600",
}: {
  speakers: Speaker[]
  description?: string
  titleColor?: string
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
              Meet the speakers
            </h2>
            {description && (
              <p className="text-xl leading-7 text-gray-500">{description}</p>
            )}
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {speakers.map(speaker => (
                <li key={speaker.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden relative lg:w-20 lg:h-20">
                      {speaker.photo && (
                        <Image
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center center"
                          src={speaker.photo}
                          alt={speaker.name}
                          placeholder="blur"
                        />
                      )}
                    </div>
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{speaker.name}</h3>
                      {speaker.title && (
                        <p className={`${titleColor} text-base`}>
                          {speaker.title}
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
