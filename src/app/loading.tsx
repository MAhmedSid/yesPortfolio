import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: "#fff" }}
      className='md:w-[200px] md:h-[200px] w-[100px] h-[100px]'
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <path
        fill="none"
        stroke="#3e64ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M14.1 7.5h8.1v14.7c0 .6 0 1.2.1 1.7-.1-.6-.1-1.2-.1-1.7V7.5h63.6-8.1v14.7c0 7-4.6 13.3-11.7 17.1-4.2 2.3-6.8 5.9-6.8 9.8V51c0 3.9 2.5 7.6 6.8 9.8 7.1 3.8 11.7 10 11.7 17.1v14.7h8.1H50h18V82.3c0-3.8-2.6-7.4-7-9.8-.1 0-.1-.1-.2-.1-6.6-3.6-14.9-3.6-21.5 0-.1 0-.1.1-.2.1-4.5 2.4-7 6-7 9.8v10.2h0-18 8.1V77.8c0-7 4.6-13.3 11.7-17.1 4.2-2.3 6.8-5.9 6.8-9.8V49c0-3.9-2.5-7.6-6.8-9.8-6.5-3.5-10.9-9-11.6-15.3h9.9c.7 3.1 3 5.9 6.8 8 5.7 3 9.5 7.7 10.9 12.9 1.4-5.2 5.3-9.9 10.9-12.9 3.8-2 6.2-4.8 6.8-8H32.2"
      >
        <animate
          attributeName="stroke-dasharray"
          dur="5.2631578947368425s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="480 100;480 110"
        ></animate>
        <animate
          attributeName="stroke-dashoffset"
          dur="5.2631578947368425s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;-1180"
        ></animate>
      </path>
    </svg>
    </div>
  )
}

export default loading