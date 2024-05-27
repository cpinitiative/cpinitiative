import {Transition} from "@headlessui/react"
import {StaticImageData} from "next/image";
import Image from "next/legacy/image"
import {useState} from "react"

export default function ContestCard({
  name,
  photo,
  link,
  desc,
}: {
  name: string,
  photo: StaticImageData,
  link: string,
  desc: string 
}) {

  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <li 
        className="relative block min-w-80 max-w-[30rem] grow h-64 rounded-lg overflow-hidden"
        onMouseEnter={_ => setIsHovering(true)}
        onMouseLeave={_ => setIsHovering(false)}>
        <a href={link} target="_blank">
          <div className="pointer-events-none">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              src={photo}
              alt={name}
              placeholder="blur"
            />
          </div>

          <div 
            className={`${isHovering ? 'hidden': 'block'} absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-6 pb-6 md:px-4 md:pb-4 lg:px-3 lg:pb-3 pt-12`}>
            <p className="mt-2 block text-xl font-bold text-white pointer-events-none">{name}</p>
          </div>

          <div 
            className={`${isHovering ? 'opacity-100': 'opacity-0'} absolute h-[120%] overflow-y-auto no-scrollbar inset-x-0 ${isHovering ? 'top-[-10%]' : 'top-[60%]'} transition-top duration-300 bg-gradient-to-t from-black from-20% px-6 pb-6 md:px-4 md:pb-4 lg:px-3 lg:pb-3 pt-12`}>
            <p className="mt-2 block text-xl font-bold text-white pointer-events-none">{name}</p>
            <p className={`my-2 text-base font-medium text-gray-200 pointer-events-none`}>{desc}</p>
          </div>
        </a>
      </li>
    </>
  )
}
