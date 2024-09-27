import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio screenshot.png"
          title="Modern Next.js Portfolio"
          description="

A beautiful, responsive website built with Next.js, featuring interactive 3D effects powered by Three.js for a seamless, immersive experience."
        />
        <ProjectCard
          src="/netflix.png"
          title="Netflix Clone Website"
          description="A fully responsive Netflix clone, designed to replicate the look and functionality of the original platform with modern web technologies."
        />
        <ProjectCard
          src="/productsStore.png"
          title="Product Store"
          description="An intuitive product store website where users can add, delete, and edit products seamlessly. It features both dark and light modes for a personalized browsing experience."
        />
      </div>
    </div>
  );
};

export default Projects;
