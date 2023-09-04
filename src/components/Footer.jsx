"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Footer() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <>
      <div className="relative px-5 py-10 text-center bg-slate-200">
        {scroll > 500 ? (
          <Link href={"/#"}>
            <button className="fixed z-20 bottom-3 right-5 p-4 bg-white rounded-full border shadow-lg shadow-stone-400">
              <BsFillTriangleFill />
            </button>
          </Link>
        ) : (
          ""
        )}

        <div className="flex gap-3 justify-center items-center text-lg">
          <AiOutlineCopyright className="text-xl mt-0.5" />
          <span className="text-sky-600 ">PranavShilavane</span>
          <span className="text-rose-600">2023</span>
        </div>

        <div className="mt-5">
          <p className="flex justify-center items-center gap-3 flex-wrap">
            <span>For any queries, contact me here 👉</span>
            <a href="mailto:shilavanepranav@gmail.com?subject=Contact Pranav">
              <button className="shadow-lg bg-white shadow-stone-200 border rounded py-2 px-8 text-sm">
                {" "}
                📩 &nbsp; Email
              </button>
            </a>
          </p>
        </div>

        <br />
        <div>
          <h6>Follow me here : </h6>
          <br />
          <div className="flex justify-center items-center gap-3 md:gap-5 flex-wrap">
            <a
              href="https://replit.com/@pranavshilavane"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <Image
                src="/replit.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
            <a
              href="https://github.com/alonepranav"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Github - alonepranav"
            >
              <Image
                src="/github.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
            <a
              href="https://github.com/pranavshilavane"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Github - pranavshilavane"
            >
              <Image
                src="/github.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-shilavane-9245b8236/"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Linkedin - PranavShilavane"
            >
              <Image
                src="/linkedin.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
            <a
              href="https://instagram.com/pranavshilavane"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Instagram - PranavShilavane"
            >
              <Image
                src="/instagram.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
            <a
              href="https://x.com/pranavshilavane"
              target="_blank"
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Twitter - PranavShilavane"
            >
              <Image
                src="/twitter.png"
                alt=""
                className="h-full w-full"
                height={"100"}
                width={"100"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
