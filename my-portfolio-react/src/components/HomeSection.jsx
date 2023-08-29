import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function HomeSection() {
  return (
    <>
      <div
        className="h-screen bg-[#080923] w-full flex justify-center items-center"
        id=""
      >
        <div className="text-center text-[#ffffff] pt-10">
          <h4 className="mb-5 font-semibold text-sm md:text-xl tracking-[2px] uppercase">
            Hi, My name is
          </h4>
          <h1 className="gradient-text-bg text-[2.5rem] md:text-7xl">
            Pranav Shilavane
          </h1>
          <br />
          <p className="gradient-text-bg2 text-[2rem] md:text-5xl">
            I am a Frontend Web Developer
          </p>
          <br />
          <p className="md:text-lg">
            I like to build cool stuff 😎 with popular libraries like ReactJS
            and Tailwind CSS.
            <br />
            Currently 🥰 I am brushing up my backend web development skills.
          </p>

          <div className="my-8">
            <HashLink to={"/#contact"}>
              <button className="py-2 px-8 btn-gradient1 my-3 rounded-full text-base mx-3 font-bold">
                Do you want to contact me?
              </button>
            </HashLink>
            <button className="py-2 px-8 btn-gradient2 rounded-full text-base mx-3 font-bold">
              Get my RESUME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
