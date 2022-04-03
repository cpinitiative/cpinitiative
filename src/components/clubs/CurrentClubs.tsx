import * as React from "react"
import Image from "next/image"
import {
  algonquin,
  ashbury,
  baton,
  bellarmine,
  beverly_hills,
  bits,
  branham,
  centennial,
  del_norte,
  delhi,
  east_career,
  fremont,
  horace_greeley,
  independence,
  interlake,
  ladue_horton,
  le_quy_don,
  lincoln,
  linnerton,
  marvin_ridge,
  monrovia,
  monta_vista,
  montgomery,
  nanjing,
  new_hampshire,
  north_andover,
  northview,
  oak_valley,
  orange,
  panther_creek,
  pingry,
  rickards,
  riverhill,
  shanghai,
  smic,
  stanford_online,
  suncoast,
  tenafly,
  tompkins,
  troy,
  westwood,
  white_station,
  whitfield,
  whitney,
  windermere,
  winston_churchill,
} from "../clubs/images"

const ClubCard = ({ name, photo, region }) => {
  return (
    <li className="relative block w-full rounded-lg overflow-hidden relative">
      <div className="pointer-events-none aspect-w-10 aspect-h-6">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          src={photo}
          alt={name}
          placeholder="blur"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-6 pb-6 md:px-4 md:pb-4 lg:px-3 lg:pb-3 pt-12">
        <p className="mt-2 block md:text-xl text-2xl font-bold text-white truncate pointer-events-none">
          {name}
        </p>
        <p className="block md:text-base sm:text-lg font-medium text-gray-200 pointer-events-none">
          {region}
        </p>
      </div>
    </li>
  )
}

const clubs: {
  name: string
  photo: StaticImageData
  region: string
}[] = [
  {
    name: "Algonquin Regional High",
    photo: algonquin,
    region: "Massachusetts",
  },
  {
    name: "Ashbury College",
    photo: ashbury,
    region: "Canada",
  },
  {
    name: "Baton Rouge Magnet High School",
    photo: baton,
    region: "Louisiana",
  },
  {
    name: "Bellarmine College Prep",
    photo: bellarmine,
    region: "California",
  },
  {
    name: "Beverly Hills High School",
    photo: beverly_hills,
    region: "California",
  },
  {
    name: "BITS School",
    photo: bits,
    region: "Goa",
  },
  {
    name: "Branham High School",
    photo: branham,
    region: "California",
  },
  {
    name: "Del Norte High School",
    photo: del_norte,
    region: "California",
  },
  {
    name: "Delhi Public School",
    photo: delhi,
    region: "New Delhi",
  },
  {
    name: "East Career & Technical Academy",
    photo: east_career,
    region: "Nevada"
  },
  {
    name: "Fremont High School",
    photo: fremont,
    region: "California",
  },
  {
    name: "Frisco Centennial High School",
    photo: centennial,
    region: "Texas",
  },
  {
    name: "Horace Greeley High School",
    photo: horace_greeley,
    region: "New York",
  },
  {
    name: "Independence High School",
    photo: independence,
    region: "Texas",
  },
  {
    name: "Interlake High School",
    photo: interlake,
    region: "Washington",
  },
  {
    name: "Ladue Horton Watkins HS",
    photo: ladue_horton,
    region: "Missouri",
  },
  {
    name: "Le Quy Don Technical University",
    photo: le_quy_don,
    region: "Vietnam",
  },
  {
    name: "Lincoln High School",
    photo: lincoln,
    region: "Oregon",
  },
  {
    name: "Linnerton High School",
    photo: linnerton,
    region: "Maryland",
  },
  {
    name: "Marvin Ridge High School",
    photo: marvin_ridge,
    region: "North Carolina",
  },
  {
    name: "Monrovia HS",
    photo: monrovia,
    region: "California",
  },
  {
    name: "Monta Vista High School",
    photo: monta_vista,
    region: "California",
  },
  {
    name: "Montgomery High School",
    photo: montgomery,
    region: "New Jersey",
  },
  {
    name: "Nanjing International School",
    photo: nanjing,
    region: "Nanjing",
  },
  {
    name: "North Andover High School",
    photo: north_andover,
    region: "Massachusetts",
  },
  {
    name: "Northview High School",
    photo: northview,
    region: "Georgia",
  },
  {
    name: "Oak Valley Middle School",
    photo: oak_valley,
    region: "California",
  },
  {
    name: "Orange High School",
    photo: orange,
    region: "Ohio",
  },
  {
    name: "Panther Creek High School",
    photo: panther_creek,
    region: "North Carolina",
  },
  {
    name: "Pingry School",
    photo: pingry,
    region: "New Jersey",
  },
  {
    name: "Rickards HS",
    photo: rickards,
    region: "Florida",
  },
  {
    name: "Riverhill High School",
    photo: riverhill,
    region: "Maryland",
  },
  {
    name: "SMIC Private School",
    photo: smic,
    region: "Shanghai",
  },
  {
    name: "Shanghai High School",
    photo: shanghai,
    region: "Shanghai",
  },
  {
    name: "Stanford Online High School",
    photo: stanford_online,
    region: "California",
  },
  {
    name: "Suncoast Community HS",
    photo: suncoast,
    region: "Florida",
  },
  {
    name: "Tenafly High School",
    photo: tenafly,
    region: "New Jersey",
  },
  {
    name: "Tompkins HS",
    photo: tompkins,
    region: "Texas",
  },
  {
    name: "Troy HS",
    photo: troy,
    region: "Michigan",
  },
  {
    name: "University of New Hampshire",
    photo: new_hampshire,
    region: "New Hampshire",
  },
  {
    name: "Westwood High School",
    photo: westwood,
    region: "Texas",
  },
  {
    name: "White Station High School",
    photo: white_station,
    region: "Tennessee",
  },
  {
    name: "Whitfield HS",
    photo: whitfield,
    region: "California",
  },
  {
    name: "Gretchen Whitney High School",
    photo: whitney,
    region: "California",
  },
  {
    name: "Windermere High School",
    photo: windermere,
    region: "Florida",
  },
  {
    name: "Winston Churchill High School",
    photo: winston_churchill,
    region: "Maryland",
  },
]

export default function CurrentClubs() {
  return (
    <div>
      <div className="relative bg-purple-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-purple-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Current Clubs
          </h1>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl">
            Join our rapidly expanding community of competitive programming
            clubs from all across the world!
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 md:gap-x-4 lg:gap-x-3 xl:gap-x-4"
        >
          {clubs.map(club => (
            <ClubCard
              key={club.name}
              name={club.name}
              photo={club.photo}
              region={club.region}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
