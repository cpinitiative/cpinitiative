import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Card from "../components/index/Card"
import Header from "../components/Header"
import Newsletter from "../components/index/Newsletter"
import Team from "../components/index/Team"
import Sponsor from "../components/index/Sponsor"
import Announcements from "../components/announcements/Announcements"
import { AnnouncementInfo } from "../components/announcements/models/announcement"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
import { InferGetStaticPropsType } from "next"
// console.log("hello world")

function IndexPage(source: InferGetStaticPropsType<typeof getStaticProps>) {
  return (<Layout>
    <SEO title={null} />
    <div className="bg-gray-100">
      <Header noBanner/>
      <div className="bg-purple-900 sm:-mb-8">
        {/*Banner Padding*/}
        {/*<div className="h-12" />*/}

        <div className="h-36 sm:h-48" />
        <div className="max-w-screen-xl px-4 sm:px-6 mx-auto sm:-mb-8">
          <h1 className="text-4xl tracking-tight leading-10 sm:leading-none font-extrabold text-white sm:text-6xl lg:text-5xl xl:text-6xl">
            Competitive Programming Initiative
          </h1>
          <p className="mt-6 mb-6 text-purple-200 text-xl">
            We promote competitive programming among students through resources,
            classes, outreach, and contests.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-32 sm:h-64 w-full"
          preserveAspectRatio="none"
        >
          <path
            className="text-gray-100"
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,181.3C672,203,768,245,864,245.3C960,245,1056,203,1152,165.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="max-w-screen-xl px-4 sm:px-6 mx-auto pb-12 sm:pb-16 flex flex-col md:flex-row">
        <div className="flex-[1_0_0px] items-stretch">
          <h1 className="text-2xl tracking-tight leading-10 sm:leading-none font-extrabold text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-12">
            Our Initiatives
          </h1>
          <div className="grid grid-cols-1 gap-8 h-min grow-0" id="cards">
            <Card
              title="USACO Guide"
              borderColor="border-blue-600"
              url="https://usaco.guide/"
              external
            >
              The USACO Guide is a free collection of curated, high-quality
              resources to take you from Bronze to Platinum and beyond.
            </Card>
            <Card title="Classes" borderColor="border-orange-600" url="/classes">
              Learn USACO through high-quality classes with vetted, experienced
              instructors and a curated curriculum.
            </Card>
            <Card title="Clubs" borderColor="border-green-600" url="/clubs">
              Running a CP/CS club? Get access to curriculum, problemsets, and
              contests tailored for school clubs!
            </Card>
            <Card
              title="Contests"
              borderColor="border-purple-600"
              url="/contests"
            >
              A selection of programming contests targeted towards pre-college
              students.
            </Card>
            <Card title="Workshops" borderColor="border-cyan-600" url="/workshop">
              Join free online webinars with useful information from panels,
              interviews, and events about competitive programming!
            </Card>
          </div>
        </div>
        <div className="flex-[1_0_0px] pt-8 md:pt-0 flex flex-col">
          <h1 className="pr-0 md:pr-8 text-2xl text-right tracking-tight leading-10 sm:leading-none font-extrabold text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl mb-6 sm:mb-12">
            Announcements
          </h1>
          <Announcements announcements={source.list} />
        </div>
          
      </div>
    </div>
    <Newsletter />
    <Sponsor />
    <Team />
  </Layout>
)
}


export async function getStaticProps(
  ) {
    const data = fs.readdirSync('src/components/announcements/data')
    const list = await Promise.all(data.map(async (file)=> {
      const mdxSource = await serialize(fs.readFileSync('src/components/announcements/data/'+file), { parseFrontmatter: true });
      return mdxSource;
    }))
    return {
      props: {
        list: list
      }
    }
  }
  

export default IndexPage
