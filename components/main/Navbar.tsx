import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center  m-auto px-[10px] justify-between ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px]     md:block text-gray-300">
            <span className="font-bold  flex gap-20  ">
              <a href="#">Portfolio</a>
            </span>
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between  gap-2 mx-auto">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        

        <a href="https://github.com/mohammedajmalshan" target="_blank" className="text-white mr-4">
  <FaGithub size={30} />
</a>
<a href="https://www.linkedin.com/in/mohammed-ajmal-shan-3991392a5/" target="_blank" className="text-white ">
  <FaLinkedin size={30} />
</a>
        
      </div>
    </div>
  );
};

export default Navbar;
