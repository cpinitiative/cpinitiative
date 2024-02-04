import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"
import {
  algonquin,
  alpharetta,
  amador_valley,
  ashbury,
  baton,
  bcu,
  bellarmine,
  bergen_county_tech,
  beverly_hills,
  bhfles,
  bits,
  bourguiba_pioneer,
  branham,
  brooklyn_technical,
  cairo_university,
  california_connections,
  centennial,
  chapel_hill,
  chengdu,
  chengdu_foreign_languages,
  clear_lake,
  conestoga,
  creskill,
  del_norte,
  delhi,
  dougherty,
  dover,
  dps_agra,
  dubai,
  dunbar,
  east_career,
  east_west,
  edison_academy,
  elenor_roosevelt,
  excelsior,
  fremont,
  heritage,
  homestead,
  hopewell,
  horace_greeley,
  huili,
  iiit,
  iiuc,
  imsa,
  independence,
  inglemoor,
  interlake,
  irvington,
  jane_lathrop,
  jayshree,
  ladue_horton,
  le_quy_don,
  leigh,
  liberty,
  lincoln,
  linnerton,
  los_altos,
  loudon,
  mahindra,
  marshall,
  marvin_ridge,
  mawlana_bhashani,
  memorial,
  mendon,
  milestone,
  milpitas,
  mission,
  monrovia,
  monta_vista,
  montgomery,
  nanjing,
  napervillecentral,
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
  plaksha,
  pld,
  radleycollege,
  re_mountain,
  regis,
  rickards,
  riverhill,
  royal_grammar,
  saigon_south,
  san_mateo,
  scaler,
  sequoia,
  shady_side,
  shanghai,
  silver_creek,
  skyline,
  smic,
  stanford_online,
  stuyvesant,
  suncoast,
  sydney_grammar,
  tams,
  tenafly,
  tompkins,
  trabuco,
  trinity,
  troy,
  tyee,
  university,
  vandegrift,
  ward_melville,
  washington,
  wayzata,
  wellington,
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
    name: "Academies of Loudoun",
    photo: loudon,
    region: "Virgina",
  },
  {
    name: "Bolivian Catholic University",
    photo: bcu,
    region: "Bolivia",
  },
  {
    name: "Dougherty Valley High School",
    photo: dougherty,
    region: "California",
  },
  
  {
    name: "Milestone College",
    photo: milestone,
    region: "Bangladesh",
  },
  {
    name: "Sequoia High School",
    photo: sequoia,
    region: "California",
  },
  {
    name: "Vandegrift High School",
    photo: vandegrift,
    region: "Texas",
  },
  {
    name: "Delhi Public School Agra",
    photo: dps_agra,
    region: "India",
  },
  {
    name: "East West University",
    photo: east_west,
    region: "Bangladesh",
  },
  {
    name: "Clear Lake High School",
    photo: clear_lake,
    region: "Texas",
  },
  {
    name: "Cairo University",
    photo: cairo_university,
    region: "Egypt",
  },
  {
    name: "International Islamic University Chittagong",
    photo: iiuc,
    region: "Bangladesh",
  },
  {
    name: "Amador Valley High School",
    photo: amador_valley,
    region: "California",
  },
  {
    name: "Algonquin Regional High School",
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
    name: "Bergen County Technical Schools",
    photo: bergen_county_tech,
    region: "New Jersey",
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
    name: "Bourguiba Pinoeer High school of Tunis",
    photo: bourguiba_pioneer,
    region: "Tunisia",
  },
  {
    name: "Branham High School",
    photo: branham,
    region: "California",
  },
  {
    name: "Brooklyn Technical High School",
    photo: brooklyn_technical,
    region: "New York",
  },
  {
    name: "California Connections Academy",
    photo: california_connections,
    region: "California",
  },
  {
    name: "Chapel Hill High School",
    photo: chapel_hill,
    region: "Georgia",
  },
  {
    name: "Chengdu Foreign Languages School",
    photo: chengdu_foreign_languages,
    region: "Chengdu",
  },
  {
    name: "Chengdu Longquanyi District Qingmiao School",
    photo: chengdu,
    region: "Chengdu",
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
    name: "Dunbar High School",
    photo: dunbar,
    region: "Florida",
  },
  {
    name: "East Career & Technical Academy",
    photo: east_career,
    region: "Nevada",
  },
  {
    name: "Edison Academy Magnet School",
    photo: edison_academy,
    region: "New Jersey",
  },
  {
    name: "Eleanor Roosevelt High School",
    photo: elenor_roosevelt,
    region: "California",
  },
  {
    name: "Excelsior American School",
    photo: excelsior,
    region: "Gurgaon",
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
    name: "Homestead High School",
    photo: homestead,
    region: "California",
  },
  {
    name: "Hopewell Valley Central High School",
    photo: hopewell,
    region: "New Jersey",
  },
  {
    name: "Horace Greeley High School",
    photo: horace_greeley,
    region: "New York",
  },
  {
    name: "Huili School Shanghai",
    photo: huili,
    region: "Shanghai",
  },
  {
    name: "IIIT Naya Raipur",
    photo: iiit,
    region: "Raipur",
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
    region: "Mahapura",
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
    name: "Leigh High School",
    photo: leigh,
    region: "California",
  },
  {
    name: "Liberty High School",
    photo: liberty,
    region: "Texas",
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
    name: "Los Altos High School",
    photo: los_altos,
    region: "California",
  },
  {
    name: "Mahindra University",
    photo: mahindra,
    region: "Hyderabad",
  },
  {
    name: "Mawlana Bhashani Science and Technology University",
    photo: mawlana_bhashani,
    region: "Bangladesh",
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
    name: "Milpitas High School",
    photo: milpitas,
    region: "California",
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
    name: "Naperville Central High School",
    photo: napervillecentral,
    region: "Illinois",
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
    region: "Sydney",
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
    name: "Plaksha University",
    photo: plaksha,
    region: "India",
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
    name: "Radley College",
    photo: radleycollege,
    region: "United Kingdom",
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
    name: "The Royal Grammar School",
    photo: royal_grammar,
    region: "England",
  },
  {
    name: "Saigon South International School",
    photo: saigon_south,
    region: "Ho Chi Minh City",
  },
  {
    name: "San Mateo High School",
    photo: san_mateo,
    region: "California",
  },
  {
    name: "Scaler School Of Technology",
    photo: scaler,
    region: "Bengaluru, India",
  },
  {
    name: "Shady Side Academy",
    photo: shady_side,
    region: "Pennsylvania",
  },
  {
    name: "Skyline High School",
    photo: skyline,
    region: "Texas",
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
    region: "New York",
  },
  {
    name: "Suncoast Community HS",
    photo: suncoast,
    region: "Florida",
  },
  {
    name: "Sydney Grammar School",
    photo: sydney_grammar,
    region: "Australia",
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
    name: "Tyee Middle School",
    photo: tyee,
    region: "Washington",
  },
  {
    name: "University High School",
    photo: university,
    region: "California",
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
    name: "Ward Melville High School",
    photo: ward_melville,
    region: "New Jersey",
  },
  {
    name: "Washington School",
    photo: washington,
    region: "New York",
  },
  {
    name: "Wayzata High School",
    photo: wayzata,
    region: "Minnesota",
  },
  {
    name: "Wellington College International Shanghai",
    photo: wellington,
    region: "Shanghai",
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
].sort((x, y) => x.name.localeCompare(y.name))

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
