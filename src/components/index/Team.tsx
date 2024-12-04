import * as React from "react"
import { members, Member } from "./TeamData"
import { isMobile } from "react-device-detect"
import { MemberCardSmall, MemberCardLarge } from "./TeamMemberCards"

function SmallMemberGrid({ members }: { members: Member[] }) {
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
function LargeMemberGrid({ members }: { members: Member[] }) {
  return (
    <ul
      role="list"
      className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-left"
    >
      {members.map((member, i) => (
        <MemberCardLarge member={member} key={i} />
      ))}
    </ul>
  )
}
function MemberGrid({ members }: { members: Member[] }) {
  return isMobile ? (
    <LargeMemberGrid members={members} />
  ) : (
    <SmallMemberGrid members={members} />
  )
}

export default function Team() {
  return (
    <div className="bg-white text-center">
      <div className="py-12 px-6 max-w-screen-xl mx-auto lg:px-8 lg:py-18">
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
        <h3 className="text-2xl font-bold mt-[5rem] mb-7">Board</h3>
        <MemberGrid members={members.board} />
        <h3 className="text-2xl font-bold mt-[5rem] mb-7">
          Former Team Members
        </h3>
        <MemberGrid members={members.formerMembers} />
      </div>
    </div>
  )
}
