import Image from 'next/image'
import React from 'react'

const Logo = () =>{
  return (
    <Image src="/logof.png" alt='Ahmed Web Developer Logo' height={0} width={0} sizes='100%' className='w-28 h-14 md:w-32 md:h-16 ml-[5%] md:ml-0' priority />
  )
}

export default Logo