import Link from "next/link";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Socials = () => {
  return (
    <div className=" flex gap-4 ">
      <Link
        href="#"
        className="h-10 w-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
      >
        <BiLogoGmail />
      </Link>
      <Link
        href="#"
        className="h-10 w-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
      >
        <FaGithub />
      </Link>
      <Link
        href="#"
        className="h-10 w-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
      >
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
