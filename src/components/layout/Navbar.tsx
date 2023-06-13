"use client";
import React, { useState } from "react";
import { Barlow } from "next/font/google";

import { useWindowWidth } from "@react-hook/window-size";
import NavbarMobComp from "../atoms/NavbarMobComp";
import NavbarComp from "../atoms/NavbarComp";

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
    <>
      {width <= 768 ? (
        <NavbarMobComp
          sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}
          links={links}
          barlowC={barlowC}
        />
      ) : (
        <NavbarComp links={links} />
      )}
    </>
  );
};

export default Navbar;
