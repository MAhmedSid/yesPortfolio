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
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaWordpressSimple } from "react-icons/fa";
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
    <div
      id="Skills"
      className="flex  w-full items-center justify-center "
    >
      <MainWrapper>
        <div className="flex w-full  flex-col ">
          <div className="main-div  flex flex-col md:flex-row w-full md:overflow-y-clip overflow-y-auto">
            <div className="left  md:sticky  top-0 md:h-[200px] md:flex-[0.3]">
              <ul className="flex w-full   flex-col justify-center gap-y-4 ">
                <h2 className=" main-heading pb-5 pt-20 text-6xl font-extrabold">
                  Technical Skills
                </h2>
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    className="font-semibold transition-all duration-300"
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

            <div className="right flex md:flex-[0.7] flex-col pl-10 pt-60 ">
              <Element name="section_1" className="section pb-20">
                <div className="flex w-full flex-col gap-y-10">
                  <SkillType firstLetter="C" restWord="ore Stack" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5">
                    <SkillCard
                      text="HTML"
                      icon={<AiFillHtml5 className="text-6xl" />}
                    />
                    <SkillCard
                      text="CSS"
                      icon={<SiCss3 className="text-6xl" />}
                    />
                    <SkillCard
                      text="JS"
                      icon={<TbBrandJavascript className="text-6xl" />}
                    />
                    <SkillCard
                      text="TS"
                      icon={<SiTypescript className="text-6xl" />}
                    />
                    <SkillCard
                      text="NODE"
                      icon={<FaNodeJs className="text-6xl" />}
                    />
                    <SkillCard
                      text="GIT"
                      icon={<DiGit className="text-6xl" />}
                    />
                    <SkillCard
                      text="GraphQL"
                      icon={<GrGraphQl className="text-6xl" />}
                    />
                    <SkillCard
                      text="Tailwind"
                      icon={<SiTailwindcss className="text-6xl" />}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_2" className="section pb-20">
                <div className="flex flex-col gap-y-10">
                  <SkillType firstLetter="F" restWord="rameworks" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5">
                    <SkillCard
                      text="REACT"
                      icon={<FaReact className="text-6xl" />}
                    />
                    <SkillCard
                      text="NEXT"
                      icon={<SiNextdotjs className="text-6xl" />}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_3" className="section pb-20">
                <div className="flex flex-col gap-y-10">
                  <SkillType firstLetter="H" restWord="eadless CMS" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5">
                    <SkillCard
                      text="Wordpress"
                      icon={<FaWordpressSimple className="text-6xl" />}
                    />
                    <SkillCard
                      text="Contentful"
                      icon={<SiContentful className="text-6xl" />}
                    />
                    <SkillCard
                      text="Sanity"
                      icon={<p className="text-6xl">S</p>}
                    />
                  </div>
                </div>
              </Element>

              <Element name="section_4" className="section pb-20">
                <div className="flex flex-col gap-y-10">
                  <SkillType firstLetter="D" restWord="atabases" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5">
                    <SkillCard
                      text="Postgresql"
                      icon={<DiPostgresql className="text-6xl" />}
                    />
                    <SkillCard
                      text="MongoDB"
                      icon={<SiMongodb className="text-6xl" />}
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
