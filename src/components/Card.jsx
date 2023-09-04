import React from "react";

export default function Card({ title, description, github, link, image }) {
  return (
    <>
      <div className="h-[28rem] w-[22rem] flex justify-between items-center flex-col border border-stone-200 overflow-hidden rounded p-4 bg-white shadow-lg shadow-stone-200">
        <div className="h-60  rounded-md overflow-hidden">
          <img
            src={image}
            className="h-full w-full object-cover rounded hover:scale-[1.2] transition-all"
          />
        </div>
        <div className="flex justify-between w-fit h-1/3 flex-col">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-[.9rem]">{description}</p>
          <div className="flex gap-2 w-full">
            {!github || (
              <a href={github} target="_blank">
                <button className="py-2 px-4 text-sm font-semibold tracking-wide bg-black text-white rounded">
                  {"Github"}
                </button>
              </a>
            )}

            <a href={link} target="_blank">
              <button className="py-2  px-4 text-sm font-semibold tracking-wide bg-sky-400 text-white rounded">
                {"Live Project"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
