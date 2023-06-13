"use client";
import React from "react";
import { Poppins } from "next/font/google";

import { Parallax } from "react-parallax";

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
    <Parallax
      className="parallax mt-20 bg-cover bg-center"
      bgImage="/banner.jpg"
      bgImageAlt="Personal Website"
      strength={200}
    >
      <div className="freelance-banner-bg flex   h-80 flex-col items-center justify-center gap-y-4 px-3 text-white  md:px-0">
        <h3
          className={`text-center text-2xl font-extrabold tracking-wide md:text-left md:text-[40px] ${poppins.className}`}
        >
          I'm <span className="text-[#a0f669]">Available</span> for freelancing
        </h3>
        <p className="w-full text-center text-sm md:w-[40%]">
        Ready to Elevate Your Online Presence? Hire an Expert in AI and Modern Web Development Today!
        </p>
        <button className="rounded-full  bg-primaryBlue  px-11 py-4  text-sm tracking-widest  transition-all duration-150 hover:text-black ">
          Hire Me
        </button>
      </div>
    </Parallax>
  );
};

export default FreelanceBanner;
