"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] pr-1">IT Support Specialist / Web Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hello, I&apos;M
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Ajmal{" "}
            </span>
            Shan
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
         Aspiring IT Support Engineer & Web Developer
Passionate about delivering seamless technical support and building responsive, user-friendly web applications. I’m excited to showcase my skills and projects that reflect my journey and growth in both IT infrastructure and front-end development. Explore my portfolio to see how I combine problem-solving and technical expertise to support users and create innovative digital solutions.
 </motion.p>
        

        <div className="space-x-[10px] mt-10 flex flex-wrap gap-10 justify-center">
        
        <motion.a
          variants={slideInFromLeft(1)}
          className="p-3 border text-center  cursor-pointer rounded-lg w-25 button-primary text-white"
          >
          <a href="/MohammedAjmalShanResume.pdf" target="_blank" rel="noopener noreferrer" >Download CV</a> 

        </motion.a>
        <motion.a
          variants={slideInFromLeft(1)}
          className="p-3  text-center text-white cursor-pointer rounded-lg max-w-[200px] w-25 border hover:text-black hover:bg-white"
          >
          <a href="mailto:mohammedajmalshan@yahoo.com">Contact Me</a> 

        </motion.a>
        </div>
          </div>
      

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
