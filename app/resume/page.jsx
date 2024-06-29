"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I'm a Passionate and dedicated person with a keen interest in Software Development. Eager to apply academic knowledge to real-world challenges and continuously enhance skills in the technology field.",
  info: [
    { title: "Name", value: "Harsh Masaye" },
    { title: "Email", value: "harshmasaye06@gmail.com" },
    { title: "Phone", value: "+91 8104005291" },
    { title: "Experience", value: "Fresher" },
    {
      title: "LinkedIn",
      href_link: "linkedin.com/harshmasaye06",
      href: "https://www.linkedin.com/in/harshmasaye06/",
    },
    {
      title: "Github",
      href_link: "github.com/harshmasaye06",
      href: "https://github.com/HarshMasaye06",
    },
  ],
};

const experience = {
  icon: "assets/icons/badge.svg",
  title: "Experience",
  description:
    "Although I am a fresher, my college projects have provided me with a solid foundation in AI and Data Science. I am enthusiastic about leveraging my knowledge to contribute to innovative projects and grow within the tech industry.",
  info: [
    { company: "College Projects", role: "Fresher", duration: "Present" },
    // { company: "Meta", role: "", duration: "2024 - Present" },
    // { company: "Amazon", role: "", duration: "2023 - 2024" },
    // { company: "Google", role: "", duration: "2021 - 2023" },
    // { company: "SalesForce", role: "", duration: "2018 - 2021" },
  ],
};

const education = {
  icon: "assets/icons/badge.svg",
  title: "Education",
  description:
    "With a strong educational background in Information Technology, I am well-equipped with the knowledge and skills needed to excel in the tech industry.",
  info: [
    {
      university: "Vasantdada patil pratisthan College of Engg.",
      degree: "B.E (AI & Data Science.)",
      duration: "2022-2025",
    },
    {
      university: "Goverment Polytechnic Mumbai.",
      degree: "Diploma (Info Tech.)",
      duration: "2018-2021",
    },
    {
      university: "St. Lawrence High School",
      degree: "SSC",
      duration: "2008-2018",
    },
    
  ],
};

const skills = {
  icon: "assets/icons/badge.svg",
  title: "Skills",
  description:
    "Proficient in a variety of modern web technologies and tools. Always eager to learn and adapt to new technologies. Skilled in both front-end and back-end development.",
  info: [
    { title: "HTML", icon: <FaHtml5 /> },
    { title: "CSS", icon: <FaCss3 /> },
    { title: "tailwind css", icon: <SiTailwindcss /> },
    { title: "JavaScript", icon: <FaJs /> },
    { title: "React", icon: <FaReact /> },
    { title: "Node", icon: <FaNodeJs /> },
    { title: "Express", icon: <SiExpress /> },
    { title: "MongoDB", icon: <SiMongodb /> },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className=" container mx-auto">
        <Tabs
          defaultValue="experience"
          className=" flex flex-col xl:flex-row gap-[30px]"
        >
          <div className=" flex flex-col gap-3">
            <div className="text-2xl xl:text-4xl text-center w-full font-semibold">
              Resume
            </div>
            {/* <div className=" text-sm xl:text-md text-white/60 leading-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, earum.</div> */}
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-1 lg:w-[350px] lg:h-[180px] lg:mx-auto xl:mx-0 gap-4">
              <TabsTrigger value="education"> education </TabsTrigger>
              <TabsTrigger value="skills"> skills </TabsTrigger>
              <TabsTrigger value="about"> about </TabsTrigger>
              <TabsTrigger value="experience"> experience </TabsTrigger>
            </TabsList>
          </div>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                <h3 className=" text-4xl font-bold ">{experience.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem]">
                  {experience.description}
                </p>
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[20px] ">
                    {experience.info.map((item, index) => (
                      <li
                        key={index}
                        className=" bg-[#4b4b4b] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start lg:items-start gap-1 "
                      >
                        <span className="text-accent  font-semibold">
                          {item.duration}
                        </span>

                        <div className=" flex flex-col items-start gap-1 ">
                          <h4 className="text-xl font-extrabold capitalize">
                            {item.role}
                          </h4>
                          <p>
                            <span className="text-accent text-4xl">.</span>
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                <h3 className=" text-4xl font-bold ">{education.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {education.description}
                </p>
                <ScrollArea className=" h-[400px] ">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[20px] ">
                    {education.info.map((item, index) => (
                      <li
                        key={index}
                        className=" bg-[#4b4b4b] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-start lg:items-start gap-2 "
                      >
                        <h4 className="xl:text-lg text-accent font-extrabold">
                          {item.degree}
                        </h4>
                        <div className=" flex flex-col items-start gap-1">
                          <p className="text-sm xl:text-md leading-6 w-full capitalize text-start ">
                            {item.university}
                          </p>
                          <span>– {item.duration} –</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left ">
                <h3 className=" text-4xl font-bold ">{skills.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {skills.description}
                </p>
                <ScrollArea className=" h-[400px] w-full ">
                  <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-[20px] lg:gap-[30px] ">
                    {skills.info.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[120px] bg-[#4b4b4b] rounded-xl flex justify-center items-center group ">
                              <div className=" group-hover:text-accent transition-all duration-300 flex flex-col items-center">
                                <h1 className="text-6xl">{skill.icon}</h1>
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
                <h3 className=" text-4xl font-bold ">{about.title}</h3>
                <p className=" max-w-[650px] text-white/60 mx-auto xl:mx-0 leading-[1.8rem] ">
                  {about.description}
                </p>
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
                          <p>{item.value}</p>
                          {item.href && (
                            <a href={item.href} className=" hover:text-accent">
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
