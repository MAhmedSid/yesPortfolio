
import Footer from "@/components/atoms/Footer";
import FreelanceBanner from "@/components/atoms/FreelanceBanner";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import HeroComp from "@/components/layout/HeroComp";
import MyWork from "@/components/layout/MyWork";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/layout/Services";
import Skills from "@/components/layout/Skills";
import { Metadata } from "next";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const metadata: Metadata = {
  title: "Muhammad Ahmed Siddiqui",
  description:
    "M. Ahmed Siddiqui - Expert in Modern Web Development with Next.js. Experience fast, secure, and cutting-edge website solutions. Specializing in HTML, CSS, JavaScript, React, Next.js, and more. Offering full-stack development services for landing pages, e-commerce sites, blogs, and AI-integrated apps. Contact for unparalleled support.",
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <div className="main-background flex h-screen w-full flex-col ">
          <Navbar />
          <HeroComp />
        </div>
        <About />
        <Skills />
        <Services />
        {/* @ts-ignore  */}
        <MyWork />
        <FreelanceBanner />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
