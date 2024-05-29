import React, { useEffect, useState } from "react";
import BlurredBackground from "./blurredBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Make sure to import the icon
import NavBar from "./navbar";
import Typewriter from "./typewritter";
import { BackgroundBeams } from "./backgroundBeams";
import Link from "next/link";
export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, 300 * index); // 300ms delay multiplied by the index
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const links = document.querySelectorAll(".home-left");
    links.forEach((link) => {
      observer.observe(link as Element);
    });

    // Cleanup function
    return () => {
      links.forEach((link) => {
        observer.unobserve(link as Element);
      });
    };
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <section className=" h-[100dvh] flex flex-col items-center z-20 relative overflow-hidden antialiased">
      <NavBar />
      {/* <BackgroundBeams /> */}

      <div className="hidden md:flex flex-col items-center absolute left-5 bottom-5 space-y-8 z-20">
        {/* Social Icons Column */}
        <Link
          target="_blank"
          href="https://github.com/jayakumarsharp"
          legacyBehavior
        >
          <a aria-label="Jayakumar Thangavel Github">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white/50 text-2xl w-5"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/jayakumarthangavel/"
          legacyBehavior
        >
          <a aria-label="Jayakumar Thangavel LinkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white/50 text-2xl w-5"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/tech_jayakumar"
          legacyBehavior
        >
          <a aria-label="Jayakumar Thangavel Twitter">
            <FontAwesomeIcon
              icon={faXTwitter} // Assuming you have a Twitter icon, replace faLinkedin with faTwitter
              className="text-white/50 text-2xl w-5"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="#"
          legacyBehavior
        >
          <a aria-label="Jayakumar Thangavel Instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white/50 text-2xl w-5"
            />
          </a>
        </Link>
        <div className="w-3 bg-white/10  h-36"></div>
      </div>

      {/* Main content grid */}
      <div className="relative top-[-5%]  grid grid-cols-1 md:grid-cols-2 items-center h-full  px-10 md:px-32">
        {/* Left Column for Content */}
        <div className=" home-left flex flex-col justify-center space-y-5 ">
          

          <p className="text-xl md:text-2xl  text-blue ">Hello there 👋</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl   text-white leading-none my-4">
            I'm{" "}
            <span className="relative font-[600] before:absolute before:inset-x-0 before:bottom-0 leading-none md:before:bottom-2 lg:before:bottom-2  before:block before:w-[100%] before:h-[14px] before:bg-blue before:bg-opacity-60">
              Jayakumar
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl  text-white leading-none">
            a <Typewriter />
          </h2>
          <p className="text-sm md:text-xl lg:text-xl font-normal margin-top    text-white mt-10 md:mt-14">
           Fullstack Developer | Wealth Management Specialist
          </p>
          <Link href="/assets/resume/Jayakumar-Resume.pdf">
            <div className=" md:mt-10 md:w-1/3 margin-top text-center  transition duration-300 ease-in-out bg-blue hover:bg-blue-500 text-white font-[600] py-3 md:py-2 px-4 text-xl  hover:border-transparent rounded-lg">
              Resume
            </div>
          </Link>
        </div>

        {/* Right Column for the Avatar */}
        <div className="hidden md:flex justify-end items-center">
          <div className="rounded-full bg-blue-500/50 border-8 border-blue-500 p-2 bg-blue/50 max-w-[400px] w-full relative">
            {/* Icons around the avatar */}
            <img
              className="top-[0px] right-0 rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/firebase.png"
              alt="Firebase"
            />
            <img
              className="top-10 left-[0px] rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/flutter.png"
              alt="Flutter"
            />
            <img
              className="bottom-[0px] right-0 rotate-5 w-1/5 md:w-1/4 absolute"
              src="assets/icons/python.png"
              alt="Python"
            />
            <img
              className="bottom-[0px] left-0 rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/nodejs.png"
              alt="Node.js"
            />
            {/* Main avatar image */}
            <img
              className=" h-auto object-cover rounded-full"
              src="assets/memoji.png"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="visible md:collapse border-white absolute mouse translate-x-[50%]   "></div>
      </div>
    </section>
  );
}
