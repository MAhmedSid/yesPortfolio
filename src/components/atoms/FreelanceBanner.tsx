"use client"
import React from "react";

import { Parallax } from 'react-parallax';

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["900"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const FreelanceBanner = () => {
  return (
      <Parallax className="parallax mt-20 bg-center bg-cover" bgImage="/banner.jpg" bgImageAlt="Personal Website" strength={200}>
    <div className="freelance-banner-bg flex   px-3 md:px-0 h-80 flex-col items-center justify-center gap-y-4  text-white">
      <h3
        className={`text-2xl text-center md:text-left md:text-[40px] font-extrabold tracking-wide ${poppins.className}`}
      >
        I'm <span className="text-[#a0f669]">Available</span> for freelancing
      </h3>
      <p className="w-full md:w-[40%] text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        voluptatibus eaque molestias omnis, corrupti sequi vero aperiam numquam
        dolores itaque!
      </p>
      <button className="rounded-full  bg-primaryBlue  px-11 py-4  text-sm tracking-widest  transition-all duration-150 hover:text-black ">
        Hire Me
      </button>
    </div>
    </Parallax>
  );
};

export default FreelanceBanner;
