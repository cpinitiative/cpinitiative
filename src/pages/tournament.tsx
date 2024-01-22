import { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { cn } from "../util/tailwindMerge";
import Link from "next/link";
import { placeholder } from "../components/contests/images";
import Image from "next/image";
import mascotImage from "../images/mascot.png";

const CONTEST_TIME_MILLISECONDS = 1709402400000;
const CONTEST_REGISTRATION_FORM_LINK = "https://forms.gle/4vHJeGiYGLgHRv4E6";

const tournament_info = {
    'standard': {
        name: 'Standard',
        description: 'Covers topics through USACO Silver and for users rated under 1600 on Codeforces.',
        prizes: [
            '1st. $150 USD',
            '2nd. $100 USD',
            '3rd. $50 USD',
            '4th-8th. $15 USD',
        ]
    },
    'advanced': {
        name: 'Advanced',
        description: 'Covers topics through USACO Platinum & above or for users rated 1600 and over on Codeforces.',
        prizes: [
            '1st. $300 USD',
            '2nd. $200 USD',
            '3rd. $100 USD',
            '4th-8th. $15 USD',
        ]
    }
}

function Card({className, division}: {className?: string, division: keyof typeof tournament_info}) {
    const cardInformation = tournament_info[division];
    return <div className={cn("h-fit bg-white border rounded-xl container px-6 py-6 my-6", className)}>
        <h2 className="text-4xl leading-none font-semibold text-white">{cardInformation.name} Division</h2>
        <p className="mt-2 text-lg leading-7 text-gray-200 py-2">
            {cardInformation.description}
        </p>
        <h3 className="text-2xl leading-none text-white font-semibold pt-6 pb-2">
            Prizes
        </h3>
        <ul className="pl-4">
            {cardInformation.prizes.map((x, index) => (
                <li key={x}>
                    <p className={"text-lg"}>{x}</p>
                </li>
            ))}
        </ul>
    </div>
}

export default function Tournament() {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(CONTEST_TIME_MILLISECONDS - Date.now());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return <Layout>
        <SEO 
            title="USACO Guide Informatics Tournament"
            description="An annual precollege programming contest held by the Competitive Programming Initiative to reward growth in problem-solving and computer science."
        />

        <Header dark noBanner />
        
        <main className="bg-gray-900 min-h-screen">
            <div className="flex-1 flex animate flex-col items-center mt-16 text-slate-300"> 
                <h1 className="text-3xl animate-[backInDown_1s_ease-out_1] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mx-auto pt-12 text-center">
                    <span className="text-purple-600">USACO Guide</span> Informatics Tournament
                </h1>
                <div className="flex-1 flex flex-col animate items-center animate-[fadeIn_1s_ease-out_1200ms_1_forwards] opacity-0">
                    <h2 className="text-lg md:text-xl pt-4 pb-2 py-4 lg:text-2xl xl:text-3xl 2xl:text-4xl mx-auto text-center">
                        Saturday, March 2nd from 10 am to 1 pm PST.
                    </h2>
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mx-auto text-center max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-4">
                        {timeLeftString(timeLeft)}
                    </h2>
                    <Link className="inline-flex sm:text-lg py-3 px-6 sm:py-4 mt-6 sm:px-8 rounded-md shadow bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-900" href={CONTEST_REGISTRATION_FORM_LINK}>
                        Register Now &rarr;
                    </Link>
                    <Image className="hover:animate-bounce" src={mascotImage} alt="Mascot!" />
                    <section className="flex flex-col md:flex-row justify-evenly mx-auto my-12 w-screen px-6 md:px-12 xl:px-36 lg:px-24 lg:gap-x-12 gap-x-6 md:gap-x-8">
                        <Card key={"standard"} className="md:basis-1/2 border-blue-600 bg-blue-600" division="standard"/>
                        <Card key={"advanced"} className="md:basis-1/2 border-purple-600 bg-purple-600" division="advanced" />
                    </section>
                    <section className="flex flex-col">
                        <h2 className="text-3xl font-semibold">Rules</h2>
                        <p>
                            insert some rules idk
                        </p>
                    </section>
                </div>
            </div>
        </main>
    </Layout>
}

function timeLeftString(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 60000) % 60
    const hours = Math.floor(milliseconds / 3600000);
    return `${hours} hour${hours === 1 ? '' : 's'}, ${minutes} minute${minutes === 1 ? '' : 's'}, and ${seconds} second${seconds === 1 ? '' : 's'} until the start of the contest.`;
}
