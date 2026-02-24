"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/components/Navbar";
import Benefits from "@/sections/Benefit";
import Cloud from "@/sections/Cloud";
import Flight from "@/sections/Flight";
import Hero from "@/sections/Hero";
import Image from "next/image";

export default function Home() {
  useGSAP(() => {
    const sections = [
      { id: "#about", className: "text-white" },
      { id: "#flight", className: "text-[#312726]" },
      // { id: "#benefit", className: "nav-gold" },
      // { id: "#global", className: "nav-light" },
    ];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.id,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => setNavbar(section.className),
        onEnterBack: () => setNavbar(section.className),
      });
    });

    function setNavbar(className) {
      const nav = document.getElementById("navbar");
      const hsvg = document.getElementById("hero-svg");
      nav.className = "fixed top-0 h-20 w-screen flex items-center justify-between px-28 z-50 transition-colors duration-500 " + className;
      hsvg.className = "logo text-4xl z-10 sticky top-8 transition-colors duration-500 " + className;
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Cloud />
      <Flight />
      {/* <Benefits /> */}
    </>
  );
}
