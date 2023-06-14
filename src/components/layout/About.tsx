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
      className="flex justify-center px-4 pt-24 md:px-0 md:pt-0"
    >
      <MainWrapper>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex flex-col justify-center md:h-[100vh]"
        >
          <Image
            src="/profiletwo.webp"
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
              I am <span className="font-bold">Muhammad Ahmed Siddiqui</span>, an expert in modern web development and a
              dedicated member of the Web 3.0 community. With a deep passion for
              the latest advancements in technology, particularly in the realm
              of AI, I am committed to helping businesses and individuals thrive
              in the digital landscape.
            </p>

            <p>
              {" "}
              Through my web development services, I empower clients by
              harnessing the power of technology to achieve their goals. I
              specialize in creating websites that are not only visually
              stunning but also highly functional and user-friendly. By
              leveraging my skills in HTML, CSS, JavaScript, TypeScript,
              Node.js, and Git, I ensure that each project is tailored
              to meet the unique needs and objectives of my clients.
            </p>

            <p>
              {" "}
              As a member of the Web 3.0 community, I am at the forefront of the
              next generation of the internet, where decentralization,
              blockchain technology, and enhanced user control are key
              components. By incorporating Web 3.0 principles into my work, I
              offer forward-thinking solutions that embrace transparency,
              security, and user empowerment.
            </p>

            <p>
              {" "}
              By partnering with me, you can benefit from my expertise in
              creating websites that seamlessly integrate AI technologies,
              providing personalized and dynamic experiences for your users.
              Whether you require a captivating landing page, an intuitive
              e-commerce platform, a feature-rich blog, or a cutting-edge
              AI-powered application, I have the knowledge and skills to deliver
              outstanding results.
            </p>

            <p>
              {" "}
              Together, let's embrace the limitless possibilities of Web 3.0 and
              create digital experiences that are not only remarkable but also
              help you stay ahead in today's rapidly evolving technological
              landscape.
            </p>
          </div>
          <div className="flex gap-x-4 text-4xl child:transition-all child:duration-150 child-hover:-translate-y-2">
            <Link href="https://github.com/MAhmedSid">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/">
              <FaLinkedin />
            </Link>
          </div>
        </motion.div>
      </MainWrapper>
    </motion.div>
  );
};

export default About;
