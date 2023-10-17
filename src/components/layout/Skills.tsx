"use client";
import React from "react";

import MainWrapper from "../wrappers/MainWrapper";
import SkillType from "../atoms/SkillType";
import SkillCard from "../atoms/SkillCard";

import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiContentful,
  SiMongodb,
  SiTailwindcss,
  SiAwslambda,
  SiSolidity,
  SiSanity
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaWordpressSimple, FaEthereum } from "react-icons/fa";
import { DiGit, DiPostgresql } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { Link, Element } from "react-scroll";

const navItems = [
  { heading: "Core Stack", to: "section_1" },
  { heading: "Frameworks", to: "section_2" },
  { heading: "Headless CMS", to: "section_3" },
  { heading: "Databases", to: "section_4" },
];

const Skills = () => {
  return (
    <div id="Skills" className="flex px-4 w-full items-center justify-center ">
      <MainWrapper>
        <div className="flex w-full  flex-col overflow-x-hidden md:overflow-x-clip ">
          <div className="mainDiv flex  flex-col md:flex-row md:overflow-y-clip ">
            <div className="left  md:sticky  md:top-0 md:h-[200px] md:flex-[0.3]">
              <ul className="flex w-full flex-col justify-center gap-y-4 ">
                <h2 className=" main-heading pb-5 pt-20 text-center text-4xl font-extrabold md:text-left md:text-6xl">
                  Technical Skills
                </h2>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    className="text-center font-semibold transition-all duration-300 md:text-left"
                    activeClass="text-primaryBlue translate-x-3 "
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={500}
                  >
                    {item.heading}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="right flex max-w-[100%] flex-col items-center pt-20 md:flex-[0.7]  md:pl-10 md:pt-60 ">


              <Element name="section_1" className="section w-full  pb-20 ">
                <div className="flex w-full flex-col gap-y-10 px-4">
                  <SkillType firstLetter="C" restWord="ore Stack" />
                  <div className="grid w-full grid-cols-1 place-items-center   gap-x-5 gap-y-5 lmb:grid-cols-2 tablet:grid-cols-2 lp:grid-cols-3">
                    
                   
                   
                    <SkillCard
                      text="TS"
                      icon={<SiTypescript className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="NODE"
                      icon={<FaNodeJs className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="Tailwind"
                      icon={<SiTailwindcss className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="AWS Serverless"
                      icon={<SiAwslambda className="text-6xl md:text-7xl " />}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_2" className="section w-full   pb-20">
                <div className="flex flex-col gap-y-10 px-4">
                  <SkillType firstLetter="F" restWord="rameworks" />
                  <div className="grid w-full grid-cols-1 place-items-center   gap-x-5 gap-y-5 lmb:grid-cols-2 tablet:grid-cols-2 lp:grid-cols-3">
                    <SkillCard
                      text="REACT"
                      icon={<FaReact className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="NEXT"
                      icon={<SiNextdotjs className="text-6xl md:text-7xl " />}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_3" className="section w-full   pb-20">
                <div className="flex flex-col gap-y-10 px-4">
                  <SkillType firstLetter="H" restWord="eadless CMS" />
                  <div className="grid w-full grid-cols-1 place-items-center   gap-x-5 gap-y-5 lmb:grid-cols-2 tablet:grid-cols-2 lp:grid-cols-3">
                    <SkillCard
                      text="Contentful"
                      icon={<SiContentful className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="Sanity"
                      icon={<SiSanity className="text-6xl md:text-7xl " />}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_4" className="section w-full   pb-20">
                <div className="flex flex-col gap-y-10 px-4">
                  <SkillType firstLetter="D" restWord="atabases" />
                  <div className="grid w-full grid-cols-1 place-items-center   gap-x-5 gap-y-5 lmb:grid-cols-2 tablet:grid-cols-2 lp:grid-cols-3">
                    <SkillCard
                      text="Postgresql"
                      icon={<DiPostgresql className="text-6xl md:text-7xl " />}
                    />
                    <SkillCard
                      text="MongoDB"
                      icon={<SiMongodb className="text-6xl md:text-7xl " />}
                    />
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Skills;
