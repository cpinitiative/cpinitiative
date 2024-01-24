import { AnnouncementInfo } from "./models/announcement";
import * as React from 'react';
import { MDXRemote } from "next-mdx-remote";
import Announcement from "./Announcement";


export default function Announcements({
  announcements,
}: {
  announcements: AnnouncementInfo[];
}) {
  announcements.sort((a, b) => {return ((new Date(b.frontmatter.date)).getTime() - (new Date(a.frontmatter.date)).getTime())});
  return (
    <div className="flex flex-col md:px-8 flex-grow pt-0 h-96 w-full">
      <div className="overflow-y-scroll grid grid-cols-1 gap-4 flex-grow">
        {announcements.map(announcement => {
        return (
        <div
          className="bg-white shadow transition sm:rounded-lg pb-4"
          key={announcement.frontmatter.id}
        >
          {/* hover:shadow-lg */}
          <div className="px-4 py-5 sm:p-6">
            {/* cursor-pointer */}
            <p className="text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
              {announcement.frontmatter.date}
            </p>
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-dark-high-emphasis">
              {announcement.frontmatter.title}
            </h3>
            <div className="mdx mt-3 text-base leading-6 text-gray-500 dark:text-dark-med-emphasis -mb-4">
              <Announcement announcement={announcement}/>
            </div>
            {/*<div className="mt-3">*/}
            {/*  <span className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">*/}
            {/*    Continue Reading*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>
        </div>
      )})}
      </div>
      </div>
  );
}

