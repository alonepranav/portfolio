import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [toggleClass, setToggleClass] = useState(false);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key == "Escape") setToggleClass(false);
    };

    if (toggleClass) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [toggleClass]);

  return (
    <>
      <div className="relative">
        <div
          className={`fixed z-30 ${
            toggleClass ? "h-screen w-screen" : "h-0 w-0 overflow-hidden"
          } top-0 left-0 bg-[rgba(255,255,255,0.5)] backdrop-blur-2xl transition-all flex justify-center items-center`}
        >
          <div className="flex gap-10 flex-col text-xl text-center w-full bg-teal400 font-semibold">
            <HashLink
              to={"/#"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Home
            </HashLink>
            <HashLink
              to={"/#about"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              About
            </HashLink>
            <HashLink
              to={"/#projects"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Projects
            </HashLink>
            <HashLink
              to={"/#skills"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Skills
            </HashLink>
            <HashLink
              to={"/#contact"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Contact
            </HashLink>
          </div>
        </div>

        <div
          className="fixed bg-white shadow-md shadow-stone-300 z-30 top-5 right-5 h-12 w-12 flex justify-center items-center rounded-full"
          onClick={() => setToggleClass(!toggleClass)}
        >
          <div className="nav-box px-10">
            <span className={`nav-line ${toggleClass}`}></span>
            <span className={`nav-line ${toggleClass}`}></span>
            <span className={`nav-line ${toggleClass}`}></span>
          </div>
        </div>
      </div>
    </>
  );
}
