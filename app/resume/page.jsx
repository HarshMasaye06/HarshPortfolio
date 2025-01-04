"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";
import { LuDot } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RxResume } from "react-icons/rx";


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import EducationCard from "@/components/eduCard";
import ExperienceCard from "@/components/expCard";

import about from "@/app/data/about.json";
import experience from "@/app/data/experience.json";
import education from "@/app/data/education.json";
import skills from "@/app/data/skills.json";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  SiTailwindcss: <SiTailwindcss />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
};

const getScreenSize = () => {
  if (typeof window === "undefined") return;
  return window.innerWidth;
};

const Resume = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 1.1, duration: 0.4, ease: "easeInOut" },
      // }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs
          defaultValue="education"
          className=" flex flex-col xl:flex-row gap-[30px]"
        >
          <div className=" flex flex-col gap-3">
            <div className="flex items-center text-secondary text-2xl xl:text-3xl text-center w-full font-semibold">
              Resume <RxResume className="text-accent text-md xl:text-4xl" />
            </div>
            {/* <div className=" text-sm xl:text-md text-white/60 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, earum.</div> */}
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-1 lg:w-[350px] lg:h-[180px] lg:mx-auto xl:mx-0 gap-4">
              <TabsTrigger className="bg-secondary" value="education">
                education
              </TabsTrigger>
              <TabsTrigger className="bg-secondary" value="skills">
                skills
              </TabsTrigger>
              <TabsTrigger className="bg-secondary" value="about">
                about
              </TabsTrigger>
              <TabsTrigger className="bg-secondary" value="experience">
                experience
              </TabsTrigger>
            </TabsList>
          </div>
          {/* border */}
          {/* <div>
            <hr
              className={
                getScreenSize > 1000
                  ? `h-[275px] relative top-14 w-full border-r-2 border-secondary`
                  : `relative w-full border-b-1 border-secondary`
              }
            />
          </div> */}

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[1px] text-center xl:text-left ">
                {/* <h3 className=" text-4xl font-bold ">{education.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {education.description}
                </p> */}
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[20px] ">
                    {education.info.map((item, index) => (
                      <EducationCard item={item} key={index} />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                {/* <h3 className=" text-4xl font-bold ">{skills.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {skills.description}
                </p> */}
                <ScrollArea className=" h-[400px] w-full ">
                  <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-[20px] lg:gap-[30px] ">
                    {skills.info.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[120px] bg-[#272727] rounded-xl flex justify-center items-center group ">
                              <div className=" group-hover:text-accent transition-all duration-300 flex flex-col items-center">
                                <h1 className="text-6xl">
                                  {iconMap[skill.icon]}
                                </h1>
                                <h3 className="lg:hidden capitalize ">
                                  {skill.title}
                                </h3>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <h1 className=" capitalize">{skill.title}</h1>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                {/* <h3 className=" text-4xl font-bold ">{about.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {about.description}
                </p> */}
                <ScrollArea className=" h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[15px] ">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col justify-center items-start lg:items-start gap-1 "
                      >
                        <div className=" flex">
                          <h4 className="text-lg text-accent font-extrabold">
                            {item.title}:&nbsp;
                          </h4>
                          <p className=" text-secondary">{item.value}</p>
                          {item.href && (
                            <a
                              href={item.href}
                              className=" text-secondary hover:text-accent"
                            >
                              {item.href_link}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                {/* <h3 className=" text-4xl font-bold ">{experience.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem]">
                  {experience.description}
                </p> */}
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[20px] ">
                    {experience.info.map((item, index) => (
                      <>
                        <ExperienceCard item={item} key={index} />
                      </>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
