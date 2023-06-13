"use client";
import React from "react";
import Link from "next/link";

import Logo from "./Logo";
import { navVariants } from "../animations/motion";
import MainWrapper from "../wrappers/MainWrapper";

import { motion } from "framer-motion";

const NavbarComp: React.FC<{
  links: string[];
}> = ({ links }) => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex w-full flex-[0.1] items-center justify-center  "
    >
      <MainWrapper>
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
      </MainWrapper>
    </motion.nav>
  );
};

export default NavbarComp;
