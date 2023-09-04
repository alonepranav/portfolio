import React from "react";

export default function About() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full flex-wrap pt-0 pb-20 md:pt-10 md:pb-10 px-2 md:px-10" id="about">
        <div className="relative w-full lg:w-1/2 h-fit pt-20 flex justify-center items-center">
          <div className="hidden lg:block absolute -top-32 md:-top-48 right-0 md:right-32 z-10 rounded-lg overflow-hidden shadow-md shadow-white">
            <img src="/bg1.jpg" className="h-80 w-72" />
          </div>

          <div className="lg:absolute md:top-0 md:right-80 z-10 rounded-lg overflow-hidden md:shadow-md md:shadow-white">
            <img src="/bg2.jpg" className="h-72 w-60" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full mt-10 md:top-0 md:px-10 lg:pr-48">
          <div>
            <div className="flex items-center lg:items-start flex-col gap-1.5 mt-5 mb-10 md:mb-7">
              <h3 className="font-semibold text-2xl tracking-widest">
                ABOUT ME
              </h3>
              <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-300 h-1 rounded-full w-24 ml-5"></div>
            </div>

            <p className="text-[1.03rem] tracking-[.3px] text-stone-600">
              Hello! I'm
              <span className="font-semibold"> Pranav</span>, a student diving
              headfirst into the world of web development. My passion lies at
              the intersection of frontend creativity and backend functionality.
              I relish the opportunity to build digital experiences that not
              only look great but also work seamlessly.
              <br />
              <br />
              I'm a firm believer in continuous learning. I'm always eager to
              explore new technologies, experiment with coding challenges, and
              connect with fellow developers
              <span className="block my-5 mb-8">
                Contact me here 👉 &nbsp;
                <a
                  href="mailto:shilavanepranav@gmail.com"
                  className="text-blue-700 font-semibold tracking-wide underline underline-offset-[2.7px]"
                >
                  shilavanepranav@gmail.com
                </a>
              </span>
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-4 py-[.5rem] text-white font-semibold tracking-widest text-sm rounded-sm">
                Get my RESUME
              </button>
              <button className="bg-blue-600 px-4 py-[.5rem] text-white font-semibold tracking-widest text-sm rounded-sm">
                See my projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
