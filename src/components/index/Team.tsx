import * as React from "react"
import Image from "next/image"
import { members, Member } from "./TeamData"
const socialLinks = {
  email: {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  facebook: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  linkedin: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1792 1792">
        <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
      </svg>
    ),
  },
  github: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  codeforces: {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  website: {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    ),
  },
  youtube: {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
        ></path>
      </svg>
    ),
  },
  instagram: {
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
}
function GetSocialLinks(person: Member) {
  return (
    <div className="-mr-1">
      <ul className="flex gap-3">
        {person.linkedin && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={person.linkedin}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.linkedin.icon}
              </a>
            </li>
          </div>
        )}
        {person.youtube && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={person.youtube}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.youtube.icon}
              </a>
            </li>
          </div>
        )}
        {person.github && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={`https://github.com/${person.github}`}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.github.icon}
              </a>
            </li>
          </div>
        )}
        {person.codeforces && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={`https://codeforces.com/profile/${person.codeforces}`}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.codeforces.icon}
              </a>
            </li>
          </div>
        )}
        {person.website && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={person.website}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.website.icon}
              </a>
            </li>
          </div>
        )}
        {person.email && (
          <div>
            <li className="mr-1">
              <a
                href={`mailto:${person.email}`}
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.email.icon}
              </a>
            </li>
          </div>
        )}
        {person.instagram && (
          <div>
            <li className="mr-1">
              <a
                target="_blank"
                href={`https://instagram.com/${person.instagram}`}
                rel="noreferrer"
                className="inline-block hover:text-gray-500 text-gray-700"
              >
                {socialLinks.instagram.icon}
              </a>
            </li>
          </div>
        )}
      </ul>
    </div>
  )
}
const MemberCardSmall = ({ member }: { member: Member }) => (
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
          <div className="m-auto">{GetSocialLinks(member)}</div>
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
function MemberGrid({ members }: { members: Member[] }) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]"
    >
      {members.map((member, i) => (
        <MemberCardSmall member={member} key={i} />
      ))}
    </ul>
  )
}

export default function Team() {
  return (
    <div className="bg-white text-center">
      <div className="py-12 px-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:py-18">
        <div className="mb-8 space-y-5 sm:space-y-4">
          <h2 className="font-extrabold tracking-tight text-4xl">
            Meet our team
          </h2>
          <p className="text-xl text-gray-500">
            Comprised of USACO Finalists and top USACO competitors, our team is
            committed to increasing participation in competitive programming.
          </p>
        </div>
        <MemberGrid members={members.activePeople} />
        <h3 className="text-2xl font-bold mt-[5rem] mb-7">
          Former Team Members
        </h3>
        <MemberGrid members={members.formerMembers} />
      </div>
    </div>
  )
}
