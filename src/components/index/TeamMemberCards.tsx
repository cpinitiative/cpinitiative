import Image from "next/legacy/image"
import React from "react"
import { Member, socialLinks } from "./TeamData"

function SocialLinks({ person, center }: { person: Member; center?: boolean }) {
  const socialLinkComponents = (
    Object.keys(socialLinks) as (keyof typeof socialLinks)[]
  )
    .map((social, i) => {
      let url = person[social]
      if (url) {
        const urlFunction = socialLinks[social].url //have to do this so TS doesn't complain that .url doesn't exist even after checking it
        if (urlFunction) url = urlFunction(url)
        return (
          <li key={i}>
            <a
              target="_blank"
              href={url}
              rel="noreferrer"
              className="inline-block hover:text-gray-500 text-gray-700"
            >
              {socialLinks[social].icon}
            </a>
          </li>
        )
      } else {
        return null
      }
    })
    .flatMap(val => (!!val ? [val] : []))
  if (socialLinkComponents.length) {
    return (
      <ul className={`flex gap-3 ${center ? "justify-center" : ""}`}>
        {socialLinkComponents}
      </ul>
    )
  } else {
    return null
  }
}
export const MemberCardSmall = ({ member }: { member: Member }) => (
  <li
    key={member.name}
    className="relative group flex justify-center rounded-t-lg border border-transparent 
  hover:bg-gray-100 hover:border-gray-200  
  pointer-events-none hover:pointer-events-auto pt-8 pb-2"
  >
    <div className="gap-2 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden relative lg:w-20 lg:h-20 pointer-events-auto">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          src={member.photo}
          alt={member.name}
          placeholder="blur"
          sizes="112px"
        />
      </div>
      <p className="text-l font-medium whitespace-nowrap">{member.name}</p>

      {/* Pop-out component */}
      <div
        className="absolute -top-[-100%] hidden group-hover:block 
    bg-gray-100 border border-gray-200 border-t-0 box-content 
    w-full rounded-b-lg z-20"
      >
        <div className="flex flex-col gap-2 px-5 pb-5">
          <SocialLinks person={member} center />
          <div className="flex gap-1 flex-wrap">
            {member.titles.map(title => (
              <span
                key={title}
                className="text-sm whitespace-nowrap inline-flex 
                  items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium"
              >
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </li>
)
export const MemberCardLarge = ({ member }: { member: Member }) => {
  return (
    <li
      key={member.name}
      className="flex rounded-lg border bg-gray-100 shadow transform border-gray-200 hover:shadow-lg px-6 py-5"
    >
      <div className="sm:space-x-4 relative flex items-center space-x-3">
        <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden relative lg:w-28 lg:h-28">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            src={member.photo}
            alt={member.name}
            placeholder="blur"
            sizes="112px"
          />
        </div>
        <div className="flex-1 min-w-0 space-y-3">
          <span className="" aria-hidden="true"></span>
          <p className="text-xl font-medium">{member.name}</p>
          <div className="-mx-0.5">
            {member.titles.map(title => {
              return title !== "" ? (
                <span
                  key={title}
                  className="text-sm whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-200 font-medium"
                >
                  {title}
                </span>
              ) : (
                ""
              )
            })}
          </div>

          <SocialLinks person={member} />
        </div>
      </div>
    </li>
  )
}
