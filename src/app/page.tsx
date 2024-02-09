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

export const metadata: Metadata = {
  title: "Ahmed Aqil - JavaScript Web Developer",
  description:
    "Ahmed Aqil - JavaScript Developer and Freelancer with Next JS, Cloud, AI, Serverless and Headless Web App Experience. Delivering fast, secure, and cutting edge website solutions that leverage the power of AI. Proficient in HTML, CSS, JavaScript, React, Next.js, and other web technologies. Offering fast, secure, and cost efficient development services for modern websites UI, landing pages, eCommerce sites, blogs, and AI integrated web apps. Contact for unparalleled support and satisfaction.",
    creator: 'Ahmed Aqil',
    authors: { name: 'Ahmed Aqil'},
    applicationName: 'Portfolio of Mr.Ahmed Dev.',
    keywords: ['Ahmed Aqil','Ahmed','Aqil',"Website Developer",'Portfolio','JavaScript Developer','React Developer','Next js developer', ],
    category: 'portfolio',
    themeColor: '#3d64fe',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
}
};


export default function Home() {
  return (
      <main className="w-[100vw] flex flex-col">
        <div className="main-background flex h-screen w-full flex-col ">
          <Navbar />
          <HeroComp />
        </div>
        <About />
        <Skills />
        <Services />
        {/* @ts-ignore  */}
        <MyWork />
        {/* <FreelanceBanner /> */}
        <Contact />
        <Footer />
      </main>
  );
}
