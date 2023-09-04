import React from "react";
import Card from "./Card";

const projectData = [
  {
    title: "Project Pranav",
    description:
      "Project showcase website. Here I've shocased all my projects.",
    link: "https://project-pranav.web.app",
    image: "/project1.png",
  },
  {
    title: "Instagram Clone",
    description: "Frontend Instagram clone using ReactJS & Tailwind CSS.",
    link: "https://pranav-instagram-clone.vercel.app",
    github: "https://github.com/alonepranav/instagram-clone",
    image: "/project2.png",
  },
  {
    title: "Farm Green",
    description: "MERN Stack project of vegetable grocery website.",
    link: "https://farmgreen.vercel.app",
    image: "/project3.png",
  },
];

export default function Projects() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#fafafa] py-10" id="projects">
        <div className="flex items-center flex-col gap-1.5 text-2xl font-semibold">
          <p>My recent Projects</p>
          <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-300 h-1 rounded-full w-36"></div>
        </div>
        <div className="px-2 md:px-40 mt-14 md:mt-20">
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {projectData.map((a, i) => {
              return <Card key={i} {...a} />;
            })}
          </div>
        </div>

        <div className="mt-20 mb-10 text-center">
          <p className="text-2xl gradient-text-bg">
            {/* To see more project from me */}
            I've developed more projects
          </p>
          <br />
          <button className="py-2.5 px-7 btn-gradient2 text-white text-sm font-semibold tracking-widest rounded-md">
            <a href="https://project-pranav.web.app" target="_blank">
              Click here to see them
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
