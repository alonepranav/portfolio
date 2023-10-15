import React from "react";
import Card from "./Card";

const projectData = [
  {
    title: "Twitter Clone",
    description: "Frontend Twitter Clone",
    description: "Frontend Twitter clone using ReactJS & Tailwind CSS.",
    link: "https://twitter-pranav.vercel.app",
    github: "https://github.com/alonepranav/twitter-clone",
    image: "/projects/project1.png",
  },
  {
    title: "Hotstar Clone",
    description: "Frontend Disney Plus Hotstar Clone",
    description:
      "Frontend Disney Plus Hotstar clone using ReactJS & Tailwind CSS.",
    link: "https://hotstar-pranav.vercel.app",
    github: "https://github.com/alonepranav/hotstar-clone",
    image: "/projects/project2.png",
  },
  {
    title: "Instagram Clone",
    description: "Frontend Instagram clone using ReactJS & Tailwind CSS.",
    link: "https://instagram-pranav.vercel.app",
    github: "https://github.com/alonepranav/instagram-clone",
    image: "/projects/project3.png",
  },
  {
    title: "Project Pranav",
    description:
      "Project showcase website. Here I have shocased all my projects.",
    link: "https://project-pranav.web.app",
    image: "/projects/project4.png",
  },
  {
    title: "Form React",
    description: "Forms using ReactJS & Tailwind CSS.",
    link: "https://alonepranav.github.io/form-react",
    github: "https://github.com/alonepranav/form-react",
    image: "/projects/project5.png",
  },
  {
    title: "Tic Tac Toe",
    description: "Simple game using HTML, CSS and JS.",
    link: "https://alonepranav.github.io/Project-HTML-CSS-JS/tic-tac-toe-game/",
    github:
      "https://github.com/alonepranav/Project-HTML-CSS-JS/tree/main/tic-tac-toe-game",
    image: "/projects/project6.png",
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
            I&apos;ve developed more projects
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
