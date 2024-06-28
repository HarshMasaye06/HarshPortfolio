import Link from "next/link";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className=" flex gap-4 ">
      <motion.button whileTap={{ scale: 0.9 }}>
        <Link
          href="#"
          className="h-11 w-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
        >
          <BiLogoGmail />
        </Link>
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }}>
        <Link
          href="#"
          className="h-11 w-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
        >
          <FaGithub />
        </Link>
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }}>
        <Link
          href="#"
          className="h-11 w-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
        >
          <FaLinkedin />
        </Link>
      </motion.button>
    </div>
  );
};

export default Socials;
