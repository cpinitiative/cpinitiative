import EmailForm from "../video-classes/EmailForm"

export default function Newsletter() {
  return (
    <div className="bg-gray-800" id="newsletter">
      <div className="max-w-screen-xl mx-auto py-12 px-6 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
            id="newsletter-headline"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Get announcements for future classes, contests, new initiatives &
            more!
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <EmailForm listName={"general"} mailjetListName={"general"} wide />
        </div>
      </div>
    </div>
  )
}
