import React from "react";
import { Poppins, Barlow } from "next/font/google";
import ServiceCard from "../atoms/ServiceCard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const Services = () => {
  return (
    <div
      id="Services"
      className={`flex flex-col items-center justify-center pt-40 text-center ${poppins.className}`}
    >
      <h2 className="text-6xl font-black">Services</h2>
      <div
        className={`flex flex-col gap-y-3  pt-20 text-center text-xl font-extrabold ${barlowC.className}`}
      >
        <p className="max-w-[60rem]">
          {" "}
          Do you want to stand out in the digital world with a modern and
          professional website? Do you need a fullstack web developer who can
          handle everything from design to deployment?
        </p>
        <p>-</p>
        <p className={`max-w-[60rem]`}>
          Then you need me. I have the skills and experience to create stunning
          websites that are fast, secure, and user friendly. Whether you need a
          landing page, an e-commerce site, a blog, or an{" "}
          <span className="font-extrabold">AI & WEB 3.0</span> integrated app. I
          can help you achieve your goals. Here are some of the services I
          offer:
        </p>
      </div>
      <div className="cards-section flex w-full flex-wrap justify-between gap-x-5 gap-y-10 px-2 pt-10 ">
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              className="h-[80px] w-[80px] bg-clip-text fill-primaryBlue group-hover:fill-white"
            >
              <path
                d="M399.702 109.066c-11.995-31.214-32.711-57.961-60.073-77.508C310.729 10.913 276.628 0 241.011 0c-49.517 0-96.471 21.561-128.823 59.154a7.5 7.5 0 1011.369 9.785C153.058 34.66 195.867 15 241.011 15c65.009 0 123.581 41.105 145.748 102.282 1.459 4.031 5.332 6.737 9.65 6.737h.013C451.881 124.02 497 169.207 497 224.749c0 25.879-9.784 50.471-27.55 69.245a7.5 7.5 0 1010.895 10.31C500.758 282.732 512 254.479 512 224.749c0-62.707-50.062-113.926-112.298-115.683zM263 458.048V442c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v16.048c-11.528 3.274-20 13.889-20 26.452 0 15.164 12.337 27.5 27.5 27.5s27.5-12.336 27.5-27.5c0-12.563-8.472-23.178-20-26.452zM255.5 497c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5zm-63-110.5a7.5 7.5 0 00-7.5 7.5v40.5c0 3.584-2.916 6.5-6.5 6.5h-13.548c-3.274-11.528-13.889-20-26.452-20-15.163 0-27.5 12.336-27.5 27.5s12.337 27.5 27.5 27.5c12.563 0 23.178-8.472 26.452-20H178.5c11.855 0 21.5-9.645 21.5-21.5V394a7.5 7.5 0 00-7.5-7.5zm-54 74.5c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5z"
                data-original="#000000"
              ></path>
              <path
                d="M434.5 365c-12.563 0-23.178 8.472-26.452 20H394.5a6.508 6.508 0 01-6.5-6.5v-38.513c12.148-.01 19.204-.033 19.632-.074 14.99-1.446 29.336-5.74 42.638-12.763a7.501 7.501 0 003.132-10.134c-1.935-3.663-6.472-5.067-10.134-3.131a99.502 99.502 0 01-36.841 11.074c-1.67.03-11.081.042-25.918.041h-.018c-59.521-.003-206.377-.218-291.84-.359-14.291-.026-27.802-3.886-39.072-11.16C27.927 299.507 15 275.786 15 250.029c0-36.919 26.339-68.194 62.63-74.365 4.759-.811 8.31-4.925 8.443-9.782.676-24.571 6.913-47.935 18.539-69.442a7.5 7.5 0 00-3.031-10.164 7.498 7.498 0 00-10.164 3.031c-12.146 22.47-18.931 46.778-20.19 72.316C29.723 170.535 0 207.101 0 250.029c0 30.875 15.493 59.306 41.444 76.055 13.691 8.837 30.006 13.525 47.181 13.557l34.375.056V378.5c0 3.584-2.916 6.5-6.5 6.5h-13.548c-3.274-11.528-13.889-20-26.452-20-15.163 0-27.5 12.336-27.5 27.5S61.337 420 76.5 420c12.563 0 23.178-8.472 26.452-20H116.5c11.855 0 21.5-9.645 21.5-21.5v-38.779l47 .072V359c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.185c16.369.024 32.462.046 48 .066V407c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-67.1c16.94.021 33.071.039 48 .054V434.5c0 11.855 9.645 21.5 21.5 21.5h13.548c3.274 11.528 13.889 20 26.452 20 15.163 0 27.5-12.336 27.5-27.5S387.663 421 372.5 421c-12.563 0-23.178 8.472-26.452 20H332.5a6.508 6.508 0 01-6.5-6.5v-94.532c18.181.015 34.13.024 46.989.024H373V378.5c0 11.855 9.645 21.5 21.5 21.5h13.548c3.274 11.528 13.889 20 26.452 20 15.163 0 27.5-12.336 27.5-27.5S449.663 365 434.5 365zm-358 40c-6.893 0-12.5-5.607-12.5-12.5S69.607 380 76.5 380 89 385.607 89 392.5 83.393 405 76.5 405zm296 31c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5 5.607-12.5 12.5-12.5zm62-31c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5 12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5z"
                data-original="#000000"
              ></path>
            </svg>
          }
          name="Serverless Web App"
          text="Serverless apps run without servers, using cloud services. They are scalable, cost-efficient, and performant."
        />
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 64 64"
              className="h-[80px] w-[80px] bg-clip-text fill-primaryBlue group-hover:fill-white"
            >
              <path
                d="M28 52H5a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h2v2H5a3 3 0 00-3 3v42a3 3 0 003 3h23zM9 0h2.001v2H9zm50 52v-2a3 3 0 003-3V5a3 3 0 00-3-3H13V0h46a5.006 5.006 0 015 5v42a5.006 5.006 0 01-5 5z"
                data-original="#000000"
              ></path>
              <path
                d="M19.03 54.778l1.002-4 1.94.487-1.002 4z"
                data-original="#000000"
              ></path>
              <path
                d="M28 60H18a1 1 0 01-1-1v-2a3 3 0 013-3h8v2h-8a1 1 0 00-1 1v1h9zM1 42h27v2H1zm3 4h2v2H4zm4 0h6v2H8zm47 18H35a5.006 5.006 0 01-5-5V19a5.006 5.006 0 015-5h20a5.006 5.006 0 015 5v40a5.006 5.006 0 01-5 5zM35 16a3 3 0 00-3 3v40a3 3 0 003 3h20a3 3 0 003-3V19a3 3 0 00-3-3z"
                data-original="#000000"
              ></path>
              <path
                d="M50 24H40c-1.874 0-2.659-1.632-2.907-3H31v-2h7a1 1 0 011 1c0 .017.056 2 1 2h10c.944 0 1-1.983 1-2a1 1 0 011-1h7v2h-6.093c-.248 1.368-1.033 3-2.907 3z"
                data-original="#000000"
              ></path>
              <path
                d="M41 18h8v2h-8zm0 41h8v2h-8zm-10-3h28v2H31zM18 28h-4a1 1 0 01-1-1v-1.466a9.941 9.941 0 01-1.619-.672L10.343 25.9a1 1 0 01-1.414 0L6.1 23.071a1 1 0 010-1.414l1.037-1.038A9.941 9.941 0 016.466 19H5a1 1 0 01-1-1v-4a1 1 0 011-1h1.466a9.941 9.941 0 01.672-1.619L6.1 10.343a1 1 0 010-1.414L8.929 6.1a1 1 0 011.414 0l1.038 1.037A9.941 9.941 0 0113 6.466V5a1 1 0 011-1h4a1 1 0 011 1v1.466a9.941 9.941 0 011.619.672L21.657 6.1a1 1 0 011.414 0L25.9 8.929a1 1 0 010 1.414l-1.037 1.038A9.941 9.941 0 0125.534 13H27a1 1 0 011 1v4a1 1 0 01-1 1h-1.466a9.941 9.941 0 01-.672 1.619l1.038 1.038a1 1 0 010 1.414L23.071 25.9a1 1 0 01-1.414 0l-1.038-1.037a9.941 9.941 0 01-1.619.671V27a1 1 0 01-1 1zm-3-2h2v-1.23a1 1 0 01.778-.976 7.917 7.917 0 002.473-1.027 1 1 0 011.241.139l.872.872 1.414-1.414-.872-.872a1 1 0 01-.139-1.241 7.917 7.917 0 001.027-2.473A1 1 0 0124.77 17H26v-2h-1.23a1 1 0 01-.976-.778 7.917 7.917 0 00-1.027-2.473 1 1 0 01.139-1.241l.872-.872-1.414-1.414-.872.872a1 1 0 01-1.241.139 7.917 7.917 0 00-2.473-1.027A1 1 0 0117 7.23V6h-2v1.23a1 1 0 01-.778.976 7.917 7.917 0 00-2.473 1.027 1 1 0 01-1.241-.139l-.872-.872-1.414 1.414.872.872a1 1 0 01.139 1.241 7.917 7.917 0 00-1.027 2.473A1 1 0 017.23 15H6v2h1.23a1 1 0 01.976.778 7.917 7.917 0 001.027 2.473 1 1 0 01-.139 1.241l-.872.872 1.414 1.414.872-.872a1 1 0 011.241-.139 7.917 7.917 0 002.473 1.027 1 1 0 01.778.976z"
                data-original="#000000"
              ></path>
              <path
                d="M16 21a5 5 0 115-5 5.006 5.006 0 01-5 5zm0-8a3 3 0 103 3 3 3 0 00-3-3zm1 28h-2v-4a1 1 0 011-1h1.466a9.941 9.941 0 01.672-1.619L17.1 33.343a1 1 0 010-1.414l2.829-2.829a1 1 0 011.414 0l1.038 1.037A9.941 9.941 0 0124 29.466V28a1 1 0 011-1h4v2h-3v1.23a1 1 0 01-.778.976 7.917 7.917 0 00-2.473 1.027 1 1 0 01-1.241-.139l-.872-.872-1.414 1.414.872.872a1 1 0 01.139 1.241 7.917 7.917 0 00-1.027 2.473 1 1 0 01-.976.778H17zm7-2h-2a5.006 5.006 0 015-5v2a3 3 0 00-3 3zm21 11a11 11 0 1111-11 11.013 11.013 0 01-11 11zm0-20a9 9 0 109 9 9.011 9.011 0 00-9-9z"
                data-original="#000000"
              ></path>
              <path
                d="M43 46a1 1 0 01-.707-.293l-5-5a1 1 0 010-1.414l3-3a1 1 0 011.414 0L43 37.586l5.293-5.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-9 9A1 1 0 0143 46zm-3.586-6L43 43.586 50.586 36 49 34.414l-5.293 5.293a1 1 0 01-1.414 0L41 38.414zM57 4h2v2h-2zM42 4h13v2H42z"
                data-original="#000000"
              ></path>
            </svg>
          }
          name="Design Development"
          text="I can convert your beautiful modern designs into deployed apps."
        />
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 64 64"
              className="h-[80px] w-[80px] bg-clip-text fill-primaryBlue group-hover:fill-white"
            >
              <path
                d="M35 53h18V35H35zm2-16h14v14H37z"
                data-original="#000000"
              ></path>
              <path
                d="M55 31v-6h-6v6h-2v-6h-3.765A7.956 7.956 0 0045 20c0-2.367-1.055-4.519-2.749-6H50c.551 0 1 .449 1 1v2.184A2.996 2.996 0 0049 20c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 00-2-2.816V15c0-1.654-1.346-3-3-3H39.304a6.94 6.94 0 00-1.422-2H58c.551 0 1 .449 1 1v2.184A2.996 2.996 0 0057 16c0 1.654 1.346 3 3 3s3-1.346 3-3a2.996 2.996 0 00-2-2.816V11c0-1.654-1.346-3-3-3H33v.014c-.076 0-.149-.013-.226-.01A8.986 8.986 0 0024 1a8.979 8.979 0 00-8.176 5.242A6.942 6.942 0 0014 6c-3.579 0-6.54 2.701-6.948 6.249C3.55 13.129 1 16.326 1 20c0 2.953 1.613 5.532 4 6.918V50c0 1.654 1.346 3 3 3h5.184A2.996 2.996 0 0016 55c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.996 2.996 0 00-2.816 2H8c-.551 0-1-.449-1-1V27.737A7.953 7.953 0 009 28v14c0 1.654 1.346 3 3 3h3.184A2.996 2.996 0 0018 47c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.996 2.996 0 00-2.816 2H12c-.551 0-1-.449-1-1V28h2v6c0 1.654 1.346 3 3 3h1.184A2.996 2.996 0 0020 39c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.996 2.996 0 00-2.816 2H16c-.551 0-1-.449-1-1v-6h18v3c-1.103 0-2 .897-2 2h-6v6h6v2h-6v6h6v2h-6v6h6c0 1.103.897 2 2 2v6h6v-6h2v6h6v-6h2v6h6v-6c1.103 0 2-.897 2-2h6v-6h-6v-2h6v-6h-6v-2h6v-6h-6c0-1.103-.897-2-2-2zm-3-10c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm8-4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM16 51c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm2-8c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm2-8c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm7 2v-2h4v2zm0 8v-2h4v2zm0 8v-2h4v2zm24-26h2v4h-2zm-6 4h-2v-4h2zm-4-4.082V31h-2v-3.263a7.963 7.963 0 002-.819zM3 20c0-2.962 2.212-5.512 5.145-5.931L9 13.867V13c0-2.757 2.243-5 5-5a4.95 4.95 0 012.001.42l1.008.441.344-1.045A6.984 6.984 0 0124 3a6.988 6.988 0 016.952 6.21l.119 1.06 1.05-.187a4.975 4.975 0 015.656 3.438l.166.535.543.138A5.99 5.99 0 0143 20c0 3.309-2.691 6-6 6H9c-3.309 0-6-2.691-6-6zm32 8h2v3h-2zm2 33h-2v-4h2zm8 0h-2v-4h2zm8 0h-2v-4h2zm-20-6V33h22l.001 22zm28-4v2h-4v-2zm0-8v2h-4v-2zm0-8v2h-4v-2z"
                data-original="#000000"
              ></path>
              <path
                d="M16.031 20h3.938l1.061 4.243 1.94-.485L19.781 11h-3.562L13.03 23.757l1.94.485zm2.188-7l1.25 5h-2.938l1.25-5zM31 22h-2v-9h2v-2h-6v2h2v9h-2v2h6z"
                data-original="#000000"
              ></path>
            </svg>
          }
          name="AI Integrated App"
          text="I can integrate AI api into your web app."
        />
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              className="h-[80px] w-[80px] bg-clip-text stroke-primaryBlue group-hover:stroke-white"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="15"
              >
                <path
                  d="M327.7 186.794c-.59.049-1.18.168-1.756.36l-17.836 5.945a7.442 7.442 0 01-5.645-.373 104.705 104.705 0 00-12.621-5.233 7.438 7.438 0 01-4.249-3.726l-8.405-16.809a7.499 7.499 0 00-6.708-4.146h-28.96a7.499 7.499 0 00-6.708 4.146l-8.405 16.809a7.435 7.435 0 01-4.249 3.726 104.248 104.248 0 00-12.621 5.233 7.442 7.442 0 01-5.645.373l-17.836-5.945a7.5 7.5 0 00-7.675 1.812l-20.478 20.478a7.5 7.5 0 00-1.812 7.675l5.945 17.836a7.437 7.437 0 01-.373 5.645 104.705 104.705 0 00-5.233 12.621 7.438 7.438 0 01-3.726 4.249l-16.809 8.405a7.499 7.499 0 00-4.146 6.708v28.96a7.499 7.499 0 004.146 6.708l16.809 8.405a7.435 7.435 0 013.726 4.249 104.248 104.248 0 005.233 12.621 7.442 7.442 0 01.373 5.645l-5.945 17.836a7.5 7.5 0 001.812 7.675l20.478 20.478a7.5 7.5 0 007.675 1.812l17.836-5.945a7.437 7.437 0 015.645.373 104.705 104.705 0 0012.621 5.233 7.438 7.438 0 014.249 3.726l8.405 16.809a7.499 7.499 0 006.708 4.146h28.96a7.499 7.499 0 006.708-4.146l8.405-16.809a7.435 7.435 0 014.249-3.726 104.248 104.248 0 0012.621-5.233 7.442 7.442 0 015.645-.373l17.836 5.945a7.5 7.5 0 007.675-1.812l20.478-20.478a7.5 7.5 0 001.812-7.675l-5.945-17.836a7.437 7.437 0 01.373-5.645 104.705 104.705 0 005.233-12.621 7.438 7.438 0 013.726-4.249l16.809-8.405a7.499 7.499 0 004.146-6.708v-28.96a7.499 7.499 0 00-4.146-6.708l-16.809-8.405a7.435 7.435 0 01-3.726-4.249 104.248 104.248 0 00-5.233-12.621 7.442 7.442 0 01-.373-5.645l5.945-17.836a7.5 7.5 0 00-1.812-7.675"
                  data-original="#000000"
                ></path>
                <path
                  d="M209.406 256l-31.062 31.062 31.062 31.063M302.594 256l31.062 31.062-31.062 31.063M271.531 256l-31.062 62.125"
                  data-original="#000000"
                ></path>
                <path
                  d="M126.366 457.906H479.5c13.807 0 25-11.193 25-25V116.219m-497 0v316.688c0 13.807 11.193 25 25 25h58.866M55.653 54.094H32.5c-13.807 0-25 11.193-25 25v37.125h497V79.094c0-13.807-11.193-25-25-25H90.653m382.785 31.062h0m-31.063 0h0m-31.063 0h0"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          }
          name="Custom Website"
          text="I am professional enough to make any business presence online."
        />
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 60 56"
              className="h-[80px] w-[80px] bg-clip-text fill-primaryBlue group-hover:fill-white"
            >
              <path
                d="M27 6h6a1 1 0 000-2h-6a1 1 0 000 2zm17 0h11a1 1 0 000-2H44a1 1 0 000 2z"
                data-original="#000000"
              ></path>
              <path
                d="M55 0H5a5.006 5.006 0 00-5 5v38a5.006 5.006 0 005 5h9.008a19.956 19.956 0 0031.956 0H55a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM5 2h50a3 3 0 013 3v3H2V5a3 3 0 013-3zm25 52a18.09 18.09 0 01-14.561-7.416 1 1 0 01-.027-1.158c.023-.024.047-.05.068-.075a.953.953 0 01.752-.358h.026c.331.011.638.175.831.445a15.9 15.9 0 002.019 2.262l.018.016c6.12 5.71 15.615 5.712 21.739.006l.035-.034a15.932 15.932 0 004.524-7.421A1 1 0 0044.46 39h-1.422l-.015-.157 2.7-3.29c.02-.025.04-.05.057-.078l1.237-1.463 3.96 4.83.773-.634-.782.79h-2.4a1 1 0 00-.977.791A18.069 18.069 0 0130 54zm-7.144-6h14.332a13.838 13.838 0 01-14.332 0zM55 46h-7.7a19.7 19.7 0 002.066-5h1.6c.786 0 1.501-.457 1.831-1.171a2.1 2.1 0 00-.268-2.253l-3.96-4.83a2.018 2.018 0 00-3.121-.004l-1.261 1.532a1.125 1.125 0 00-.065.089l-2.638 3.216a2.105 2.105 0 00-.266 2.251A2.018 2.018 0 0043.04 41h.04a13.956 13.956 0 01-3.3 5H20.249a13.973 13.973 0 01-1.549-1.743 3.047 3.047 0 00-2.389-1.263A2.906 2.906 0 0014 44.01a1.192 1.192 0 00-.068.074A3 3 0 0013.253 46H5a3 3 0 01-3-3V10h56v33a3 3 0 01-3 3z"
                data-original="#000000"
              ></path>
              <circle cx="5" cy="5" r="1" data-original="#000000"></circle>
              <circle cx="9" cy="5" r="1" data-original="#000000"></circle>
              <circle cx="13" cy="5" r="1" data-original="#000000"></circle>
              <path
                d="M30 16a19.894 19.894 0 00-19.6 16H9.04c-.786 0-1.5.457-1.831 1.17-.358.74-.253 1.62.268 2.254l3.96 4.831a2.022 2.022 0 003.126 0l3.962-4.833c.52-.634.623-1.513.266-2.251A2.018 2.018 0 0016.96 32h-.38a14 14 0 0125.041-3.8 3.031 3.031 0 002.39 1.353 2.925 2.925 0 002.423-1.077l.005-.006.005-.007a2.987 2.987 0 00.173-3.571c-3.7-5.56-9.938-8.9-16.617-8.892zm14.893 11.2a.936.936 0 01-.789.354 1.047 1.047 0 01-.825-.474A16 16 0 0014.32 32.8a1 1 0 00.98 1.2h1.662l.015.158-3.994 4.83-3.96-4.83-.773.634.79-.792h2.2a1 1 0 00.988-.843A17.989 17.989 0 0144.953 26c.244.367.221.85-.056 1.193l.774.634zM5 15h2a1 1 0 000-2H5a1 1 0 000 2zm6 0h9a1 1 0 000-2h-9a1 1 0 000 2zm3 3a1 1 0 00-1-1H5a1 1 0 000 2h8a1 1 0 001-1zm41-5h-2a1 1 0 000 2h2a1 1 0 000-2zm-15 2h9a1 1 0 000-2h-9a1 1 0 000 2zm15 2h-8a1 1 0 000 2h8a1 1 0 000-2z"
                data-original="#000000"
              ></path>
            </svg>
          }
          name="Revamp your Website"
          text="Revitalize your website with expert editing services for enhanced performance and user experience."
        />
        <ServiceCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enableBackground="new 0 0 512 512"
              viewBox="0 0 60 60"
              className="h-[80px] w-[80px] bg-clip-text fill-primaryBlue group-hover:fill-white"
            >
              <path
                d="M30 9C18.42 9 9 18.421 9 30s9.42 21 21 21 21-9.421 21-21S41.579 9 30 9zm3.029 9.611l-1.01-1.606 5.981.653-1.762 5.703-.97-1.439a.999.999 0 00-1.382-.275L16.469 33.191a.999.999 0 01-1.416-.32l-1.94-3.189a1.001 1.001 0 00-1.407-.314l-.699.463c.008-.861.088-1.704.207-2.534l1.133-.745a1.007 1.007 0 011.417.319l1.94 3.19a1.001 1.001 0 001.408.313l15.64-10.37a.997.997 0 00.277-1.392zM15.943 42.737L18 41.374v3.34a19.208 19.208 0 01-2.057-1.977zM27 48.739a18.835 18.835 0 01-3-.726V37.392l3-1.987zm9-.726c-.968.323-1.971.561-3 .726V31.422l3-1.988zm2-.804v-18.71c0-.557-.304-1.064-.794-1.324a1.493 1.493 0 00-1.539.08l-3.988 2.644A1.487 1.487 0 0031 31.16v17.789c-.333.017-.662.051-1 .051s-.667-.033-1-.051v-14.48a1.496 1.496 0 00-2.332-1.244l-3.987 2.643A1.489 1.489 0 0022 37.13v10.08a18.88 18.88 0 01-2-1.084v-5.685a1.497 1.497 0 00-2.332-1.244l-2.996 1.984a18.875 18.875 0 01-3.542-9.033l.815-.54 1.396 2.293a2.996 2.996 0 004.241.953l16.584-10.991.408.606a2.015 2.015 0 002.005.888 2.035 2.035 0 001.67-1.454l1.668-5.673a2.008 2.008 0 00-.251-1.699 2.073 2.073 0 00-1.516-.915l-5.918-.6a2.014 2.014 0 00-1.977.979 1.991 1.991 0 00.065 2.174l.487.724-13.934 9.239-1.395-2.295a3.005 3.005 0 00-3.685-1.242C14.128 16.745 21.401 11 29.999 11c10.477 0 19 8.523 19 19 0 7.616-4.515 14.182-11 17.21z"
                data-original="#000000"
              ></path>
              <path
                d="M59.498 27.085a3.275 3.275 0 00-2.673-2.264l-2.443-.349a24.764 24.764 0 00-3.232-7.807l1.479-1.972c.765-1.02.875-2.36.287-3.497-.499-.969-1.072-1.779-1.703-2.41s-1.441-1.204-2.409-1.703a3.276 3.276 0 00-3.497.287l-1.973 1.479a24.745 24.745 0 00-7.807-3.232l-.349-2.443A3.277 3.277 0 0032.913.5c-2.083-.664-3.739-.665-5.829 0a3.275 3.275 0 00-2.263 2.673l-.349 2.443a24.745 24.745 0 00-7.807 3.232l-1.972-1.479a3.27 3.27 0 00-3.497-.287c-.968.499-1.779 1.071-2.41 1.703-.629.629-1.202 1.439-1.703 2.409a3.274 3.274 0 00.287 3.497l1.479 1.973a24.72 24.72 0 00-3.233 7.808l-2.442.348a3.276 3.276 0 00-2.673 2.264c-.333 1.042-.502 2.022-.502 2.915s.169 1.873.502 2.915a3.276 3.276 0 002.673 2.264l2.442.348a24.74 24.74 0 003.233 7.808L7.37 45.306a3.278 3.278 0 00-.287 3.498c.501.97 1.074 1.78 1.703 2.409.631.632 1.442 1.204 2.409 1.703a3.276 3.276 0 003.498-.287l1.972-1.479a24.745 24.745 0 007.807 3.232l.349 2.443a3.276 3.276 0 002.263 2.674c1.044.332 2.024.501 2.915.501s1.872-.169 2.915-.502a3.275 3.275 0 002.264-2.673l.349-2.443a24.764 24.764 0 007.807-3.232l1.972 1.479a3.275 3.275 0 003.497.287c.969-.499 1.779-1.072 2.41-1.703s1.204-1.441 1.703-2.409a3.276 3.276 0 00-.287-3.497l-1.479-1.973a24.745 24.745 0 003.232-7.807l2.443-.349a3.277 3.277 0 002.674-2.265c.332-1.042.501-2.023.501-2.914s-.169-1.872-.501-2.914zm-1.904 5.221a1.29 1.29 0 01-1.052.893l-3.136.447a1.002 1.002 0 00-.84.798 22.768 22.768 0 01-3.467 8.373.998.998 0 00.03 1.157l1.899 2.533c.301.4.343.929.109 1.38-.399.773-.862 1.435-1.34 1.912s-1.139.94-1.913 1.34c-.45.233-.978.192-1.38-.109l-2.532-1.899a.995.995 0 00-1.157-.03 22.768 22.768 0 01-8.373 3.467 1.002 1.002 0 00-.798.84l-.447 3.136c-.07.495-.412.898-.892 1.051-.834.267-1.632.407-2.307.407s-1.472-.141-2.307-.406a1.29 1.29 0 01-.892-1.052l-.448-3.136a1 1 0 00-.798-.84 22.763 22.763 0 01-8.372-3.467 1.005 1.005 0 00-1.158.03l-2.532 1.899a1.298 1.298 0 01-1.38.109c-.772-.398-1.434-.861-1.912-1.34-.477-.477-.94-1.138-1.34-1.913-.232-.45-.19-.979.11-1.38l1.899-2.532a.998.998 0 00.03-1.157 22.768 22.768 0 01-3.467-8.373 1.002 1.002 0 00-.84-.798l-3.135-.447a1.287 1.287 0 01-1.051-.893c-.267-.833-.407-1.63-.407-2.306s.141-1.473.407-2.306a1.29 1.29 0 011.05-.893l3.135-.447c.421-.061.758-.381.84-.798a22.768 22.768 0 013.467-8.373 1 1 0 00-.03-1.157l-1.899-2.533c-.3-.4-.342-.929-.109-1.379.4-.775.863-1.437 1.34-1.913.478-.479 1.14-.941 1.913-1.34.451-.232.979-.19 1.379.109l2.532 1.899c.339.255.804.267 1.158.03a22.763 22.763 0 018.372-3.467 1 1 0 00.798-.84l.448-3.136a1.29 1.29 0 01.891-1.051c.835-.267 1.633-.407 2.307-.407s1.473.141 2.306.406c.48.153.822.557.893 1.052l.447 3.136c.061.421.381.758.798.84a22.768 22.768 0 018.373 3.467c.353.236.818.225 1.157-.03l2.533-1.899c.399-.3.926-.344 1.38-.109.773.399 1.435.862 1.912 1.34s.94 1.139 1.34 1.913c.233.45.191.979-.109 1.38l-1.899 2.532a.996.996 0 00-.03 1.157 22.768 22.768 0 013.467 8.373c.082.417.419.737.84.798l3.136.447c.495.07.898.412 1.051.892.267.834.407 1.632.407 2.307s-.141 1.473-.406 2.306z"
                data-original="#000000"
              ></path>
            </svg>
          }
          name="Modernize Web App Ideas"
          text="Boost your business with cutting-edge website enhancements and functionalities, Let me assist you!"
        />
      </div>
    </div>
  );
};

export default Services;
