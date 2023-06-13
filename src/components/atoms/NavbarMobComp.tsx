"use client";
import React from "react";
import Link from "next/link";

import MainWrapper from "../wrappers/MainWrapper";
import Logo from "./Logo";

import { slide as Menu } from "react-burger-menu";
import { Sling as Hamburger } from "hamburger-react";

const NavbarMobComp: React.FC<{
  sideBarOpen: boolean;
  setSideBarOpen: any;
  links: string[];
  barlowC: any;
}> = ({ sideBarOpen, setSideBarOpen, links, barlowC }) => {
  return (
    <>
      <nav className="flex w-full flex-[0.1] items-center justify-center  ">
        <MainWrapper>
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
        </MainWrapper>
      </nav>
    </>
  );
};

export default NavbarMobComp;
