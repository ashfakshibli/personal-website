"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiSwift,
  SiDart,
  SiDotnet,
  SiCplusplus,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiD3Dotjs,
  SiFirebase,
  SiGooglecloud,
  SiMysql,
  SiGit,
  SiJira,
  SiPytorch,
  SiDocker,
  SiGithubactions,
  SiPytest,
  SiSelenium,
  SiXcode,
  SiPhp,
  SiJavascript
} from "react-icons/si";

const techGroups = [
  {
    name: "Languages",
    items: [
      { icon: SiPython, color: "#3776AB", name: "Python" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiPhp, color: "#777BB4", name: "PHP" },
      { icon: SiDart, color: "#0175C2", name: "Dart" },
      { icon: SiSwift, color: "#F05138", name: "Swift" },
      { icon: SiDotnet, color: "#239120", name: "C#" },
      { icon: SiCplusplus, color: "#00599C", name: "C++" },
      { name: "SQL" },
      { name: "NoSQL" },
      { name: "Shell Scripting" }
    ]
  },
  {
    name: "ML & Data Science",
    items: [
      { icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
      { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
      { icon: SiScikitlearn, color: "#F7931E", name: "scikit-learn" },
      { name: "BERT" },
      { name: "CNN / DNN" },
      { icon: SiPandas, color: "#150458", name: "pandas" },
      { icon: SiNumpy, color: "#013243", name: "NumPy" },
      { name: "NLTK" },
      { name: "NetworkX" }
    ]
  },
  {
    name: "Visualization & Cloud",
    items: [
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { icon: SiPlotly, color: "#3F4F75", name: "Plotly" },
      { name: "Graphviz" },
      { icon: SiD3Dotjs, color: "#F9A03C", name: "D3.js" },
      { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
      { icon: SiGooglecloud, color: "#4285F4", name: "Google Cloud" },
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { name: "REST APIs" }
    ]
  },
  {
    name: "Tools & Testing",
    items: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiGithubactions, color: "#2088FF", name: "CI/CD" },
      { icon: SiJira, color: "#0052CC", name: "Jira" },
      { icon: SiPytest, color: "#0A9EDC", name: "pytest" },
      { icon: SiXcode, color: "#147EFB", name: "XCTest / Xcode" },
      { icon: SiSelenium, color: "#43B02A", name: "Selenium" },
      { name: "Label Studio" },
      { name: "Carla" },
      { name: "VS Code" }
    ]
  }
];

export default function TechnicalLogos() {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg px-4 md:px-6 py-3 md:py-4">
      <motion.h3 
        initial={false}
        animate={{ opacity: 1 }}
        className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 text-center"
      >
        Tech Stack
      </motion.h3>
      <motion.div 
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3"
      >
        {techGroups.map((group) => (
          <div
            key={group.name}
            className="rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-3 h-full"
          >
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2 text-center">
              {group.name}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {group.items.map((tech, index) => (
                <span
                  key={`${tech.name}-${index}`}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
                  title={tech.name}
                >
                  {tech.icon && (
                    <tech.icon
                      className="w-3.5 h-3.5"
                      style={tech.color ? { color: tech.color } : undefined}
                    />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
