"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Barlow } from "next/font/google";

import MainWrapper from "../wrappers/MainWrapper";
import { fadeIn } from "../animations/motion";
import { staggerContainer } from "../animations/motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const About = () => {
  return (
    <motion.div
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="About"
      className="flex justify-center px-4 pt-24 md:pt-0"
    >
      <MainWrapper>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-col justify-center py-20"
        >
          <Image
            src="/ahmed.webp"
            height={0}
            width={0}
            sizes="100%"
            alt="Muhammad Ahmed Siddiqui"
            className="pointer-events-none h-[140px] w-[140px] rounded-full md:h-[200px] md:w-[200px]"
          />
          <h2 className="who-am-i flex flex-col pt-10 text-2xl font-bold">
            Who Am I ?
          </h2>
          <div className={`py-10 flex flex-col gap-y-4 text-lg ${barlowC.className}`}>
            <p>
              I'm <span className="font-bold">Muhammad Ahmed Siddiqui</span>, a Web developer with burning passion in technology specially in modern domains (SAAS, CLOUD, GenAI, Web3.0). I work for the most modern stack which provides lots of new opportunities for development in the WEB domain to effectively use GenAI and many other modern revolutions together.
            </p>

            <p>
              {" "}
              My journey began with a foundation in HTML, CSS, and Javascript, then soared to new heights with React JS. React is a widely popular and well engineered library. Building 10+ stunning websites with React opened doors to its advanced frameworks and techniques, allowing me to elevate each project to the next level.
            </p>

            <p>
              {" "}
              To level up my skills, I embraced NEXT JS (the ultimate React framework), for its power and seamless integrations with other technologies. In short, there is nothing we can't achieve by using Next JS.
            </p>

            <p>   {" "}I follow industry best practices, master TypeScript (JavaScript's advanced cousin), and keep my skillset diverse with cutting edge technologies like JAMStack and the best cloud architectures. I constantly research in demand technologies to meet project needs.</p>

            <p>
              {" "}
              I like to join brilliant teams to collaborate in a super knowledge extensive environment and learn great things...
            </p>
          </div>
          <div className="flex gap-x-4 text-4xl child:transition-all child:duration-150 child-hover:-translate-y-2">
            <Link href="https://github.com/MAhmedSid">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/jamstack-web-developer-react-next-js-expert/">
              <FaLinkedin />
            </Link>
          </div>
        </motion.div>
      </MainWrapper>
    </motion.div>
  );
};

export default About;
