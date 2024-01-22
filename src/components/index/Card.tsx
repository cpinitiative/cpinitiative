import * as React from "react"
import Link from "next/link"

export default function Card({
  title,
  borderColor,
  children,
  url,
  external,
}: {
  title: string
  borderColor: string
  children: React.ReactNode
  url: string
  external?: boolean
}) {
  let contents = (
    <>
      <h2 className="font-medium text-2xl mb-2">
        {title}
        {url !== null && external && (
          <svg
            className="w-6 h-7 pb-1 inline-block text-gray-400 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </h2>
      <p className="text-gray-600">{children}</p>
    </>
  )
  const classes =
    " block bg-white anim shadow transform hover:-translate-y-1 hover:shadow-lg border-l-4 px-6 py-5 " +
    borderColor
  if (url && url.startsWith("/")) {
    return (
      <Link href={url} className={classes}>
        {contents}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" className={classes}>
      {contents}
    </a>
  )
}
