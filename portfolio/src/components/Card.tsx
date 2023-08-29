import React from "react";

interface card {
  title: string;
  description: string;
  github: string;
  link: string;
  image: string;
}

export default function Card(cardDetails: card) {
  return (
    <>
      <div className="h-[28rem] w-[22rem] flex justify-between items-center flex-col border border-stone-200 overflow-hidden rounded p-4 bg-white shadow-lg shadow-stone-200">
        <div className="h-60  rounded-md overflow-hidden">
          <img
            src={cardDetails.image}
            className="h-full w-full object-cover rounded hover:scale-[1.2] transition-all"
          />
        </div>
        <div className="flex justify-between w-fit h-1/3 flex-col">
          <p className="text-2xl font-semibold">{cardDetails.title}</p>
          <p className="text-[.9rem]">{cardDetails.description}</p>
          <div className="flex gap-2 w-full">
            {!cardDetails.github || (
              <a href={cardDetails.github} target="_blank">
                <button className="py-2 px-4 text-sm font-semibold tracking-wide bg-black text-white rounded">
                  {"Github"}
                </button>
              </a>
            )}

            <a href={cardDetails.link} target="_blank">
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
