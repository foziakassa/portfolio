"use client";
import { motion } from "framer-motion";
import { Home, Palette } from "lucide-react";
import Link from "next/link";
import ProjectList from "./projects/page";

const NavLink = motion(Link);
const ProjectBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={"/projects"}
      target={"_self"}
      className="text-foreground  rounded-full flex 
      items-center 
      justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50
        "
      aria-label={"projects"}
    //   name={"projects"}
      prefetch={false}
    >
      <span className="relative  w-14 h-14 p-4  hover:text-accent text-gray-200">
        {/* <ProjectList  /> */}
<Palette className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-accent/40 border border-accent/100
            border-solid backdrop:blur-[6px]
           shadow-glass-sm  rounded-full absolute top-0 left-0 w-full h-full" />

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 
        top-1/2 -translate-y-1/2 bg-background 
        text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          Project
        </span>
      </span>
      <span className="sr-only">Go to project Page</span>
    </NavLink>
  );
};

export default ProjectBtn;