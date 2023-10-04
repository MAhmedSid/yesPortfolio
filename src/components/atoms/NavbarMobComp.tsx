"use client";
import React, { useState } from "react";
import Link from "next/link";

import MainWrapper from "../wrappers/MainWrapper";
import Logo from "./Logo";

import { slide as Menu } from "react-burger-menu";
import { Sling as Hamburger } from "hamburger-react";

const NavbarMobComp: React.FC<{
  links: string[];
  barlowC: any;
  width: number;
}> = ({ links, barlowC, width }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <nav
        className={` w-full ${
          width >= 768
            ? "hidden"
            : "flex  items-center justify-center"
        }`}
      >
        <MainWrapper>
          <div
            className={` fixed top-0 z-[3000] flex justify-between w-full  bg-white py-2 px-2 lmb:px-4 ${
              sideBarOpen ? "" : "bg-opacity-80 backdrop-blur-lg"
            }`}
          >
            <Logo />
            <div className="">
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
        </MainWrapper>
      </nav>
    </>
  );
};

export default NavbarMobComp;
