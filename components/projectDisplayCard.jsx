import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectDisplayCard = ({ projectName, imageSrc }) => {
  return (
    <div class="hex3 w-[300px] group shadow-lg isolate aspect-video bg-secondary ring-1 ring-black/5 transform transition-transform duration-300 hover:scale-105">
      <div class="flex flex-col items-center relative group">
        {/* <!-- Image Section --> */}
        <div class="z-[1] m-[0px]">
          <img
            src={imageSrc}
            alt="Preview"
            class="h-[250px] w-[300px] object-cover"
          />
        </div>

        {/* <!-- Overlay --> */}
        <div class="absolute top-0 left-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div class="w-full h-full px-3 py-2 flex justify-between items-end text-white text-lg opacity-40 bg-gradient-to-b from-zinc-700 to-black"></div>
        </div>
      </div>
      <div className="  flex items-center justify-between w-full z-30 px-3 absolute bottom-[0.6rem] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <h1 className=" text-md ">{projectName}</h1>
        <span className=" ">
          <FiArrowUpRight className=" relative text-2xl transform transition-transform duration-300 ease-in-out hover:text-accent-hover cursor-pointer " />
        </span>
      </div>
    </div>
  );
};

export default ProjectDisplayCard;
