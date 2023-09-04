import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl">404</h2>
          <p className="text-xl">
            Page not found 🤔
            <br />
            <br />
          </p>
        </div>
        <div className="h-1 btn-gradient1 w-[60%]"></div>
        <div className="px-3">
          <br />
          <p className="text-center text-lg tracking-wide">
            The page you are trying to route does not exist{" "}
          </p>
          <div className="my-5 text-center">
            <Link href="/">
              <button className="bg-black py-1.5 px-5 text-white rounded mx-2">
                Go back
              </button>
            </Link>

            <Link href="/">
              <button className="py-1.5 px-5 text-white rounded mx-2 bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
