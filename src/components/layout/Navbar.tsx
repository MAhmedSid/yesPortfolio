"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Barlow } from "next/font/google";

import Logo from "../atoms/Logo";
import MainWrapper from "../wrappers/MainWrapper";
import { navVariants } from "../animations/motion";

import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";
import { slide as Menu } from "react-burger-menu";
import { Sling as Hamburger } from "hamburger-react";

const links = ["About", "Skills", "Services", "Portfolio", "Contact"];

const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const Navbar = () => {
  const width = useWindowWidth();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full flex-[0.1] items-center justify-center  "
    >
      <MainWrapper>
        {width > 768 ? (
          <>
            <div className="flex md:items-center md:justify-between md:gap-x-5">
              <Logo />
              <ul className="flex items-center gap-x-12">
                {links.map((link) => (
                  <Link key={link} href={`#${link}`}>
                    <li className="border-b-2  border-b-transparent text-xl tracking-wider hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out">
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div
              className={`fixed top-0 z-[3000] flex w-full bg-white py-2 ${
                sideBarOpen ? "" : "bg-opacity-80 backdrop-blur-lg"
              }`}
            >
              <Logo />
              <div className="ml-[48%]">
                <Hamburger
                  color="#3e64ff"
                  toggled={sideBarOpen}
                  toggle={() => setSideBarOpen(!sideBarOpen)}
                  hideOutline={true}
                  label="menu"
                  rounded={true}
                  easing="ease-in-out"
                  distance="sm"
                  duration={0.8}
                />
              </div>
            </div>

            <Menu
              right
              width={"100%"}
              itemListElement="nav"
              menuClassName={`bg-white h-full flex items-center justify-center`}
              itemListClassName="flex h-full items-center"
              isOpen={sideBarOpen}
            >
              <ul className="flex list-none flex-col items-center justify-center ">
                {links.map((link) => (
                  <Link
                    onClick={() => setSideBarOpen(false)}
                    key={link}
                    href={`#${link}`}
                  >
                    <li
                      className={`mt-5 border-b-2 border-b-transparent text-center  text-3xl uppercase tracking-wider hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out md:text-xl ${barlowC.className}`}
                    >
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </Menu>
          </>
        )}
      </MainWrapper>
    </motion.nav>
  );
};

export default Navbar;
