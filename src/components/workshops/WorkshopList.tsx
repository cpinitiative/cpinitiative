import * as React from 'react'
import Image from 'next/image'
import { sections, latestWorkshop } from './WorkshopData'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function WorkshopList() {
  return (
    <div className="bg-white">
      <div className="py-12 px-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:py-18">
        <div className="mb-10">
          <h2 className="flex justify-center font-extrabold tracking-tight text-4xl mb-8">
            Latest Workshop
          </h2>
          <p className="flex justify-center font-bold tracking-tight text-2xl mb-1">
            { latestWorkshop.title }
          </p>
          <p className="flex justify-center text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base mb-4">
            { latestWorkshop.date.format("MMMM D, YYYY") }
          </p>
          <p className="flex justify-center tracking-tight mb-8 text-lg text-gray-500">
            { latestWorkshop.description }
          </p>
          <div className="flex justify-center h-60">
            <Image
              objectPosition="center center"
              src={latestWorkshop.photo}
              alt={latestWorkshop.title}
              placeholder="blur"
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href={"/workshops/" + latestWorkshop.url}>
              <a
                className={`shadow items-center justify-center px-8 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${latestWorkshop.themeColor ?? "blue"}-600 hover:bg-${latestWorkshop.themeColor ?? "blue"}-500 focus:outline-none focus:border-${latestWorkshop.themeColor ?? "blue"}-700 focus:shadow-outline-${latestWorkshop.themeColor ?? "blue"} transition duration-150 ease-in-out md:py-2 md:text-base md:px-10`}
              >
                Learn More
              </a>
            </Link>
          </div>
        </div>
        {sections.map(section => (
          (section.workshops.length != 0 && <React.Fragment key={section.title}>
            <div className="mb-10 space-y-5 sm:space-y-4">
              <h2 className="flex justify-center font-extrabold tracking-tight text-4xl mb-8">
                {section.title}
              </h2>
              <ul
                role="list"
                className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-2"
              >
                {section.workshops.map(workshop => (
                  <Link
                    key={workshop.title}
                    href={"/workshops/" + workshop.url}
                  >
                    <a>
                      <li
                        className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg hover:cursor-pointer duration-100 px-6 py-5"
                      >
                        <div className="space-x-2 sm:space-x-4 relative flex items-center space-x-3 ">
                          <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden relative lg:w-28 lg:h-28">
                            <Image
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center center"
                              src={workshop.photo}
                              alt={workshop.title}
                              placeholder="blur"
                              sizes="112px"
                            />
                          </div>
                          <div className="flex-1 min-w-0 space-y-2">
                            <span className="" aria-hidden="true"></span>
                            <p className="text-xl font-medium">{workshop.title}</p>
                            <p className="text-gray-500 font-medium">{workshop.date.format("MMMM D, YYYY")}</p>
                            <p className="text-gray-500">{workshop.description}</p>
                          </div>
                        </div>
                      </li>
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </React.Fragment>
        )))}
      </div>
    </div>
  );
}