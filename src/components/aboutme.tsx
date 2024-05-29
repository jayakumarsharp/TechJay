import React, { useEffect } from "react";
import BlurredBackground from "./blurredBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AboutMe() {
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

    const links = document.querySelectorAll(".photo, .about-us");
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
    <>
      <div
        id="aboutme"
        className=" mt-10 flex flex-col-reverse md:grid  md:grid-cols-[40%_60%] md:gap-10 items-center justify-center md:pl-14 md:pr-24"
      >
        <div className="flex justify-center items-center h-full pr-10 md:pr-0 ">
          <div className="photo relative left-[5%] md:left-0  h-[40vh] w-[30vh] md:w-[50vh] md:h-[55vh] mt-5 md:mt-0 self-center text-center rounded-lg border-7 border-blue bg-white before:before-absolute before:rounded-lg before:border-blue before:border-[5px] object-cover">
            <Image
              fill={true}
              className=" w-full rounded-lg object-cover border-[5px] border-blue after::shadow-xl"
              src="/assets/me.jpeg"
              alt="Photo of Jayakumar Thangavel"
            />
          </div>
        </div>{" "}
        <div className=" about-us flex flex-col justify-center items-center px-10 my-5 ">
          <div className="">
            {"  "}
            {/* Adjust max width as needed */}
            <div className="flex justify-start space-x-5 md:w-[85%]">
              <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
                {"01.  "}
                <span className="text-blue ml-2"> About Me </span>
              </h1>
              <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[40%] self-center"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-white text-md mt-10 font-normal">
              <p>
                Hi there! I'm Jayakumar Thangavel, a{" "}
                <span className="text-blue">software engineer</span> who loves
                diving into Fullstack application development. My toolbox is packed with
                cool stuff like Flutter, Node.js, MongoDB,Firebase and more... <br />
                <br />
                I've also had good knowledge in wealth management and working with 
                <span className="text-blue"> SS&C Advent</span> Adding
                <span className="text-blue"> FinIQ</span> Products. Sharing what I
                know and learning from others is something I really enjoy.
                <br />
                <br />
                
                <br />
                In a nutshell, I'm all about building amazing ideas, sharing tech
                insights, and always up for a good coding !{" "}
              </p>
              <ul className=" hidden text-white text-lg mt-5 md:grid grid-cols-2 gap-5 w-[100%] self-center  md:w-[100%]">
                <li className="flex flex-row h-5 justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2 text-center ">Nodejs</span>
                </li>
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">ReactJs</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">NextJs</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">MongoDB</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">MySQL</span>
                </li>
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1 "
                    icon={faAnglesRight}
                  />
                  <span className="pl-2 pr-[13%] md:pr-0">Microsoft SQL</span>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
        {/* Right column contents */}
      </div>
    </>
  );
}
