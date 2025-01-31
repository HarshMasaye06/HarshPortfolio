"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import Stats from "@/components/ui/Stats";
import Socials from "@/components/ui/Socials";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{
        //   opacity: 1,
        //   transition: { delay: 1.1, duration: 0.4, ease: "easeInOut" },
        // }}
        className="min-h-[80vh]  flex items-center justify-center py-12 xl:py-0"
      >
        <div className=" container">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-0 ">
            {/* text */}
            <div className="  text-center xl:text-left  ">
              <span className="text-xl">Software Dev</span>
              <h1 className="mb-6 text-4xl lg:text-5xl font-semibold ">
                Hello I'm <br />
                <span className="text-accent">Harsh Masaye </span>
              </h1>
              <p className=" whitespace-pre-wrap lg:w-[70%] text-secondary ">
                An aspiring software engineer experienced in building impactful
                and user-friendly websites. Specializing in front-end
                technologies, passionate about modern web standards and
                cutting-edge development techniques.
              </p>
              <div className=" flex flex-col xl:flex-row items-center gap-4 mt-4 ">
                <motion.a
                  href="./assets/Harsh Masaye Resume Main.pdf"
                  target="blank"
                  alt="my CV"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="uppercase h-11 w-40 flex justify-center items-center gap-2 rounded-full text-md bg-primary text-accent outline outline-[1px] outline-accent hover:bg-accent-hover hover:text-primary hover:transition-all duration-500 "
                >
                  <span>Download CV</span>
                  <FaDownload className="text-md" />
                </motion.a>
                <div className="flex">
                  <Socials />
                </div>
              </div>
            </div>
            {/* svg image */}
            <div className="mx-auto lg:mt-8 xl:mt-0 ">
              <div className=" w-full h-full relative ">
                <div className=" w-[298px] h-[298px] xl:w-[498px] ">
                  <Image
                    src="/assets/hero_img.svg"
                    priority
                    quality={100}
                    fill
                    alt="hero img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* stats */}
          <div className=" lg:mt-10 mx-auto ">
            <Stats />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
