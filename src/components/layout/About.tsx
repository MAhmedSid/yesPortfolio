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
              I am <span className="font-bold">Muhammad Ahmed Siddiqui</span>, I am a Professional Web App Developer and Freelancer with the most modern stack which provides scalability and allows me to effectively use AI and modern techs together.
            </p>

            <p>
              {" "}
              Through my web development services, I empower clients by
              harnessing the power of technology to achieve their goals. I
              specialize in creating websites that are not only visually
              stunning but also highly functional and user-friendly. By
              leveraging my skills in JAM Stack, Next JS, TypeScript,
              Node.js, and Cloud, I ensure that each project is tailored
              to meet the unique needs and objectives of my clients.
            </p>

            <p>
              {" "}
              With a passion for learning and experience in business with startup, I am constantly seeking new opportunities to improve my skills. Currently, I'm investigating Python, NLP, and GAI to advance my development abilities. I have also built a foundation in business development to understand the importance of websites for business. 
              
              
            </p>

            <p>   {" "}As a developer and lifelong learner, I also constantly work on architecture and designs for standing in the SAAS market especially for eCommerce. Whether working on internal projects or consulting for clients, I am committed to delivering high-quality and practical results that meet the needs of the customer.</p>

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
              Now, we are living in the AI era, And I use to best AI toolsets and Cloud Architecture which are the most cost-effective, faster, and secure than any other. I work on JAM Stack and modern development frameworks. It's a complete package for end-to-end development with high-quality tested code.
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
