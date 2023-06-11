import React from 'react'

const SkillType: React.FC<{firstLetter: string,restWord:string}> = ({firstLetter,restWord}) => {
  return (
    <div>
    <h3 className='bg-primaryBlue text-white inline-block rounded-xl p-2 text-2xl md:text-3xl font-medium'><span className='text-3xl md:text-4xl font-bold'>{firstLetter}</span>{restWord}</h3>
    </div>
  )
}

export default SkillType