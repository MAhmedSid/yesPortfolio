"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AniText = () => {
  return (
    <p className="mt-4 h-6 text-center text-xl font-extrabold md:text-[32px]">
      <span>Skilled in </span>
      <TypeAnimation
        defaultValue="JAMStack Web Apps"
        sequence={[
          "JAMStack Web Apps.",
          4000,
          "Next JS Web Apps.",
          4000,
          "AI Web Apps.",
          4000,
          "DApps.",
          4000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-primaryBlue underline"
      />
    </p>
  );
};

export default AniText;
