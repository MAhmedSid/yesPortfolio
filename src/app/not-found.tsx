import Link from "next/link";
import React from "react";

const notFound= () => {
  return <div className="flex flex-col justify-center items-center h-screen w-screen gap-y-5">
    <p className="text-3xl md:text-5xl font-semibold text-center md:text-left">
  You are Visiting to the wrong page.
    </p>
    <Link href={"/"}> 
    <button className="border-2 border-primaryBlue text-2xl py-4 px-8 text-primaryBlue rounded-lg  hover:bg-primaryBlue hover:text-white transition-all duration-300 ">
      Go to Home
    </button>
    </Link>
  </div>;
};

export default notFound;
