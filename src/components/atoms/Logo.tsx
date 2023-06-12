import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      draggable={false}
      src="/logof.png"
      alt="Ahmed Web Developer Logo"
      height={0}
      width={0}
      sizes="100%"
      className="pointer-events-none ml-[5%] h-14 w-28 md:ml-0 md:h-16 md:w-32"
      priority
    />
  );
};

export default Logo;
