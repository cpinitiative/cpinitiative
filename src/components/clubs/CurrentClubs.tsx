import * as React from "react"
import Image, { StaticImageData } from "next/legacy/image"
import * as img from "../clubs/images"

const ClubCard = ({
  name,
  photo,
  region,
}: {
  name: string
  photo: StaticImageData
  region: string
}) => {
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
    name: "Keshav Memorial Institute of Technology",
    photo: img.kmit,
    region: "India",
  },
  {
    name: "John Foster Dulles High School",
    photo: img.jfd_hs,
    region: "Texas",
  },
  {
    name: "B.V. Raju Institute of Technology",
    photo: img.bvrit,
    region: "India",
  },
  {
    name: "Universitas Gadjah Mada",
    photo: img.gadjah_mada,
    region: "Indonesia",
  },
  {
    name: "Academies of Loudoun",
    photo: img.loudon,
    region: "Virgina",
  },
  {
    name: "Bolivian Catholic University",
    photo: img.bcu,
    region: "Bolivia",
  },
  {
    name: "Dougherty Valley High School",
    photo: img.dougherty,
    region: "California",
  },

  {
    name: "Milestone College",
    photo: img.milestone,
    region: "Bangladesh",
  },
  {
    name: "Sequoia High School",
    photo: img.sequoia,
    region: "California",
  },
  {
    name: "Vandegrift High School",
    photo: img.vandegrift,
    region: "Texas",
  },
  {
    name: "Delhi Public School Agra",
    photo: img.dps_agra,
    region: "India",
  },
  {
    name: "East West University",
    photo: img.east_west,
    region: "Bangladesh",
  },
  {
    name: "Clear Lake High School",
    photo: img.clear_lake,
    region: "Texas",
  },
  {
    name: "Cairo University",
    photo: img.cairo_university,
    region: "Egypt",
  },
  {
    name: "International Islamic University Chittagong",
    photo: img.iiuc,
    region: "Bangladesh",
  },
  {
    name: "Amador Valley High School",
    photo: img.amador_valley,
    region: "California",
  },
  {
    name: "Algonquin Regional High School",
    photo: img.algonquin,
    region: "Massachusetts",
  },
  {
    name: "Alpharetta High School",
    photo: img.alpharetta,
    region: "Georgia",
  },
  {
    name: "American Heritage Schools",
    photo: img.heritage,
    region: "Florida",
  },
  {
    name: "Ashbury College",
    photo: img.ashbury,
    region: "Canada",
  },
  {
    name: "Baton Rouge Magnet High School",
    photo: img.baton,
    region: "Louisiana",
  },
  {
    name: "Beijing Haidian Foreign Language Experimental School",
    photo: img.bhfles,
    region: "Beijing",
  },
  {
    name: "Bellarmine College Prep",
    photo: img.bellarmine,
    region: "California",
  },
  {
    name: "Bergen County Technical Schools",
    photo: img.bergen_county_tech,
    region: "New Jersey",
  },
  {
    name: "Beverly Hills High School",
    photo: img.beverly_hills,
    region: "California",
  },
  {
    name: "Blue Ridge Boost",
    photo: img.blue_ridge_boost,
    region: "Virginia",
  },
  {
    name: "BITS School",
    photo: img.bits,
    region: "Goa",
  },
  {
    name: "Bourguiba Pinoeer High school of Tunis",
    photo: img.bourguiba_pioneer,
    region: "Tunisia",
  },
  {
    name: "Branham High School",
    photo: img.branham,
    region: "California",
  },
  {
    name: "Brigham Young University",
    photo: img.brigham_young,
    region: "Utah",
  },
  {
    name: "Brooklyn Technical High School",
    photo: img.brooklyn_technical,
    region: "New York",
  },
  {
    name: "California Connections Academy",
    photo: img.california_connections,
    region: "California",
  },
  {
    name: "Chapel Hill High School",
    photo: img.chapel_hill,
    region: "Georgia",
  },
  {
    name: "Conestoga High School",
    photo: img.conestoga,
    region: "Pennsylvania",
  },
  {
    name: "Cornerstone Elementary",
    photo: img.cornerstone_elementary,
    region: "Texas",
  },
  {
    name: "Creskill High School",
    photo: img.creskill,
    region: "New Jersey",
  },
  {
    name: "Del Norte High School",
    photo: img.del_norte,
    region: "California",
  },
  {
    name: "Delhi Public School",
    photo: img.delhi,
    region: "New Delhi",
  },
  {
    name: "Dubai International Academy",
    photo: img.dubai,
    region: "Dubai",
  },
  {
    name: "Dunbar High School",
    photo: img.dunbar,
    region: "Florida",
  },
  {
    name: "East Career & Technical Academy",
    photo: img.east_career,
    region: "Nevada",
  },
  {
    name: "Edison Academy Magnet School",
    photo: img.edison_academy,
    region: "New Jersey",
  },
  {
    name: "Eleanor Roosevelt High School",
    photo: img.elenor_roosevelt,
    region: "California",
  },
  {
    name: "Excelsior American School",
    photo: img.excelsior,
    region: "Gurgaon",
  },
  {
    name: "Franklin High School",
    photo: img.franklin,
    region: "Texas",
  },
  {
    name: "Fremont High School",
    photo: img.fremont,
    region: "California",
  },
  {
    name: "Green Level High School",
    photo: img.green_level,
    region: "North Carolina",
  },
  {
    name: "Frisco Centennial High School",
    photo: img.centennial,
    region: "Texas",
  },
  {
    name: "George C. Marshall High School",
    photo: img.marshall,
    region: "Virginia",
  },
  {
    name: "homestead High School",
    photo: img.homestead,
    region: "California",
  },
  {
    name: "Hopewell Valley Central High School",
    photo: img.hopewell,
    region: "New Jersey",
  },
  {
    name: "Horace Greeley High School",
    photo: img.horace_greeley,
    region: "New York",
  },
  {
    name: "Huili School Shanghai",
    photo: img.huili,
    region: "Shanghai",
  },
  {
    name: "IIIT Naya Raipur",
    photo: img.iiit,
    region: "Raipur",
  },
  {
    name: "Illinois Math and Science Academy",
    photo: img.imsa,
    region: "Illinois",
  },
  {
    name: "Independence High School",
    photo: img.independence,
    region: "Texas",
  },
  {
    name: "Inglemoor High School",
    photo: img.inglemoor,
    region: "Washington",
  },
  {
    name: "Interlake High School",
    photo: img.interlake,
    region: "Washington",
  },
  {
    name: "Irvington High School",
    photo: img.irvington,
    region: "California",
  },
  {
    name: "Jane Lathrop Stanford Middle School",
    photo: img.jane_lathrop,
    region: "California",
  },
  {
    name: "Jayshree Periwal International School",
    photo: img.jayshree,
    region: "Mahapura",
  },

  {
    name: "Ladue Horton Watkins HS",
    photo: img.ladue_horton,
    region: "Missouri",
  },
  {
    name: "Le Quy Don Technical University",
    photo: img.le_quy_don,
    region: "Vietnam",
  },
  {
    name: "Leigh High School",
    photo: img.leigh,
    region: "California",
  },
  {
    name: "Liberty High School",
    photo: img.liberty,
    region: "Texas",
  },
  {
    name: "Lincoln High School",
    photo: img.lincoln,
    region: "Oregon",
  },
  {
    name: "Linnerton High School",
    photo: img.linnerton,
    region: "Maryland",
  },
  {
    name: "Los Altos High School",
    photo: img.los_altos,
    region: "California",
  },
  {
    name: "Mahindra University",
    photo: img.mahindra,
    region: "Hyderabad",
  },
  {
    name: "Mawlana Bhashani Science and Technology University",
    photo: img.mawlana_bhashani,
    region: "Bangladesh",
  },
  {
    name: "Marvin Ridge High School",
    photo: img.marvin_ridge,
    region: "North Carolina",
  },
  {
    name: "Memorial High School",
    photo: img.memorial,
    region: "Texas",
  },
  {
    name: "Milpitas High School",
    photo: img.milpitas,
    region: "California",
  },
  {
    name: "Mission San Jose High School",
    photo: img.mission,
    region: "California",
  },
  {
    name: "Monrovia HS",
    photo: img.monrovia,
    region: "California",
  },
  {
    name: "Monta Vista High School",
    photo: img.monta_vista,
    region: "California",
  },
  {
    name: "Montgomery High School",
    photo: img.montgomery,
    region: "New Jersey",
  },
  {
    name: "Nanjing International School",
    photo: img.nanjing,
    region: "Nanjing",
  },
  {
    name: "Naperville Central High School",
    photo: img.napervillecentral,
    region: "Illinois",
  },
  {
    name: "Newbury Park High School",
    photo: img.newbury_park,
    region: "California",
  },
  {
    name: "Newport High School",
    photo: img.newport,
    region: "Washington",
  },
  {
    name: "North Andover High School",
    photo: img.north_andover,
    region: "Massachusetts",
  },
  {
    name: "North Sydney Boys High School",
    photo: img.northsydney,
    region: "Sydney",
  },
  {
    name: "Northview High School",
    photo: img.northview,
    region: "Georgia",
  },
  {
    name: "Novi High School",
    photo: img.novi,
    region: "Michigan",
  },
  {
    name: "Oak Valley Middle School",
    photo: img.oak_valley,
    region: "California",
  },
  {
    name: "Orange High School",
    photo: img.orange,
    region: "Ohio",
  },
  {
    name: "Panther Creek High School",
    photo: img.panther_creek,
    region: "North Carolina",
  },
  {
    name: "Paul Laurence Dunbar High School",
    photo: img.pld,
    region: "Kentucky",
  },
  {
    name: "PES College of Enginnering",
    photo: img.pes_college_of_engineering,
    region: "India",
  },
  {
    name: "Plaksha University",
    photo: img.plaksha,
    region: "India",
  },
  {
    name: "Pingry School",
    photo: img.pingry,
    region: "New Jersey",
  },
  {
    name: "Pittsford Mendon High School",
    photo: img.mendon,
    region: "New York",
  },
  {
    name: "Po Leung Kuk Ngan Po Ling College",
    photo: img.plknplc,
    region: "Hong Kong",
  },
  {
    name: "Radley College",
    photo: img.radleycollege,
    region: "United Kingdom",
  },
  {
    name: "R.E. Mountain Secondary School",
    photo: img.re_mountain,
    region: "Canada",
  },
  {
    name: "Regis Jesuit High School",
    photo: img.regis,
    region: "Colorado",
  },
  {
    name: "Rickards HS",
    photo: img.rickards,
    region: "Florida",
  },
  {
    name: "Riverhill High School",
    photo: img.riverhill,
    region: "Maryland",
  },
  {
    name: "The Royal Grammar School",
    photo: img.royal_grammar,
    region: "England",
  },
  {
    name: "Saigon South International School",
    photo: img.saigon_south,
    region: "Ho Chi Minh City",
  },
  {
    name: "San Mateo High School",
    photo: img.san_mateo,
    region: "California",
  },
  {
    name: "Scaler School Of Technology",
    photo: img.scaler,
    region: "Bengaluru, India",
  },
  {
    name: "Shady Side Academy",
    photo: img.shady_side,
    region: "Pennsylvania",
  },
  {
    name: "Skyline High School",
    photo: img.skyline,
    region: "Texas",
  },
  {
    name: "Silver Creek High School",
    photo: img.silver_creek,
    region: "California",
  },
  {
    name: "SMIC Private School",
    photo: img.smic,
    region: "Shanghai",
  },
  {
    name: "Shanghai High School",
    photo: img.shanghai,
    region: "Shanghai",
  },
  {
    name: "Stanford Online High School",
    photo: img.stanford_online,
    region: "California",
  },
  {
    name: "Stuyvesant High School",
    photo: img.stuyvesant,
    region: "New York",
  },
  {
    name: "Suncoast Community HS",
    photo: img.suncoast,
    region: "Florida",
  },
  {
    name: "Sydney Grammar School",
    photo: img.sydney_grammar,
    region: "Australia",
  },
  {
    name: "Tenafly High School",
    photo: img.tenafly,
    region: "New Jersey",
  },
  {
    name: "Texas Academy of Mathematics and Science",
    photo: img.tams,
    region: "Texas",
  },
  {
    name: "The Bishop's School",
    photo: img.the_bishops_school,
    region: "California",
  },
  {
    name: "Thomas Jefferson High School for Science and Technology",
    photo: img.tjhsst,
    region: "Virginia",
  },
  {
    name: "Timber Creek Regional High School",
    photo: img.tchs,
    region: "Florida",
  },
  {
    name: "Tompkins HS",
    photo: img.tompkins,
    region: "Texas",
  },
  {
    name: "Trabuco Hills High School",
    photo: img.trabuco,
    region: "California",
  },
  {
    name: "Trinity Valley School",
    photo: img.trinity,
    region: "Texas",
  },
  {
    name: "Troy HS",
    photo: img.troy,
    region: "Michigan",
  },
  {
    name: "Tyee Middle School",
    photo: img.tyee,
    region: "Washington",
  },
  {
    name: "University of Tripoli",
    photo: img.university_of_tripoli,
    region: "Libya",
  },
  {
    name: "University High School",
    photo: img.university,
    region: "California",
  },
  {
    name: "University of Texas at San Antonio",
    photo: img.utsa,
    region: "Texas",
  },
  {
    name: "University of New Hampshire",
    photo: img.new_hampshire,
    region: "New Hampshire",
  },
  {
    name: "UWCSEA Dover Campus",
    photo: img.dover,
    region: "Singapore",
  },
  {
    name: "Ward Melville High School",
    photo: img.ward_melville,
    region: "New Jersey",
  },
  {
    name: "Washington School",
    photo: img.washington,
    region: "New York",
  },
  {
    name: "Wayzata High School",
    photo: img.wayzata,
    region: "Minnesota",
  },
  {
    name: "Wellington College International Shanghai",
    photo: img.wellington,
    region: "Shanghai",
  },
  {
    name: "Westwood High School",
    photo: img.westwood,
    region: "Texas",
  },
  {
    name: "White Station High School",
    photo: img.white_station,
    region: "Tennessee",
  },
  {
    name: "Whitfield HS",
    photo: img.whitfield,
    region: "California",
  },
  {
    name: "Whitney M. Young High School",
    photo: img.whitney,
    region: "Illinois",
  },
  {
    name: "Wissahickon High School",
    photo: img.wissahickon,
    region: "Pennsylvania",
  },
  {
    name: "World Citi Colleges",
    photo: img.world_citi_colleges,
    region: "Philippines",
  },
  {
    name: "Gretchen Whitney High School",
    photo: img.whitney,
    region: "California",
  },
  {
    name: "Windermere High School",
    photo: img.windermere,
    region: "Florida",
  },
  {
    name: "Winston Churchill High School",
    photo: img.winston_churchill,
    region: "Maryland",
  },
  {
    name: "John Champe High School",
    photo: img.john_champe,
    region: "Virginia",
  },
  {
    name: "National Institute of Technology, Agartala",
    photo: img.nit_agartala,
    region: "India",
  },
  {
    name: "Singapore American School",
    photo: img.singapore_american_school,
    region: "Singapore",
  },
  {
    name: "BITS Pilani, K K Birla Goa Campus",
    photo: img.bits_pilani_goa,
    region: "India",
  },
  {
    name: "Solon High School",
    photo: img.solon_high,
    region: "Ohio",
  },
  { name: "Carmel High School", photo: img.carmel_hs, region: "Indiana" },
  { name: "IIT Bombay", photo: img.iit_bombay, region: "Mumbai, India" },
  { name: "IIT Madras", photo: img.iit_madras, region: "India" },
  {
    name: "Motilal Nehru National Institute of Technology",
    photo: img.motilal_nehru_nit,
    region: "India",
  },
  { name: "Aasquare Academy", photo: img.aasquare, region: "California" },
  {
    name: "North Hollywood High School",
    photo: img.north_hollywood_hs,
    region: "California",
  },
  {
    name: "Walt Whitman High School",
    photo: img.walt_whitman_hs,
    region: "Maryland",
  },
  { name: "STEM 6th of October", photo: img.stem_oct, region: "Egypt" },
  {
    name: "James B. Conant High School",
    photo: img.james_b_conant,
    region: "Illinois",
  },
  { name: "Oak Park High School", photo: img.oak_park, region: "California" },
  {
    name: "Allameh Helli High School",
    photo: img.allameh_helli,
    region: "Iran",
  },
  {
    name: "Independence High School",
    photo: img.independence_va,
    region: "Virginia",
  },
  {
    name: "University of Central Asia",
    photo: img.u_central_asia,
    region: "Kyrgyzstan",
  },
  { name: "California High School", photo: img.cali_hs, region: "California" },
  { name: "McNeil High School", photo: img.mcneil, region: "Texas" },
  { name: "Iowa West City High School", photo: img.iowa_west, region: "Iowa" },
  {
    name: "Bangladesh Army International University of Science and Technology",
    photo: img.bangl_army,
    region: "Bangladesh",
  },
  {
    name: "Glenbrook South High School",
    photo: img.glenbrook_south,
    region: "Illinois",
  },
  {
    name: "Williamsville East High School",
    photo: img.williamsville_east,
    region: "New York",
  },
  {
    name: "Woodinville High School",
    photo: img.woodinville,
    region: "Washington",
  },
  {
    name: "Nguyen Thien Thanh High School for Gifted Student",
    photo: img.nguyen_thien_thanh,
    region: "Vietnam",
  },
  {
    name: "Mount Hebron High School",
    photo: img.mount_hebron,
    region: "Maryland",
  },
  {
    name: "DuPont Manual High School",
    photo: img.dupont_manual,
    region: "Kentucky",
  },
  {
    name: "Oxford High School",
    photo: img.oxford_mississippi,
    region: "Mississippi",
  },
  {
    name: "National Institute of Technology, Calicut",
    photo: img.nit_calicut,
    region: "India",
  },
  { name: "Centreville High School", photo: img.centreville, region: "Virginia" },
  { name: "Newton North High School", photo: img.newton_north, region: "Massachusetts" },
  { name: "Nova High", photo: img.nova_high, region: "Florida" },
  { name: "Delhi Technological University", photo: img.delhi_tech, region: "New Delhi" },
  { name: "Stephen Lewis Secondary School", photo: img.stephen_lewis_secondary, region: "Canada" },
  { name: "Ballantyne Ridge High School", photo: img.ballantyne, region: "North Carolina" },
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
