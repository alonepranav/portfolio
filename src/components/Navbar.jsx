"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
            <Link
              href={"/#"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Home
            </Link>
            <Link
              href={"/#about"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              About
            </Link>
            <Link
              href={"/#projects"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Projects
            </Link>
            <Link
              href={"/#skills"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Skills
            </Link>
            <Link
              href={"/#contact"}
              className="hover:scale-[1.1] transition-all hover:tracking-widest"
              onClick={() => setToggleClass(false)}
            >
              Contact
            </Link>
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
