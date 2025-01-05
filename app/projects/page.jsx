"use client";

import ProjectDisplayCard from "@/components/projectDisplayCard";
import { motion } from "framer-motion";

const ProjectsGrid = () => {
  return (
    <motion.div className="min-h-[80vh] ">
      <div className="flex py-8 justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 scroll-smooth">
          {[
            1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3,
            4, 5, 1, 2, 3, 4, 5,
          ].map((i) => (
            <ProjectDisplayCard
              key={i}
              projectName={`Portfolio ${i}`}
              imageSrc={
                i % 2 == 0
                  ? `/assets/01ProjectPortfolio.png`
                  : `/assets/02ProjectEcommerce.png`
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsGrid;
