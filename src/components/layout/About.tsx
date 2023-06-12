"use client";
import Image from "next/image";
import React from "react";
import MainWrapper from "../wrappers/MainWrapper";
import { Barlow } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";
import { staggerContainer } from "../animations/motion";

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
          <p className={`py-10 text-lg ${barlowC.className}`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error,
            animi! Fuga ipsa vitae molestias autem ex possimus velit eveniet
            delectus quaerat doloremque! Minima facere voluptatum saepe sint,
            animi sit earum consequuntur nesciunt alias, adipisci possimus esse
            dolores fugit corrupti ratione commodi quae maxime sequi. Placeat
            accusamus nesciunt itaque quos, expedita perspiciatis earum
            reprehenderit deleniti voluptatibus, impedit error provident odit
            eius modi facilis molestias illum maiores laborum cum explicabo
            asperiores laudantium. Saepe accusantium molestias odio expedita
            dicta obcaecati quibusdam error quidem earum optio ut, cum aut illo
            voluptatem veritatis ipsum sit, omnis, a fugit! Harum nostrum eius
            explicabo veritatis sit consectetur dicta unde dolorum adipisci
            culpa voluptas ullam commodi nemo maxime eos perferendis placeat id
            temporibus assumenda, pariatur corrupti consequuntur totam aperiam.
            Porro, quos rerum consequuntur, ratione explicabo, magnam eum
            sapiente assumenda totam commodi voluptatum sed! Dolorum, architecto
            maxime facilis dignissimos voluptates sequi fugit atque. Dicta
            perspiciatis rerum accusantium itaque, ratione ipsam. Nemo
            repellendus iste facilis illo est, saepe architecto maxime totam
            commodi consequuntur cupiditate asperiores, earum hic officiis
            obcaecati impedit maiores. Tempora recusandae quae, modi rem
            accusantium commodi quod voluptatibus id in voluptas doloribus
            voluptatum nobis, eius laborum excepturi repellendus quos totam
            earum placeat. Earum expedita sit corporis nemo officiis.
          </p>
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
