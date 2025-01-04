"use client";

import ProjectDisplayCard from "@/components/projectDisplayCard";
import { motion } from "framer-motion";

const ProjectsGrid = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{
      //   opacity: 1,
      //   transition: { delay: 1.1, duration: 0.4, ease: "easeInOut" },
      // }}
      className="min-h-[80vh] px-2 xl:px-4"
    >
      <div className="flex py-8 justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectDisplayCard
              key={i}
              projectName={`Portfolio ${i}`}
              imageSrc="/assets/01ProjectPortfolio.png"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsGrid;
