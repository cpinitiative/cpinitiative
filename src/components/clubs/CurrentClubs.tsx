import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ClubCard = ({ name, photo, region }) => {
  return (
    <li className="relative block w-full rounded-lg overflow-hidden relative">
        <Img
          className="object-cover pointer-events-none aspect-w-10 aspect-h-6"
          fixed={photo}
          alt={name}
          style={{ width: "100%", height: "100%" }}
        />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-4 pb-4 sm:px-6 sm:pb-6 pt-12">
        <p className="mt-2 block text-2xl font-bold text-white truncate pointer-events-none">{name}</p>
        <p className="block text-lg font-medium text-gray-200 pointer-events-none">{region}</p>
      </div>
    </li>
  );
}

const clubs: {
  name: string,
  photo: string,
  region: string,
}[] = [
  {
    name: "Monta Vista High School",
    photo: "monta_vista",
    region: "Bay Area"
  },
  {
    name: "Branham High School",
    photo: "branham",
    region: "Bay Area"
  }
];


export default function CurrentClubs() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "club_images" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 702, height: 421, cropFocus: CENTER, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
            name
          }
        }
      }
    }
  `)

  const getClubPhoto = (photoName: string) => {
    return (data as any).allFile.edges.find(
      x => x.node.name === photoName
    ).node.childImageSharp.fixed;
  }

  return (
    <div>
      <div className="relative bg-purple-800">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=Wq5TfXBKOq&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
               alt="" />
          <div className="absolute inset-0 bg-purple-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Current Clubs</h1>
          <p className="mt-6 text-xl text-purple-100 max-w-3xl">
            Join our rapidly expanding community of competitive programming clubs from all across the world!
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <ul role="list"
            className="grid md:grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 xl:gap-x-8">
          {clubs.map(club => (
            <ClubCard key={club.name} name={club.name} photo={getClubPhoto(club.photo)} region={club.region} />
          ))}
        </ul>
      </div>
    </div>
  )
}