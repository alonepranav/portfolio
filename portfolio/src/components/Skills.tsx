import React from "react";

const frontend: string[] = ["ReactJS", "Tailwind CSS"];
const backend: string[] = ["NodeJS", "ExpressJS", "MongoDB"];
const other: string[] = ["Firebase", "Redux", "HTML", "CSS", "Javascript"];

export default function Skills() {
  return (
    <>
      <div
        className="min-h-screen py-12 w-screen flex justify-center items-center"
        id="skills"
      >
        <div>
          <div className="flex items-center flex-col gap-1.5 text-2xl font-semibold">
            <p>My Development Skills</p>
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-300 h-1 rounded-full w-44"></div>
          </div>

          <div className="px-5 sm:px-10 md:px-60">
            <div className="mt-16">
              <div>
                <p className="text-xl mb-3">Frontend</p>
                <div className="flex flex-wrap gap-8">
                  {frontend.map((a: string, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-center items-center flex-col h-36 w-36 gap-3 p-3"
                      >
                        <img src={`/l/${a}.png`} className="h-32 w-full" />
                        <p>{a}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div>
                <p className="text-xl mb-3">Backend</p>
                <div className="flex flex-wrap gap-8">
                  {backend.map((a: string, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-center items-center flex-col h-36 w-36 gap-3 p-3"
                      >
                        <img src={`/l/${a}.png`} className="h-32 w-full" />
                        <p>{a}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <p className="text-xl mb-3">Other</p>
                <div className="flex flex-wrap gap-8">
                  {other.map((a: string, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-center items-center flex-col h-36 w-36 gap-3 p-3"
                      >
                        <img src={`/l/${a}.png`} className="h-32 w-full" />
                        <p>{a}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
