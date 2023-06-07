import React from "react";
import Logo from "../atoms/Logo";
import MainWrapper from "../wrappers/MainWrapper";
import Link from "next/link";

const links = ["About","Skills","Services", "Portfolio" ,"Blog","Contact"]

const Navbar = () =>{
  return (
    <nav className="w-full flex justify-center items-center flex-[0.1]">
      <MainWrapper>
        <div className="flex justify-between items-center gap-x-5">
          <Logo />
          <ul className="flex gap-x-12  items-center">
           {links.map((link)=>( 
            <Link key={link} href={`#${link}`} >
              <li className="text-xl  tracking-wider border-b-2 border-b-transparent hover:border-b-primaryBlue hover:transition-all hover:duration-150 hover:ease-in-out" >{link}</li>
              </Link>
           ))}
          </ul>
        </div>
      </MainWrapper>
    </nav>
  );
};

export default Navbar;
