"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const AniText= ()=>{
  return (
    <p className='text-[32px] font-extrabold mt-4'>
    <span>Expert in {" "}</span>
    <TypeAnimation
      defaultValue="Jam Stack Development"
      sequence={["Jam Stack Development.", 4000, "Next JS Development.", 4000, "AI Web Development.",4000,]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className='text-primaryBlue underline'
    />
  </p>
 
  )
}

export default AniText