import Image from "next/image"

export default function ContestCard({
  name,
  photo,
  link,
}) {
  return (
    <>
      <li className="relative block w-full rounded-lg overflow-hidden">
        <a href={link} target="_blank">
          <div className="pointer-events-none aspect-w-10 aspect-h-6">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              src={photo}
              alt={name}
              placeholder="blur"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black px-6 pb-6 md:px-4 md:pb-4 lg:px-3 lg:pb-3 pt-12">
            <p className="mt-2 block md:text-xl text-2xl font-bold text-white pointer-events-none">
              {name}
            </p>
            <p className="block md:text-base sm:text-lg font-medium text-gray-200 pointer-events-none">
            </p>
          </div>
        </a>
      </li>
    </>
  )
}