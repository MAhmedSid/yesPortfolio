import React from "react";
import MainWrapper from "../wrappers/MainWrapper";
import Image from "next/image";
import AniText from "../atoms/AniText";
import Link from "next/link";

const HeroComp = () => {
  return (
    <div
      className={`flex w-full flex-[0.8] items-center justify-center p-2 py-0`}
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center pt-56">
          <p className="mt-10 font-extrabold tracking-[4px] text-primaryBlue">
            HEY! I AM
          </p>
          <h1 className="mt-3 text-6xl font-extrabold tracking-wide">
            M. Ahmed Siddiqui
          </h1>
          <AniText />
          <Link href="#Skills">
            <button className="rhombus mt-56 flex items-center justify-center px-6 py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 motion-safe:animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#3e64ff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </MainWrapper>
    </div>
  );
};

export default HeroComp;
