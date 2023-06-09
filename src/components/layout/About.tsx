import Image from "next/image";
import React from "react";
import MainWrapper from "../wrappers/MainWrapper";
import { Barlow } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";




const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["500"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const About = () => {
  return (
    <div id="About" className="flex justify-center">
      <MainWrapper>
        <div className="flex md:h-[100vh] flex-col justify-center">
          <img
            src="/profiletwo.webp"
            alt="Muhammad Ahmed Siddiqui"
            className="h-[200px] w-[200px] rounded-full"
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
          <div className="flex gap-x-4 text-4xl child-hover:-translate-y-2 child:transition-all child:duration-150">
            <Link href="https://github.com/MAhmedSid"><FaGithub/></Link>
            <Link href="https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/"><FaLinkedin/></Link>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default About;
