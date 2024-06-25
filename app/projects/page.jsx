"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project description",
    domain: "Frontend",
    stack: ["HTML 5", "Tailwind Css", "React Js"],
    image: "https://via.placeholder.com/450",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project description",
    domain: "Backend",
    stack: ["Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/450",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a project description",
    domain: "Fullstack",
    stack: [
      "HTML 5",
      "Tailwind Css",
      "React Js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "https://via.placeholder.com/450",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a project description",
    domain: "Frontend",
    stack: ["HTML 5", "Tailwind Css", "React Js"],
    image: "https://via.placeholder.com/450",
  },
];

const Projects = () => {
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

      </div>
    </motion.div>
  );
};

export default Projects;
