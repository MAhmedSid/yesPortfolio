"use client";
import React, { useState } from "react";
import Logo from "../atoms/Logo";
import MainWrapper from "../wrappers/MainWrapper";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import useClientWindowWidth from "../hooks/useClientWindowWidth";
import { Sling as Hamburger } from "hamburger-react";

const links = ["About", "Skills", "Services", "Portfolio", "Contact"];

const Navbar = () => {
  const width = useClientWindowWidth();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className="flex w-full flex-[0.1] items-center justify-center  ">
      <MainWrapper>
          {width > 768 && (
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
          )}
          {width <= 768 && (
            <>
              <div
                className={`z-[3000] flex w-full fixed bg-white py-2 top-0 ${sideBarOpen ? "":"backdrop-blur-lg bg-opacity-80"}`}
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
                    <Link onClick={() => setSideBarOpen(false)} key={link} href={`#${link}`}>
                      <li  className="mt-3 border-b-2 border-b-transparent  text-center text-2xl tracking-wider hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out md:text-xl ">
                        {link}
                      </li>
                    </Link>
                  ))}
                  </ul>
              </Menu>
            </>
          )}
      </MainWrapper>
    </nav>
  );
};

export default Navbar;
