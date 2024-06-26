"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import SliderButtonsCustom from "@/components/ui/SliderButtonsCustom";

const projects = [
  {
    no: "01",
    title: "Portfolio",
    description: "This is a project description",
    domain: "Frontend",
    stack: ["HTML 5", "Tailwind Css", "Next Js"],
    image_src: "/assets/01ProjectPortfolio.png",
    github: "https://github.com/harshmasaye06",
    live: "",
  },
  {
    no: "02",
    title: "Z-mart shopping app",
    description: "This is a project description",
    domain: "Backend",
    stack: ["React js", "Node.js", "Express", "MongoDB"],
    image_src: "",
    github: "https://github.com/harshmasaye06",
    live: "",
  },
  {
    no: "03",
    title: "Project 3",
    description: "This is a project description",
    domain: "Fullstack",
    stack: ["React Js", "Tailwind Css", "Node.js", "Express", "MongoDB"],
    image_src: "",
    github: "https://github.com/harshmasaye06",
    live: "",
  },
  {
    no: "04",
    title: "Project 4",
    description: "This is a project description",
    domain: "Frontend",
    stack: ["HTML 5", "Tailwind Css", "React Js"],
    image_src: "",
    github: "https://github.com/harshmasaye06",
    live: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]  ">
          <div className=" w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className=" lg:mt-14">
              <div className=" text-8xl leading-none font-extrabold ">
                {project.no}
              </div>
              <h2 className=" text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {project.domain}
              </h2>
              <h2>‹ {project.title} ›</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="py-1 flex flex-wrap xl:flex-none gap-2 xl:gap-4 text-accent whitespace-nowrap">
                {project.stack.map((item, index) => (
                  <li key={index} className={`${project.stack.length > 4 && "max-w-[150px]"} text-sm xl:text-md`}>
                    {item}
                    {index !== project.stack.length - 1 ? "," : "."}
                    {/* {(index + 1) % 4 === 0 && index !== project.stack.length - 1 && <br />} */}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className=" flex gap-2 py-2">
                {/* Live projects */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="bg-white/5 p-3 rounded-full rotate-45 hover:rotate-0 hover:bg-accent-hover hover:text-black transition-all ease-in-out duration-300">
                        <FiArrowUpRight className=" text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-primary px-2 py-1 rounded-lg">
                          Live project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github repo */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="bg-white/5 p-3 rounded-full hover:bg-accent-hover hover:text-black">
                        <FaGithub className="text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="bg-white text-primary px-2 py-1 rounded-lg">
                          Github-repo
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className=" xl:h-[520px] mb-8 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className=" h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    {/* overlay */}
                    <div className=""></div>
                    {/* image */}
                    <div className=" relative shadow-sm w-full h-full">
                      <Image
                        src={project.image_src}
                        fill
                        quality={100}
                        className=" object-cover"
                        alt="img"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtonsCustom />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
