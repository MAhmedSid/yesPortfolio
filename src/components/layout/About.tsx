import Image from 'next/image'
import React from 'react'
import profileImg from '../../../public/profiletwo.webp'
import MainWrapper from '../wrappers/MainWrapper'

const About = () => {
  return (
    <div className='h-[100vh] flex justify-center'>
      <MainWrapper>
        <div className='h-24 w-24'>
          <h1>Who Am I?</h1>
        {/* <Image src={profileImg} alt="Muhammad Ahmed Siddiqui" width={100} height={100} className='w-full rounded-full' /> */}
        </div>
      </MainWrapper>
    </div>
  )
}

export default About