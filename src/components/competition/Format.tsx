import Image from "next/image"

export default function Format() {
  return (
    <div className="bg-white">
      <div className="py-12 px-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:py-18">
        <div className="mb-8">
          <h2 className="flex justify-center font-extrabold tracking-tight text-4xl mb-6">
            Format
          </h2>
          <div className="grid grid-cols-2 mb-4">
            <div className="mx-2 relative block overflow-hidden hover:mx-1 transition-all border-2 border-black rounded-lg">
              <div className="pointer-events-none">
                <div className="w-full text-center p-1 border-2">
                  <p className="text-xs leading-6 text-purple-600 tracking-wide uppercase">
                    Beginner
                  </p>
                  <p className="leading-6 text-2xl font-bold tracking-wide mb-3">
                    Division 2
                  </p>
                  <div className="h-full">
                    <p className="text-sm leading-6 text-slate-600 font-semibold tracking-wide uppercase">
                      USACO
                      <br />
                      <span className="text-4xl font-extrabold bg-gradient-to-tr decoration-clone from-gray-600 to-slate-300 text-transparent bg-clip-text">
                        LOW SILVER
                      </span>
                      <br />
                      equivalent
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2 relative block overflow-hidden hover:mx-1 transition-all border-2 border-black rounded-lg">
              <div className="pointer-events-none">
                <div className="w-full text-center p-1">
                  <p className="text-xs leading-6 text-purple-600 tracking-wide uppercase">
                    Advanced
                  </p>
                  <p className="leading-6 text-2xl font-bold tracking-wide mb-3">
                    Division 1
                  </p>
                  <div className="h-full">
                    <p className="text-sm leading-6 text-slate-600 font-semibold tracking-wide uppercase">
                      USACO
                      <br />
                      <span className="text-4xl font-extrabold bg-gradient-to-tr decoration-clone from-yellow-600 to-amber-400 text-transparent bg-clip-text">
                        GOLD
                      </span>
                      <br />
                      equivalent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-full prose prose-lg">
            <div className="text-center">
              <p>
                Each division will consist of 10 problems.
                <br />
                You may enter as an individual or as a team for your club,{" "}
                <span className="font-semibold">
                  but not both at the same time.
                </span>
              </p>
            </div>
            <div className="block mx-auto">
              <span className="font-extrabold">Club Teams</span>
              <ul>
                <li>5 competitors max per team</li>
                <li>Clubs can send any number of teams to represent them</li>
              </ul>

              <span className="font-extrabold">Individual</span>
              <ul>
                <li>Compete as an individual</li>
                <li>Separate prize pool than the clubs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
