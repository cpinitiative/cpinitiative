import Header from "../components/Header"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { cn } from "../util/tailwindMerge"
import Link from "next/link"
import Image from "next/image"
import clipMascot from "../images/tournament/clipped_mascot.png"
import cpithink from "../images/tournament/cpithink.png"
import prizes from "../images/tournament/prizes.png"
const CONTEST_TIME_MILLISECONDS = 1709402400000
const CONTEST_REGISTRATION_FORM_LINK = "https://forms.gle/4vHJeGiYGLgHRv4E6"
const CONTEST_EDITORIAL_FILE = "tournament_2024_editorial.pdf"
const CONTEST_SOLUTIONS_FILE = "tournament_2024_solutions.zip"

import waveSVG from "../images/wave.svg"


const tournament_info = {
  standard: {
    name: "Standard",
    description:
      "For competitors at the USACO Bronze or Silver level, and rated under 1600 on Codeforces.",
    prizes: [
      "1st Place: $150 USD",
      "2nd Place: $100 USD",
      "3rd Place: $50 USD",
      "4th-8th Place: $15 USD",
    ],
  },
  advanced: {
    name: "Advanced",
    description:
      "For competitors at the USACO Gold or Platinum level, or rated 1600 and over on Codeforces.",
    prizes: [
      "1st Place: $300 USD",
      "2nd Place: $200 USD",
      "3rd Place: $100 USD",
      "4th-8th Place: $15 USD",
    ],
  },
}
function FAQCard({
  question,
  answer,
}: {
  question: string | JSX.Element
  answer: string | JSX.Element
}) {
  return (
    <div>
      <div className="p-12  bg-[#EBE7FF] rounded-xl ">
        {" "}
        <div className="ml-2 font-bold  text-[#8976FF] flex items-center justify-center">
          {question}
        </div>
        <div
          className={
            "font-medium text-[#464646] md:text-2xl text-xl text-center mt-4"
          }
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

function Card({
  className,
  division,
}: {
  className?: string
  division: keyof typeof tournament_info
}) {
  const cardInformation = tournament_info[division]
  return (
    <div
      className={cn(
        "h-auto bg-white text-white border rounded-xl container shadow-lg px-6 py-6 my-6",
        className
      )}
    >
      <h2 className="text-4xl leading-none font-bold tracking-tight text-white">
        {cardInformation.name} Division
      </h2>
      <p className="mt-2 text-lg leading-7 py-2">
        {cardInformation.description}
      </p>
      <h3 className="text-2xl tracking-tight font-extrabold leading-none text-white pt-6 pb-2">
        Winners
      </h3>
      <ul className="pl-4">
        {cardInformation.prizes.map((x, index) => (
          <li key={x}>
            <p className={"text-lg"}>{x}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Tournament() {

  return (
    <Layout>
      <SEO
        title="USACO Guide Informatics Tournament"
        description="An annual precollege programming contest held by the Competitive Programming Initiative to reward growth in problem-solving and computer science."
      />

      <Header dark noBanner />

        <main className="min-h-screen">
          <div className="flex-1  bg-gray-900 relative pb-24 md:pb-40 lg:pb-48 xl:pb-72 2xl:pb-96 flex flex-col lg:flex-row items-center justify-evenly animate mt-16 text-gray-300">
            <div className="flex flex-col lg:mb-16 mt-6 lg:mt-12">
              <h1 className="text-4xl text-white md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight font-bold mx-auto pt-12 text-center">
                <span className=" from-purple-700 to-blue-300 bg-gradient-to-b text-transparent bg-clip-text">
                  USACO.Guide
                </span>
                <br /> Informatics Tournament
              </h1>
              <h2 className="text-lg text-gray-500 font-semibold md:text-xl lg:text-2xl pt-4 pb-2 py-4 mx-auto text-center">
                Saturday, March 2nd, 2024 <br /> 10 AM - 1 PM PST
              </h2>
              <div className="flex flex-col items-stretch  ml-auto mr-auto">
                <div className="flex w-full justify-around gap-x-2 mx-auto">
                  <Link
                    className="text-center flex-grow mx-auto text-white bg-[#8976ff]/100 rounded-lg focus:translate-y-1 hover:underline transition-all duration-150 mt-4 2xl:text-xl lg:text-lg text-base px-8 py-2"
                    href="/tournament/2024-results"
                  >
                    Results &rarr;
                  </Link>
                  <Link
                    className="text-center mx-auto text-white bg-[#8976ff]/40 rounded-lg focus:translate-y-1 hover:underline transition-all duration-150 mt-4 2xl:text-xl lg:text-lg text-base px-8 py-2"
                    href={"https://codeforces.com/contests/105009"}
                  >
                    View problems &rarr;
                  </Link>
                </div>
                <div className=" flex justify-around gap-x-2 w-fit mx-auto my-2">
                  <Link
                    href={"/" + CONTEST_EDITORIAL_FILE}
                    className="text-center mx-auto text-white bg-[#8976ff]/60 rounded-lg focus:translate-y-1 hover:underline transition-all duration-150 2xl:text-xl lg:text-lg text-base px-8 py-2"
                  >
                    View Editorial &rarr;
                  </Link>
                  <Link
                    href={"/" + CONTEST_SOLUTIONS_FILE}
                    className="text-center mx-auto text-white bg-[#8976ff]/80 rounded-lg focus:translate-y-1 hover:underline transition-all duration-150 2xl:text-xl lg:text-lg text-base px-8 py-2"
                  >
                    Download Solutions &rarr;
                  </Link>
                </div>
              </div>
              
              <Link
                className="font-medium underline underline-offset-4 hover:opacity-60 mx-auto pt-2 transition-opacity duration-150"
                href={"https://discord.gg/SutDSVX6Zt"}
              >
                Join our Discord Server &rarr;
              </Link>
            </div>
            <div className="flex-1 bg-gray-900 flex flex-col max-w-fit">
              {/* <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl px-10 text-center pt-6 pb-6 py-4">
                        The USACO.Guide Informatics Tournament is a programming contest for precollege students hosted by the USACO.Guide and CP Initiative.
                    </h2> */}
            {/*
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mx-auto text-center max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-4">
                        {timeLeftString(timeLeft)}
                    </h2> */}
            <Image
              width={600}
              height={600}
              className="select-none  hover:scale-105 duration-300 transition-all"
              src={clipMascot}
              alt="Mascot!"
            />
            {/* <section className="flex flex-col md:flex-row gap-x-4">
                        <Link className="inline-flex sm:text-lg py-3 px-6 sm:py-4 mt-6 sm:px-8 rounded-md shadow bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-900" href={CONTEST_REGISTRATION_FORM_LINK}>
                            Register Now &rarr;
                        </Link>
                        <Link className="inline-flex sm:text-lg py-3 px-6 sm:py-4 mt-6 sm:px-8 rounded-md shadow bg-gradient-to-r from-blue-700 to-blue-900 text-white font-medium hover:from-blue-800 hover:to-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-900" href={"https://discord.gg/SutDSVX6Zt"}>
                            Join Discord Server &rarr;
                        </Link>
                    </section> */}
          </div>
          <Image
            className="absolute bottom-0 w-full "
            src={waveSVG}
            alt="Waves for bottom of hero section"
          />
        </div>

        <section className="flex  flex-col lg:flex-row my-12 mx-12 sm:mx-24">
          <div className="lg:hidden flex xl:flex items-center justify-center">
            <Image src={cpithink} alt="CPI!" className="md:-ml-0 -ml-4" />
          </div>
          <br></br>
          <div className="lg:basis-1/3 pb-8 lg:pb-0 font-medium mx-auto text-xl md:text-2xl ">
            The USACO.Guide Informatics Tournament is a programming contest for
            precollege students hosted by the{" "}
            <a
              href="https://usaco.guide"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-700"
            >
              USACO.Guide
            </a>{" "}
            and{" "}
            <Link href="/" className="font-bold text-[#8976FF]">
              CP Initiative
            </Link>
            .
          </div>
          <div className="lg:basis-1/3   font-medium mx-auto text-xl md:text-2xl text-center">
            The contest is over now, <br/> check out the results {" "}
            <a
              href="/tournament/2024-results"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-700"
            >
            here
            </a>
            .
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-400/20 mb-12" />
        <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-purple-400 to-blue-600 bg-clip-text text-transparent">
          Prizes
        </h1>

        <section className="flex  flex-col bg-white 2xl:flex-row justify-evenly mx-auto items-center px-6 md:px-12 xl:px-36 lg:px-24 lg:gap-x-12 gap-x-6 md:gap-x-8">
          <div>
            <Card
              key={"standard"}
              className=" border-0 bg-gradient-to-tr to-[#83a0f9] from-[#113399] from-10% via-80% to-90%"
              division="standard"
            />
            <Card
              key={"advanced"}
              className=" border-0 bg-gradient-to-tr from-[#6a5cbf] to-[#8570FA]/50"
              division="advanced"
            />
          </div>
          <div>
            <Image
              src={prizes}
              alt="CPI!"
              className="2xl:block hidden md:-ml-0 -ml-4 max-w-xl"
            />
          </div>
        </section>
        <section className="flex items-center container mx-auto text-justify px-6 bg-white flex-col">
          <h2 className="text-5xl md:text-6xl lg:text-7xl pb-6 mt-12 tracking-tight font-extrabold bg-gradient-to-tr from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Contest Format
          </h2>
          <div className="mx-8 w-full">
            <div className="mx-8  ">
              <div className="bg-[#EBE7FF]  px-8 text-center md:text-2xl text-xl py-6  rounded-lg">
                <span className="font-bold">Only precollege students</span> are
                eligible for prizes but anyone can participate. <br />
                <br />
                This is a solo contest. No teams!
              </div>
            </div>
          </div>
          <div className="mx-8 mt-6 grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 space-y-8 ">
            <div className="space-y-8">
              <FAQCard
                question={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
                answer={
                  <>
                    There will be both a standard and advanced division; the
                    contest will last <b> 3 hours</b> and each division will
                    have
                    <b> 8 problems</b>.
                  </>
                }
              />

              <FAQCard
                question={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-48 h-24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
                answer={
                  <>
                    You may use any prewritten code before the contest and
                    online content published prior to the start of the contest.
                    <br />
                    <br />
                    However, you <b className="text-[#7544FF]">may not</b>{" "}
                    collaborate with other people during the contest.
                  </>
                }
              />
            </div>
            <div className="space-y-8 justify-evenly">
              {" "}
              <FAQCard
                question={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-24 h-24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
                answer={
                  <>
                    If you are <b className="text-[#0000DE]">1600+</b> on
                    Codeforces or <b className="text-[#e7a138]">Gold+</b> in
                    USACO we require you to participate in the advanced
                    division. <br />
                    <br />
                    Otherwise we recommend you to participate in the beginner
                    division.
                  </>
                }
              />
              <FAQCard
                question={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    className="w-24 h-24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-[#AE0F0A]"
                      d="M22.5,10.5c0.8,0,1.5,0.7,1.5,1.5v7.5c0,0.8-0.7,1.5-1.5,1.5h-3c-0.8,0-1.5-0.7-1.5-1.5V12c0-0.8,0.7-1.5,1.5-1.5H22.5z"
                    />
                    <path
                      className="fill-[#4F81C1]"
                      d="M13.5,3C14.3,3,15,3.7,15,4.5v15c0,0.8-0.7,1.5-1.5,1.5h-3C9.7,21,9,20.3,9,19.5v-15C9,3.7,9.7,3,10.5,3H13.5z"
                    />
                    <path
                      className="fill-[#FFD400]"
                      d="M4.5,7.5C5.3,7.5,6,8.2,6,9v10.5C6,20.3,5.3,21,4.5,21h-3C0.7,21,0,20.3,0,19.5V9c0-0.8,0.7-1.5,1.5-1.5H4.5z"
                    />
                  </svg>
                }
                answer={
                  <>
                    The contest will be hosted on{" "}
                    <a
                      className="font-medium underline underline-offset-4 hover:opacity-60 mx-auto   transition-opacity duration-150"
                      target="_blank"
                      rel="noreferrer"
                      href={"https://codeforces.com"}
                    >
                      Codeforces
                    </a>
                    , so make sure you have an account!
                  </>
                }
              />
            </div>
          </div>
          <div className="mx-8 w-full mt-6">
            <div className="mx-8  ">
              <div className="bg-[#EBE7FF]  px-8 text-center md:text-xl text-lg py-6  rounded-lg">
                We reserve the right to disqualify and/or remove from prize
                consideration participants who intentionally participate in
                divisions with problem difficulties that are too low for the
                skill level of the participant. We do not tolerate those who
                attempt to undermine the fairness of the competition.
              </div>
            </div>
          </div>
        </section>
        <h1 className="text-center mt-16 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-purple-400 to-blue-600 bg-clip-text text-transparent">
          Questions?
        </h1>
        <h2 className="text-xl lg:text-3xl text-center font-medium py-6 tracking-tight">
          Join our
          <span className="bg-blue-300 bg-opacity-30 transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-md px-2 mx-2">
            <Link href="https://discord.gg/SutDSVX6Zt">Discord Server</Link>
          </span>{" "}
          and ask in the
          <span className="bg-blue-300 bg-opacity-30 transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-md px-2 mx-2">
            <Link href="https://discord.com/channels/1198424031469261003/1198425276779077682">
              #questions
            </Link>
          </span>
          channel!
        </h2>
      </main>
    </Layout>
  )
}

function timeLeftString(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000) % 60
  const minutes = Math.floor(milliseconds / 60000) % 60
  const hours = Math.floor(milliseconds / 3600000) % 24
  const days = Math.floor(milliseconds / 86400000)
  return [days, hours, minutes, seconds]
  // return `${days} day${days === 1 ? '' : 's'}, ${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, and ${seconds} second${seconds === 1 ? '' : 's'} until the start of the contest.`;
}
// 