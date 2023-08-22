import * as React from "react"
import Image, { StaticImageData } from "next/image"
import {
  algonquin,
  alpharetta,
  ashbury,
  baton,
  bellarmine,
  beverly_hills,
  bhfles,
  bits,
  branham,
  california_connections,
  creskill,
  centennial,
  conestoga,
  del_norte,
  delhi,
  dover,
  dubai,
  east_career,
  excelsior,
  fremont,
  heritage,
  horace_greeley,
  imsa,
  independence,
  inglemoor,
  interlake,
  irvington,
  jane_lathrop,
  jayshree,
  ladue_horton,
  le_quy_don,
  lincoln,
  linnerton,
  mahindra,
  marshall,
  marvin_ridge,
  memorial,
  mendon,
  mission,
  monrovia,
  monta_vista,
  montgomery,
  nanjing,
  new_hampshire,
  newbury_park,
  newport,
  north_andover,
  northsydney,
  northview,
  oak_valley,
  orange,
  panther_creek,
  pingry,
  pld,
  re_mountain,
  regis,
  rickards,
  riverhill,
  saigon_south,
  silver_creek,
  shanghai,
  smic,
  stanford_online,
  stuyvesant,
  suncoast,
  tams,
  tenafly,
  tompkins,
  trabuco,
  trinity,
  troy,
  westwood,
  white_station,
  whitfield,
  whitney,
  windermere,
  winston_churchill,
  wissahickon,
} from "../clubs/images"

const ClubCard = ({ name, photo, region }) => {
  return (
    <li className="relative block w-full rounded-lg overflow-hidden">
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
    name: "Alpharetta High School",
    photo: alpharetta,
    region: "Georgia",
  },
  {
    name: "American Heritage Schools",
    photo: heritage,
    region: "Florida",
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
    name: "Beijing Haidian Foreign Language Experimental School",
    photo: bhfles,
    region: "Beijing",
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
    name: "California Connections Academy",
    photo: california_connections,
    region: "California",
  },
  {
    name: "Conestoga High School",
    photo: conestoga,
    region: "Pennsylvania",
  },
  {
    name: "Creskill High School",
    photo: creskill,
    region: "New Jersey",
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
    name: "Dubai International Academy",
    photo: dubai,
    region: "Dubai",
  },
  {
    name: "East Career & Technical Academy",
    photo: east_career,
    region: "Nevada",
  },
  {
    name: "Excelsior American School",
    photo: excelsior,
    region: "Gurgaon"
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
    name: "George C. Marshall High School",
    photo: marshall,
    region: "Virginia",
  },
  {
    name: "Horace Greeley High School",
    photo: horace_greeley,
    region: "New York",
  },
  {
    name: "Illinois Math and Science Academy",
    photo: imsa,
    region: "Illinois",
  },
  {
    name: "Independence High School",
    photo: independence,
    region: "Texas",
  },
  {
    name: "Inglemoor High School",
    photo: inglemoor,
    region: "Washington",
  },
  {
    name: "Interlake High School",
    photo: interlake,
    region: "Washington",
  },
  {
    name: "Irvington High School",
    photo: irvington,
    region: "California",
  },
  {
    name: "Jane Lathrop Stanford Middle School",
    photo: jane_lathrop,
    region: "California",
  },
  {
    name: "Jayshree Periwal International School",
    photo: jayshree,
    region: "Mahapura"
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
    name: "Mahindra University",
    photo: mahindra,
    region: "Hyderabad",
  },
  {
    name: "Marvin Ridge High School",
    photo: marvin_ridge,
    region: "North Carolina",
  },
  {
    name: "Memorial High School",
    photo: memorial,
    region: "Texas",
  },
  {
    name: "Mission San Jose High School",
    photo: mission,
    region: "California",
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
    name: "Newbury Park High School",
    photo: newbury_park,
    region: "California",
  },
  {
    name: "Newport High School",
    photo: newport,
    region: "Washington",
  },
  {
    name: "North Andover High School",
    photo: north_andover,
    region: "Massachusetts",
  },
  {
    name: "North Sydney Boys High School",
    photo: northsydney,
    region: "Sydney"
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
    name: "Paul Laurence Dunbar High School",
    photo: pld,
    region: "Kentucky",
  },
  {
    name: "Pingry School",
    photo: pingry,
    region: "New Jersey",
  },
  {
    name: "Pittsford Mendon High School",
    photo: mendon,
    region: "New York",
  },
  {
    name: "R.E. Mountain Secondary School",
    photo: re_mountain,
    region: "Canada",
  },
  {
    name: "Regis Jesuit High School",
    photo: regis,
    region: "Colorado",
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
    name: "Saigon South International School",
    photo: saigon_south,
    region: "Ho Chi Minh City"
  },
  {
    name: "Silver Creek High School",
    photo: silver_creek,
    region: "California",
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
    name: "Stuyvesant High School",
    photo: stuyvesant,
    region: "New York"
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
    name: "Texas Academy of Mathematics and Science",
    photo: tams,
    region: "Texas",
  },
  {
    name: "Tompkins HS",
    photo: tompkins,
    region: "Texas",
  },
  {
    name: "Trabuco Hills High School",
    photo: trabuco,
    region: "California",
  },
  {
    name: "Trinity Valley School",
    photo: trinity,
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
    name: "UWCSEA Dover Campus",
    photo: dover,
    region: "Singapore",
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
    name: "Whitney M. Young High School",
    photo: whitney,
    region: "Illinois",
  },
  {
    name: "Wissahickon High School",
    photo: wissahickon,
    region: "Pennsylvania",
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
].sort((x, y) => x.name.localeCompare(y.name));

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
