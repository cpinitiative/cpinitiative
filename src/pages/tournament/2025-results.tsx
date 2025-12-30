import Header from "../../components/Header"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Link from "next/link"
import Image from "next/image"
import mascotImage from "../../images/tournament/mascot.webp"
import cpithink from "../../images/tournament/cpithink.png"

export default function Results() {
  return (
    <Layout>
      <SEO
        title="USACO Guide Informatics Tournament: 2024 Results"
        description="An annual precollege programming contest held by the Competitive Programming Initiative to reward growth in problem-solving and computer science."
      />

      <Header dark noBanner />

      <main className="min-h-screen">
        <div className="flex-1  bg-gray-900 relative pb-4 md:pb-6 lg:pb-8  flex flex-col lg:flex-row items-center justify-evenly animate mt-16 text-gray-300">
          <div className="flex flex-col lg:mb-16 mt-6 lg:mt-12">
            <h1 className="text-4xl text-white md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight font-bold mx-auto pt-12 text-center">
              <span className=" from-purple-700 to-blue-300 bg-gradient-to-b text-transparent bg-clip-text">
                USACO.Guide
              </span>
              <br /> Informatics Tournament
            </h1>
            <h1 className="text-2xl text-gray-500 font-semibold md:text-3xl lg:text-4xl pt-4 pb-2 py-4 mx-auto text-center">
              2025 Results
            </h1>
            <div className="flex justify-around gap-x-4 w-fit mx-auto">
              <Link
                className="mx-auto text-white rounded-xl focus:translate-y-1 hover:underline transition-all duration-150 mt-4 lg:text-xl px-8 py-3"
                href={"https://codeforces.com/gym/105786"}
              >
                View problems &rarr;
              </Link>
              <Link
                className="mx-auto text-white rounded-xl focus:translate-y-1 hover:underline transition-all duration-150 mt-4 lg:text-xl px-8 py-3"
                href={"https://discord.gg/SutDSVX6Zt"}
              >
                Join our Discord Server &rarr;
              </Link>
            </div>
            <div className="-mt-3 flex justify-around gap-x-4 w-fit mx-auto">
              <Link
                className="mx-auto text-white rounded-xl focus:translate-y-1 hover:underline transition-all duration-150 mt-4 lg:text-xl px-8 py-3"
                href={
                  "https://www.dropbox.com/scl/fo/yon7q9004ox0oh3otxtok/AEWNmBQydRUAniWjiRiKQdM?rlkey=hx7h5roz0czfr0ugzc5jurpvp&st=zkd4agep&dl=0"
                }
              >
                View Editorial &rarr;
              </Link>
            </div>
          </div>
        </div>
        <section className="flex flex-col bg-white 2xl:flex-row justify-evenly mx-auto items-center px-6 md:px-12 xl:px-36 lg:px-24 lg:gap-x-12 gap-x-6 md:gap-x-8">
          <div className="font-bold text-xl lg:text-xl 2xl:text-3xl text-center h-auto bg-white text-white rounded-xl container shadow-lg px-4 py-4 xl:px-6 xl:py-6 my-4 xl:my-6 border-0 bg-gradient-to-b to-[#8189C1] from-[#8065C8] from-10% via-80% to-90%">
            $1000+ <br /> in Prizes
          </div>
          <div className="font-bold text-xl lg:text-xl 2xl:text-3xl text-center h-auto bg-white text-white rounded-xl container shadow-lg px-4 py-4 xl:px-6 xl:py-6 my-4 xl:my-6 border-0 bg-gradient-to-b to-[#8189C1] from-[#8065C8] from-10% via-80% to-90%">
            420+ <br /> Participants
          </div>
          <div className="font-bold text-xl lg:text-xl 2xl:text-3xl text-center h-auto bg-white text-white rounded-xl container shadow-lg px-4 py-4 xl:px-6 xl:py-6 my-4 xl:my-6 border-0 bg-gradient-to-b to-[#8189C1] from-[#8065C8] from-10% via-80% to-90%">
            30+ <br /> Countries
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-400/20 mb-12" />
        <section className="flex  flex-col lg:flex-row my-12 mx-12 sm:mx-24">
          <div className="font-medium flex flex-col items-center mx-auto text-2xl md:text-2xl ">
            Advanced Division Winners
            <Image height={200} width={200} src={mascotImage} alt="" />
          </div>
          <div className="md:basis-1/2 lg:mt-0 mt-8 text-center">
            <div className="text-2xl pb-2">
              1st place: Nivedhana Ramachandran (nivedhana)
            </div>
            <div className="flex flex-row justify-center pb-2 text-xl">
              <div className="pr-4">2nd place: Rohin Garg (PurpleCrayon)</div>
              <div>3rd place: Botao Yuan (z)</div>
            </div>
            <div className="text-lg">
              4th place: Brian Xue (hyforces), 5th place: Brian Law (lwm7708),
              6th place: Sathvik Prasanna (scotchtape13), 7th place: Tony Zhu
              (tony1234), 8th place: Kirill Kardash (k1r1t0)
            </div>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-400/20 mb-12" />
        <section className="flex flex-col my-12 mx-12 sm:mx-24 reverse lg:flex-row-reverse">
          <div className="font-medium flex flex-col items-center mx-auto text-2xl md:text-2xl ">
            Standard Division Winners
            <Image height={200} width={200} src={cpithink} alt="" />
          </div>
          <div className="md:basis-1/2 lg:mt-0 mt-8 text-center">
            <div className="text-2xl pb-2">
              1st place: Maite Carrera (ratomcito) <br />
            </div>
            <div className="flex flex-col justify-center pb-1 text-xl">
              <div className="pr-4">
                2nd place: Anonymous (lmaobruh) <br />
              </div>
              <div>3rd place: Suresh Kumar Nenavath (n_suresh)</div>
            </div>
            <div className="text-lg">
              4th place: Justin Chen (scooter), 5th place: Ahmed Mansoor
              (amansoor), 6th place: Nico Young (NicoN9), 7th place: Aaroosh R.
              (arstag), 8th place: Wasif Shahzad (wasif_shahzad)
            </div>
          </div>
        </section>
        <div className="w-full h-0.5 bg-gray-400/20 mb-12" />
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
