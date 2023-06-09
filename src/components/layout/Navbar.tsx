"use client";
import React, { useState } from "react";
import Logo from "../atoms/Logo";
import MainWrapper from "../wrappers/MainWrapper";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";
import useClientWindowWidth from "../hooks/useClientWindowWidth";

const links = ["About", "Skills", "Services", "Portfolio", "Blog", "Contact"];

const Navbar = () => {
  const width = useClientWindowWidth();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  


  return (
    <nav className="flex w-full flex-[0.1] items-center justify-center">
      <MainWrapper>
        <div className="flex items-center justify-between gap-x-5">
          <Logo />
          {width > 768 && (
            <ul className="flex items-center  gap-x-12">
              {links.map((link) => (
                <Link key={link} href={`#${link}`}>
                  <li className="border-b-2  border-b-transparent text-xl tracking-wider hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          )}
          {width <= 768 && (
            <>
            <button onClick={() => setSideBarOpen(!sideBarOpen)}>open</button>
            <Menu
              right
              // noOverlay
              width={"100%"}
              itemListElement="nav"
              menuClassName="bg-black bg-opacity-50 h-screen"
          
              isOpen={sideBarOpen}
            >
              {links.map((link) => (
                <Link key={link} href={`#${link}`}>
                  <li className="border-b-2  border-b-transparent text-xl tracking-wider hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out">
                    {link}
                  </li>
                </Link>
              ))}
            </Menu>
            </>
          )}
        </div>
      </MainWrapper>
    </nav>
  );
};

export default Navbar;
