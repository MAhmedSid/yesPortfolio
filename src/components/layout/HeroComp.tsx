"use client";
import React from "react";
import Link from "next/link";

import { TypingText } from "@/components/animations/customText";
import { staggerContainer } from "../animations/motion";
import MainWrapper from "../wrappers/MainWrapper";
import AniText from "../atoms/AniText";

import { motion } from "framer-motion";

const HeroComp = () => {
  return (
    <div
      className={`flex w-full items-center justify-center p-2 md:flex-[0.8] `}
    >
      <MainWrapper>
        <div className="flex flex-col items-center justify-center pt-40 md:pt-56">
          <motion.p
            // @ts-ignore
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 font-extrabold tracking-[4px] text-primaryBlue"
          >
            <TypingText title={"HEY! I AM"} textStyles={""} />
          </motion.p>
          <motion.div
            // @ts-ignore
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`mt-3 text-3xl font-extrabold tracking-wide md:text-6xl`}
          >
            <TypingText title={"M. Ahmed Siddiqui"} textStyles={""} />
          </motion.div>

          <AniText />
          <button className="rhombus mt-56 flex items-center justify-center px-6 py-6">
            <Link href="#About">
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
            </Link>
          </button>
        </div>
      </MainWrapper>
    </div>
  );
};

export default HeroComp;
