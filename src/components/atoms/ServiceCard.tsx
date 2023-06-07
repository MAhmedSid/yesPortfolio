import React from "react";
import { Barlow } from "next/font/google";

const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const ServiceCard: React.FC<{
  icon: any;
  name: string;
  text: string;
}> = ({ icon, name, text }) => {
  return (
    <div
      className={`flex flex-col w-[500px] justify-center items-center max-w-lg shadow-2xl p-6 ${barlowC.className} transition-all hover:bg-primaryBlue group cursor-pointer select-none`}
    >
     {icon}
      <h3 className=" font-medium tracking-widest mt-5">{name}</h3>
      <div className="h-[1px] w-[20px] bg-primaryBlue mt-4 mb-10 group-hover:bg-black"></div>
      <p className="text-lg font-medium text-black text-opacity-70">{text}</p>
    </div>
  );
};

export default ServiceCard;
