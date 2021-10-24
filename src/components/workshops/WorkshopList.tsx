import * as React from 'react'
import Image from 'next/image'
import sections from './WorkshopData'
import Link from 'next/link'

export default function WorkshopList() {
  return (
    <div className="bg-white">
      <div className="py-12 px-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:py-18">
        {sections.map(section => (
          (section.workshops.length != 0 && <React.Fragment key={section.title}>
            <div className="mb-10 space-y-5 sm:space-y-4">
              <h2 className="flex justify-center font-extrabold tracking-tight text-4xl mb-10">
                {section.title}
              </h2>
              <ul
                role="list"
                className="mb-16 mx-auto space-y-8 sm:grid md:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-2 xl:grid-cols-2"
              >
                {section.workshops.map(workshop => (
                  <Link
                    href={"/workshops/" + workshop.url}
                  >
                    <li
                      key={workshop.title}
                      className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg hover:cursor-pointer px-6 py-5"
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
                          <p className="text-gray-500 font-medium">{workshop.date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}</p>
                          <p className="text-gray-500">{workshop.description}</p>
                        </div>
                      </div>
                    </li>
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