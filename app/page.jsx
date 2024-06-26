"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
// import hero_img from "../app/images/hero_img.svg";
import hero_img from "../../01portfolio/public/hero_img.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className=" container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-0 ">
            {/* text */}
            <div className="  text-center xl:text-left  ">
              <span className="text-xl">Software Dev</span>
              <h1 className="mb-6 text-4xl lg:text-5xl font-semibold ">
                Hello I'm <br />
                <span className="text-accent">Harsh Masaye </span>
              </h1>
              <p className=" whitespace-pre-wrap ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                consectetur officia? Temporibus?
              </p>
              <div className=" flex flex-col xl:flex-row items-center gap-4 mt-4 ">
                <Button
                  varient="outline"
                  // size="md"
                  className="uppercase h-10 flex items-center gap-2 rounded-full text-md bg-primary text-accent outline outline-[1px] outline-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                >
                  <span>Download CV</span>
                  <FaDownload className="text-md" />
                </Button>
                <div className="flex">
                  <div className=" flex  gap-4 ">
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
                </div>
              </div>
            </div>
            {/* svg image */}
            {/* <div className=" mt-12 mx-auto lg:mt-8 xl:mt-0 ">
              <div className=" w-full h-full relative ">
                <div className=" w-[298px] h-[298px] xl:w-[498px] ">
                  <Image src={hero_img} alt="hero img" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
