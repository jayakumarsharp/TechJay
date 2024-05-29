import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import TagCloud from "TagCloud";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only attempt to use TagCloud if the ref is current
    if (containerRef.current) {
      const texts = [
        "Flutter",
        "Firebase",
        "JavaScript",
        "MySQL",
        "Postgres",
        "Docker",
        "NodeJS",
        "Express",
        "MongoDB",
        "Python",        
        "Git",
        "FastAPI",
        "Flutter",
        "Firebase",
        "JavaScript",
        "MySQL",        
        "Postgres",
        "Docker",
        "NodeJS",
        "Express",
        "MongoDB",
        "Python",        
        "Git",
        "Dart",
        "Compose",
        
      ];

      const size = containerRef.current.offsetWidth;
      const radius = size / 2.5; // or any other factor that fits your design

      const options = {
        radius: radius,
        // ... (any other options you want to include)
      };

      // Initialize TagCloud here
      TagCloud(containerRef.current, texts, options);

      // Return a cleanup function
      return () => {
        // Clean up the TagCloud instance
        // This assumes TagCloud does not provide a dedicated cleanup method
        // and depends on removing all child nodes from the container
        if (containerRef.current) {
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
          }
        }
      };
    }
  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-[60%_40%] items-start justify-center my-24 md:px-24">
        <div className="flex flex-col justify-center items-center px-10 md:px-0 my-5 ">
          <div className="">
            {"  "}
            {/* Adjust max width as needed */}
            <div className="flex-grow justify-start space-x-5 md:w-[85%]">
              <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
                {"02.  "}
                <span className="text-blue ml-2"> My Experience </span>
              </h1>
              <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-white text-md mt-5 font-normal md:mt-10">
              <MyExperience />
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-20  text-blue md:pr-0" ref={containerRef}></div>
        {/* Right column contents */}
      </div>
    </>
  );
}
function MyExperience() {
  const [activeTab, setTab] = useState<String>("ENBD");
  const [isVisible, setIsVisible] = useState(true);

  function setActiveTab(tab: string) {
    setIsVisible(false);
    setTab(tab);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }
  return (
    <div id="experience" className=" flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-[20%_70%] gap-4 items-start justify-start text-white text-lg mt-0 font-normal">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center    ">
          {/* Experience blocks */}
          <div
            onClick={() => setActiveTab("ENBD")}
            className={`w-full md:w-32 h-14  md:rounded-none    md: transparent md:text-blue  ${
              activeTab == "ENBD"
                ? "border-b-4 md:border-b-0 md:border-l-4 border-blue"
                : "md:border-l-4 md:border-blue/20 "
            } flex items-center justify-center text-md text-white`}
          >
            <p>ENBD Bank</p>
          </div>
          <div
            onClick={() => setActiveTab("Servion")}
            className={`w-full md:w-32 h-14  md:rounded-none    md: transparent md:text-blue  ${
              activeTab == "Servion"
                ? "border-b-4 md:border-b-0 md:border-l-4 border-blue"
                : "md:border-l-4 md:border-blue/20 "
            } flex items-center justify-center text-md text-white`}
          >
            <p>Servion Global Solutions</p>
          </div>
        </div>
        <div
          className={` ${
            isVisible ? "in-view" : ""
          } job-description flex flex-col mt-5`}
        >
          {activeTab === "ENBD" ? (
            <>
              <h1 className="text-2xl text-white font-bold">
                Wealth Management Operation Specialist
              </h1>
              <h1 className="text-xl text-blue font-bold">@ENBD</h1>
            </>
          ) : (
            <>
              {" "}
              <h1 className="text-2xl text-white font-bold">
                Software Engineer
              </h1>
              <h1 className="text-xl text-blue font-bold">@Servion</h1>
            </>
          )}
          <ul className="text-gray-400 text-sm font-normal mt-5">
            {/* List items */}
            {activeTab === "ENBD" ? (
             <ul>
             <li className="flex flex-row items-start gap-2 ">
             &rarr;<span>Supported products including Equity, Fixed Income, Mutual funds, Asset-backed, Derivatives, ETF, Money Market etc.</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Delivered accounting and customer reporting solutions, such as P&L, Appraisal, Investment transaction summary, Ledgers, and NAV at various levels including Custodian (Clearstream, Allfunds)</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Solid knowledge of APX and SQL accounting functions</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Maintain and support the integration flow between APX, MOXY, TRADEX & SYNCOVA (Margin client & collateral management application), FINIQ Retail Order management system</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Batch automation scripts, FTP & SFTP FIX routing automation checks and responsible for overall system operations</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Ensuring the performance report is delivered to the operations team to perform the valuations</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Handled transfer in, transfer out process, On-boarding HNI & Retail customer process through various channels</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Setting up valuation factor applying withholding tax applicable securities, other taxes and Special FX deals</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Processing daily contract notes and monthly 360 statement dispatching to the customers as per the regulation</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Supporting to perform (cash-check, lien, un-lien, accounting entries) the aggregated orders for London discretionary portfolio orders and portfolio re-balancing</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Ensuring Daily portfolio (dp) fee charges are posted in portfolio groups and performing quarterly fee collection process, finally posting the reversal (wd) entries at the group level using blotters</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Uploading all necessary data in APX blotter using Import export utility</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Engaged in migrating Advent APX from the 14.1 version to the 21.1 version</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Performing AUM reporting across the entities for the management team</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Creating SSRS subscription reports for the clients based on the required reports</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Documentation of operation steps and detail client processing also keeps it up to date</span>
             </li>
             <li className="flex flex-row items-start gap-2 ">
               &rarr;
               <span>Adding price multiplier and ensuring held securities price download process in AMD portal</span>
             </li>

             <li className="flex items-start gap-2 mt-5">
             <br></br>
               <FontAwesomeIcon className="text-blue w-[1.7rem] text-[15px] mt-1" icon={faAnglesRight} />
               <h1 className=" text-xl text-white font-bold">Worked parellely in Nodejs, MongoDB, ReactJS, SQL Server, .Net core</h1>
             </li>
             </ul>
            ) : (
              <><li className="flex items-start gap-2">
                    &rarr;
                    <span>
                    <b>Project 1</b> - Pricing tool is automated tool which provides opportunity information, pricing, payment, Estimation, Gross margin in details with version control system
                    </span>
                  </li><li className="flex items-start gap-2">
                  &rarr;
                    <span>
                      <b>Project 2 </b>- ENBD Bank Finn Connect Application interacts with AVAYA PCS dialer and invoke WebAPI when agent answers call and then frequently updates the agent activity. This application is used only by the ENBD employees. It will allow agents to work proactively and access customer loan details in a single page and they can update call summary on the same page to handle operations efficiently
                    </span>
                  </li><li className="flex items-start gap-2">
                  <br></br>
                    <h1 className=" text-xl text-white font-bold">
                      Technologies: AngularJs, NodeJs, NPM, Windows Azure, SQL server
                    </h1>
                  </li></>


            )}
          </ul>
        </div>
      </div>

      
    </div>
  );
}
