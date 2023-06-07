import FreelanceBanner from "@/components/atoms/FreelanceBanner";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import HeroComp from "@/components/layout/HeroComp";
import MyWork from "@/components/layout/MyWork";
import Navbar from "@/components/layout/Navbar";
import Services from "@/components/layout/Services";
import Skills from "@/components/layout/Skills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="main-background w-full flex flex-col h-screen ">
        <Navbar />
        <HeroComp />
      </div>
      <About/>
      <Skills />
      <Services/>
      {/* @ts-ignore  */}
      <MyWork/>
      <FreelanceBanner/>
      <Contact/>
    </main>
  );
}
