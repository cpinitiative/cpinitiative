import * as React from "react"
import LevelSelect from "./LevelSelect"

export default function CourseSelectionSection({ level, setLevel }) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Course
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {/* Select the level that you would like to register for. Select a level
            to see more details about it. */}
            If you're interested in a USACO Silver class,{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0IgtbVoYsWv_2E2ZIcN8UE29OVpmx6FsiM0x9lfwNdGey3Q/viewform"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              join our mailing list!
            </a>
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <LevelSelect level={level} setLevel={setLevel} />
            </div>
            <p className={"text-sm text-gray-500"}>
              All proceeds go to the nonprofit organization Competitive
              Programming Initiative, to be used to improve future classes and
              free resources like the USACO Guide. If you're unable to pay, you
              can apply for financial aid.
            </p>
            {level && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  You Selected:{" "}
                  {level.charAt(0).toUpperCase() + level.substring(1)} USACO
                  Course
                </label>

                {level == "beginner" ? (
                  <>
                    <p className="mt-2 text-sm text-gray-500">
                      This course is designed for USACO newcomers, and assumes
                      no prior USACO knowledge. The topics taught in this class
                      will prepare students to pass USACO Bronze and become
                      USACO Silver contestants.
                    </p>
                    <i className="mt-2 text-sm text-gray-500">
                      Prerequisite: Basic Programming Experience in Java, C++,
                      or Python
                    </i>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="mt-2 text-sm text-gray-500">
                      This course is designed for students currently in USACO
                      Silver. The topics taught in this class will prepare
                      students to pass USACO Silver and become USACO Gold
                      contestants.
                    </p>
                    <i className="mt-2 text-sm text-gray-500">
                      Recommended Prerequisite: Currently in USACO Silver
                    </i>
                  </>
                )}

                {/* <p className="mt-2 text-sm text-gray-500">
                  {level == "beginner"
                    ? "Every Friday from April 2 to May 28, 5-7pm PDT (UTC-7). (Total 9 Sessions)"
                    : "Every Saturday from April 3 to May 29, 4-6pm PDT (UTC-7). (Total 9 Sessions)"}
                </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
