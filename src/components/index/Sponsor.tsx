import XCamp from './sponsor-logo/XCamp';

export default function Sponsor() {
  return (
    <div className="pb-12 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
          Or, help us financially!
        </span>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
          We're a 501(c)3 nonprofit organization — all donations are tax
          deductible. Since our inception in September 2020, we've impacted well
          over 16,000 students across our various initiatives.
        </p>
        <div className="h-6"></div>

        <div className="flex items-center">
          <a
            href="mailto:sponsorship@joincpi.org"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-500 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition duration-150 ease-in-out"
          >
            Sponsor Us
          </a>
          <span className="text-lg font-medium text-gray-400 ml-3">
            or{" "}
            <a
              href="https://www.paypal.com/donate?hosted_button_id=FKG88TSTN82E4"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 transition hover:text-purple-400"
            >
              Donate via PayPal
            </a>
          </span>
          <br />
        </div>
        <div className="mt-4 text-base leading-6 text-gray-300">
          Read our
          <a
            href="/sponsorship_prospectus.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 transition hover:text-purple-400"
          >
            {" "}
            sponsorship prospectus
          </a>
        </div>

        <div className="h-12 md:h-20"></div>

        <p className="text-lg font-medium text-gray-700 uppercase md:text-xl dark:text-gray-400">
          Our Sponsors
        </p>
        {/* Sponsor logos don't fit well in the light theme */}
        <p className="pt-6 font-semibold text-gray-600 uppercase md:text-lg dark:text-gray-400">
          Platinum Sponsors
        </p>
        <div className="my-8 grid grid-cols-2 items-center gap-0.5 text-gray-600 md:grid-cols-3 lg:my-6 lg:grid-cols-4 dark:text-gray-400">
          <div className="col-span-1">
            <a
              href="https://x-camp.academy/"
              target="_blank"
              rel="noreferrer"
            >
              <XCamp />
            </a>
          </div>
        </div>
      </div>

      <div className="h-8 md:h-10 xl:h-12"></div>
      </div>
  )
}
