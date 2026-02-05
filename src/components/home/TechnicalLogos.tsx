"use client";
import React from "react";
import { motion } from "framer-motion";
import { TECH_GROUPS } from "./techStackData";

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
      >
        {TECH_GROUPS.map((group) => (
          <div
            key={group.name}
            className="rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 p-2.5 h-full"
          >
            <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 mb-1.5 text-center">
              {group.name}
            </p>
            <div className="flex flex-wrap justify-center gap-1">
              {group.items.map((tech, index) => (
                <span
                  key={`${tech.name}-${index}`}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] sm:text-[11px] leading-tight whitespace-nowrap bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
                  title={tech.name}
                >
                  {tech.icon && (
                    <tech.icon
                      className="w-3 h-3"
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
