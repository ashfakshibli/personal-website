"use client";
import LogoOrIcon from "./LogoOrIcon";


import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiSwift,
  SiDotnet,
  SiCplusplus,
  SiFirebase,
  SiGooglecloud,
  SiMysql,
  SiGit,
  SiJira,
  SiPytorch,
  SiDocker,
  SiPhp,
  SiJavascript
} from "react-icons/si";

const techGroups = [
  {
    name: "Languages & ML",
    items: [
      { icon: SiPython, color: "#3776AB", name: "Python" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiPhp, color: "#777BB4", name: "PHP" },
      { icon: SiSwift, color: "#F05138", name: "Swift" },
      { icon: SiDotnet, color: "#239120", name: "C#" },
      { icon: SiCplusplus, color: "#00599C", name: "C++" }
    ]
  },
  {
    name: "Cloud & DevOps",
    items: [
      { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
      { icon: SiGooglecloud, color: "#4285F4", name: "Google Cloud" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" }
    ]
  },
  {
    name: "Databases & Tools",
    items: [
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { name: "RealmDB", logo: "/images/logos/realmdb.svg" },
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiJira, color: "#0052CC", name: "Jira" }
    ]
  }
];

export default function TechnicalLogos() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg px-4 py-2">
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 text-center"
      >
        Tech Stack
      </motion.h3>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap md:flex-nowrap items-center md:justify-between justify-center gap-y-3 px-2"
      >
        {techGroups.map((group, groupIndex) => (
          <React.Fragment key={group.name}>
            <div className="flex items-center gap-2 flex-wrap md:flex-nowrap justify-center">
              {group.items.map((tech, index) => (
                <LogoOrIcon tech={tech} groupIndex={groupIndex} index={index} key={tech.name + '-' + index} />
              ))}
            </div>
            {groupIndex < techGroups.length - 1 && (
              <div className="hidden md:block h-6 w-px bg-gray-200 dark:bg-gray-700 mx-4 flex-shrink-0" />
            )}
            {groupIndex < techGroups.length - 1 && (
              <div className="w-full md:hidden border-t border-gray-200 dark:border-gray-700" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}