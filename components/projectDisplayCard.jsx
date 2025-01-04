import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectDisplayCard = ({ projectName, imageSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="hex3 w-[300px] shadow-lg  isolate aspect-video bg-secondary  ring-1 ring-black/5 "
    >
      <div className=" flex flex-col items-center relative">
        <div className="m-[4px]">
          <Image height={250} width={300} src={imageSrc} alt="Preview" />
        </div>

        <div className=" py-[0.35rem] pl-2 flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-xl py-[0.12rem] font-semibold text-white uppercase ">
              {projectName}
            </h1>
            {/* <p className=" leading-5 text-sm  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, cumque?</p> */}
          </div>
          <motion.div
            whileTap={{ scale: 1.2 }}
            className=" hexagon-small absolute bottom-[0.5rem] right-[0.5rem] bg-accent flex items-center px-[0.25rem] py-[0.25rem] text-lg font-semibold text-gray-700 transform transition-all duration-300 ease-in-out hover:bg-accent-hover hover:text-black"
          >
            <FiArrowUpRight className=" relative text-2xl transform transition-transform duration-300 ease-in-out" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDisplayCard;
