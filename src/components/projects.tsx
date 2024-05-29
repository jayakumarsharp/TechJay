import { faAnglesRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHasMounted } from "@react-hooks-library/core";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Make sure to import the icon
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyProjects() {
  const hasMounted = useHasMounted();

  return (
    <>
      {hasMounted && (
        <>
          {" "}
          <div className="  items-start justify-center  px-10  my-24 md:px-24">
            <div className="">
              {"  "}
              {/* Adjust max width as needed */}
              <div className="flex justify-start space-x-5 md:w-[85%] mb-10 md:mb-0">
                <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
                  {"03.  "}
                  <span className="text-blue font-[500] ml-2">
                    {" "}
                    Cool Projects{" "}
                  </span>
                </h1>
                <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center"></div>
              </div>
              <div className="flex flex-col     items-center justify-center text-white text-md mt-5 font-normal md:mt-10">
                <ProjectList />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center  text-blue md:pr-0"></div>
          {/* Right column contents */}
        </>
      )}
    </>
  );
}

function ProjectList() {
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

    const links = document.querySelectorAll(".projects");
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
    <div
      id="projects"
      className="flex flex-col md:grid md:gap-10   gap-y-10     "
    >
      
      <div className="flex flex-col md:grid grid-cols-[40%_50%] gap-10">
       
        <div
          key={"FinTech"}
          className="projects bg-white rounded-lg shadow-xl aspect-video  relative md:aspect-[13/4.8]"
        >
          <div className="  "></div>
          <img
            src="assets/projects/edcomposer.png"
            className="object-cover bg-blend-multiply	aspect-video  md:aspect-[13/4.8]  inset-0 transition duration-300 ease-in-out rounded-lg"
            alt=""
          />

          <div className="absolute flex flex-col rounded-lg justify-end h-full p-4 bottom-0 bg-gradient-to-t from-gray-900 to-transparent left-0 right-0">
            <div className="flex flex-row  justify-between">
              <h2 className="text-xl font-sans font-[500] text-blue ">
              FinTech Insights
              </h2>
              <div className="flex flex-row space-x-5 ">
              <Link href={"https://github.com/jayakumarsharp/ThemeFrontend"}>
                  <FontAwesomeIcon
                    className="text-blue text-[15px] mt-1 w-3"
                    icon={faGithub}
                  />Nodejs Client Frontend
                </Link>
                <Link href={"https://github.com/jayakumarsharp/PMServer"}>
                  <FontAwesomeIcon
                    className="text-blue text-[15px] mt-1 w-3"
                    icon={faGithub}
                  /> Nodejs Server
                </Link>
                <Link href={"#"}>
                  <FontAwesomeIcon
                    className="text-blue text-[15px] mt-1 w-3"
                    icon={faArrowUpRightFromSquare}
                  />
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-normal">
             
             .{" "}
            </p>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}
