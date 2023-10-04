"use client";
import React, { useState } from "react";
import { Barlow } from "next/font/google";

import NavbarMobComp from "../atoms/NavbarMobComp";
import NavbarComp from "../atoms/NavbarComp";
import useClientWindowWidth from "../hooks/useClientWindowWidth";

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
  const width = useClientWindowWidth()

return (
  <>
      <NavbarMobComp
        links={links}
        barlowC={barlowC}
        width={width}
      />
      <NavbarComp links={links}
                width={width}

      />
  </>
);
};

export default Navbar;
