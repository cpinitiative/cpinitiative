import Link from "next/link";

export default function Banner({ text, actionText, href }) {
  return (
    <div className="relative bg-indigo-700">
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="hidden md:inline">
              {text}
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link
                href={href}
                className="text-white font-bold underline"
              >
                {actionText} &rarr;
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}