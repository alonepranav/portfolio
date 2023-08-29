import React, { useEffect, useState } from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to={"/#"}>
            <button className="fixed z-20 bottom-3 right-5 p-4 bg-white rounded-full border shadow-lg shadow-stone-400">
              <BsFillTriangleFill />
            </button>
          </HashLink>
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
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/replit.png" alt="" className="h-full w-full" />
            </a>
            <a
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/github.png" alt="" className="h-full w-full" />
            </a>
            <a
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/github.png" alt="" className="h-full w-full" />
            </a>
            <a
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/linkedin.png" alt="" className="h-full w-full" />
            </a>
            <a
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/instagram.png" alt="" className="h-full w-full" />
            </a>
            <a
              href=""
              className="flex items-center p-3 h-14 w-14 rounded-full border shadow-md shadow-slate-300 bg-white"
              title="Replit - PranavShilavane"
            >
              <img src="/twitter.png" alt="" className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// {/* <a href="" className="flex items-center gap-3">
//   <img src="/replit.png" alt="" className="h-7" />
//   <p>Pranavshilavane</p>
// </a> */}
