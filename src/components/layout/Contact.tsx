"use client";
import React, { useState } from "react";
import MainWrapper from "../wrappers/MainWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Poppins, Barlow } from "next/font/google";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const barlowC = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  preload: true,
  adjustFontFallback: true,
  style: "normal",
  fallback: ["system-ui", "arial"],
});

const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .email("Email must be a valid email address")
      .min(1, "Email is required"),
    subject: z
      .string()
      .min(10, "Subject must be at least 10 characters long")
      .max(100, "Subject must be at most 100 characters long"),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters long")
      .max(1000, "Message must be at most 1000 characters long"),
  })
  .required();

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await fetch("https://formspree.io/f/mgebjdyj", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Something went wrong. Please try again");
        throw new Error("Something went wrong in form Submission");
      } else {
        toast.success("Message Sent Successfully");
        reset();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="Contact" className="flex flex-col mt-36 items-center justify-center">
      <MainWrapper>
        <div>
          <Toaster />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <h2 className="mb-8  text-6xl font-extrabold">Contact Me</h2>
          <p className="mb-16 text-center text-secondaryBlack w-full px-4 md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tenetur at corporis repellendus ipsum temporibus, perferendis quam
            in quibusdam commodi!
          </p>
          <div className="flex w-full flex-col gap-y-16 md:gap-y-0 md:gap-x-6 md:flex-row">
            <div className="flex w-full flex-col gap-y-4 px-4">
              <div className="flex gap-x-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-[100px] md:w-[100px] h-[60px] w-[60px] bg-indigo-50 fill-primaryBlue p-3 md:p-5"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.832 2.445a1 1 0 01-.277 1.387l-.72.48A9.96 9.96 0 0122 9c0 5.185-3.947 9.449-9 9.95V20h4a1 1 0 110 2H7a1 1 0 110-2h4v-1.05a9.985 9.985 0 01-6.724-3.599l-.721.481a1 1 0 01-1.11-1.664l1.5-1A.996.996 0 014.507 13a1 1 0 01.84.444 8 8 0 0013.32-8.867.995.995 0 01-.167-.568 1 1 0 01.445-.84l1.5-1a1 1 0 011.387.276zM12 5a4 4 0 100 8 4 4 0 000-8zM6 9a6 6 0 1112 0A6 6 0 016 9z"
                      clipRule="evenodd"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <p className="flex w-full items-center justify-center text-primaryBlue">
                  mahmedsiddiqui333@gmail.com
                </p>
              </div>
              <div className="flex gap-x-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-[100px] md:w-[100px] h-[60px] w-[60px] bg-indigo-50  fill-primaryBlue p-3 md:p-5"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                    >
                      <path
                        d="M140.008 89h-30c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h30c11.045 0 20-8.954 20-20V109c0-11.046-8.955-20-20-20M126.017 346C103.311 346 85 364.368 85 387.003 85 409.632 103.311 428 126.017 428c22.616 0 40.977-18.368 40.977-40.997 0-22.635-18.361-41.003-40.977-41.003M402 89h-29c-11.046 0-20 8.954-20 20v90.341c0 26.121-1.164 59.726-37.092 59.726-36.429 0-43.908-28.47-43.908-57.856V109c0-11.046-8.954-20-20-20h-28c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h28c11.046 0 20-8.954 20-20v-10.741h.065c9.334 17.708 32.19 34.741 66.249 34.741C409.186 319 422 274.002 422 213.336V109c0-11.046-8.954-20-20-20"
                        data-original="#000000"
                      ></path>
                      <path
                        fill="none"
                        className="stroke-primaryBlue"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M492 80c0-33.137-26.863-60-60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h352c33.137 0 60-26.863 60-60V181"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p className="flex w-full items-center justify-center text-secondaryBlack">
                  <Link href="https://www.linkedin.com/in/muhammad-ahmed-siddiqui-webdeveloper/">
                    checkout the linkedin profile
                  </Link>
                </p>
              </div>
              <div className="flex gap-x-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-[100px] md:w-[100px] h-[60px] w-[60px] bg-indigo-50  fill-primaryBlue p-3 md:p-5"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512.002 512.002"
                  >
                    <path
                      d="M354.338 332.911l38.918-38.918L511.99 412.728l-38.919 38.918zm-22.08 20.342c-22.589 14.787-53.192 12.262-73.038-7.584l-92.883-92.883c-19.846-19.846-22.371-50.45-7.584-73.039L39.144 60.138c-43.677 43.894-51.73 111.966-19.455 164.847a803.745 803.745 0 00267.332 267.332c52.88 32.275 120.952 24.222 164.846-19.455L332.258 353.253zM60.36 38.92L99.276 0l118.735 118.735-38.918 38.918z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <p className="flex w-full items-center justify-center text-primaryBlue">
                  (+92) 333 0233 082
                </p>
              </div>
            </div>

            <form
              className="flex w-full flex-col gap-y-3 px-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className={`flex w-full  flex-col gap-y-3 text-secondaryBlack ${barlowC.className}`}
              >
                <div className="w-full gap-y-2 ">
                  <input
                    className="w-full bg-indigo-50 p-4   outline-none transition-all duration-100 focus:bg-[#f0f0f0] focus:outline-none"
                    id="name"
                    autoComplete="disable"
                    placeholder="Name"
                    {...register("name")}
                  />
                  <p className="h-5 pl-3 text-sm">
                    {errors.name && errors.name.message}
                  </p>
                </div>

                <div className="w-full gap-y-2  ">
                  <input
                    className="w-full bg-indigo-50 p-4   outline-none transition-all duration-100 focus:bg-[#f0f0f0] focus:outline-none"
                    id="email"
                    placeholder="Email"
                    autoComplete="disable"
                
                    {...register("email")}
                  />
                  <p className="h-5 pl-3 text-sm">
                    {errors.email && errors.email.message}
                  </p>
                </div>

                <div className="w-full gap-y-2 ">
                  <input
                    className="w-full bg-indigo-50 p-4   outline-none transition-all duration-100 focus:bg-[#f0f0f0] focus:outline-none"
                    id="subject"
                    autoComplete="off"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                  <p className="h-5 pl-3 text-sm">
                    {errors.subject && errors.subject.message}
                  </p>
                </div>
                <div className="w-full gap-y-2 ">
                  <textarea
                    className="w-full bg-indigo-50 p-4  outline-none transition-all duration-100 focus:bg-[#f0f0f0] focus:outline-none"
                    id="message"
                    autoComplete="off"
                    placeholder="Message"
                    {...register("message")}
                  />
                  <p className="h-5 pl-3 text-sm">
                    {errors.message && errors.message.message}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className={`${
                  poppins.className
                } h-12 rounded-sm bg-primaryBlue ${
                  loading ? "" : "py-3"
                } px-3  text-xs font-semibold uppercase tracking-wider text-white  transition-all duration-150 hover:text-black md:w-44`}
              >
                {loading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ margin: "auto" }}
                    className="h-12 w-12"
                    display="block"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 100 100"
                  >
                    <g transform="translate(20 50)">
                      <circle r="6" fill="#ffffff">
                        <animateTransform
                          attributeName="transform"
                          begin="-0.375s"
                          calcMode="spline"
                          dur="1s"
                          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                          keyTimes="0;0.5;1"
                          repeatCount="indefinite"
                          type="scale"
                          values="0;1;0"
                        ></animateTransform>
                      </circle>
                    </g>
                    <g transform="translate(40 50)">
                      <circle r="6" fill="#ffffff">
                        <animateTransform
                          attributeName="transform"
                          begin="-0.25s"
                          calcMode="spline"
                          dur="1s"
                          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                          keyTimes="0;0.5;1"
                          repeatCount="indefinite"
                          type="scale"
                          values="0;1;0"
                        ></animateTransform>
                      </circle>
                    </g>
                    <g transform="translate(60 50)">
                      <circle r="6" fill="#ffffff">
                        <animateTransform
                          attributeName="transform"
                          begin="-0.125s"
                          calcMode="spline"
                          dur="1s"
                          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                          keyTimes="0;0.5;1"
                          repeatCount="indefinite"
                          type="scale"
                          values="0;1;0"
                        ></animateTransform>
                      </circle>
                    </g>
                    <g transform="translate(80 50)">
                      <circle r="6" fill="#ffffff">
                        <animateTransform
                          attributeName="transform"
                          begin="0s"
                          calcMode="spline"
                          dur="1s"
                          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                          keyTimes="0;0.5;1"
                          repeatCount="indefinite"
                          type="scale"
                          values="0;1;0"
                        ></animateTransform>
                      </circle>
                    </g>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Contact;
