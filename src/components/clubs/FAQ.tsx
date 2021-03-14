import * as React from "react"

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's the best thing about Switzerland?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do you make holy water?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Because they're so good at it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Because the pee is silent. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    He couldn't see himself doing it. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam
                    fugiat.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
