import React from 'react'

const MainWrapper: React.FC<{children: React.ReactNode}> = ({children} ) =>{
  return (
    <div className='w-full tablet:max-w-[1100px]' >
    {children}
    </div>
  )
}

export default MainWrapper