import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import Link from "next/link";

type MentorshipType = {
  title: string;
  description: string;
  organization: string;
  link: string;
};
export default function Mentorship() {
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

  const experiences: MentorshipType[] = [
        // Add more experiences as needed
  ];

  return (
    <>
      {/* Container for the blog section */}
      <div id="mentorship" className="  my-10 md:my-14 px-10 md:px-24 w-full">
        <div className="flex justify-start space-x-5 md:w-[85%]">
          <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
            {"05.  "}
            <span className="text-blue ml-2">Mentorship</span>
          </h1>
          <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center "></div>
        </div>
        {/* Blog list */}
        <MentorshipList experiences={experiences} />
      </div>
    </>
  );
}

const MentorshipList = ({ experiences }: { experiences: MentorshipType[] }) => {
  return (
    <>
      {" "}
      <div className="container w-full mt-10 px-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              link={exp.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};
const ExperienceCard = ({
  title,
  organization,
  description,
  link,
}: MentorshipType) => {
  return (
    //open link in new tab
    <a target="_blank" key={title + organization} href={link}>
      <div className="  projects bg-[#1E293B] shadow-lg rounded-lg p-6 text-white">
        <div className="flex items-start justify-between">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-4xl text-blue w-10"
          />{" "}
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
            <span className="icon">🔗</span> {/* Replace with actual icon */}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-light mt-2 text-blue">{organization}</p>
          <p className="text-sm mt-2 ">{description}</p>
        </div>
      </div>
    </a>
  );
};
