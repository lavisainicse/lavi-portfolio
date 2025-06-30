"use client";

import React from "react";
import { CheckCircle, Flag, Bike, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  default: <Flag className="h-6 w-6" />,
  "10k": <CheckCircle className="h-6 w-6" />,
  "bike": <Bike className="h-6 w-6" />,
  "burnout": <BrainCircuit className="h-6 w-6" />,
};

export type Milestone = {
  date: string;
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
};

type TimelineProps = {
  milestones: Milestone[];
};

const Timeline = ({ milestones }: TimelineProps) => {
  return (
    <div className="relative">
      {/* The vertical line */}
      <div className="absolute left-9 top-0 h-full w-0.5 bg-gray-600"></div>
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute left-0 top-0 z-10 flex h-[72px] items-center">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gray-800 ring-8 ring-gray-900">
                <div className="text-blue-400">
                  {iconMap[milestone.icon || "default"]}
                </div>
              </div>
            </div>
            <div className="ml-24 rounded-lg bg-gray-800 p-6 flex-1">
              <p className="text-sm text-gray-400">{milestone.date}</p>
              <h3 className="mt-1 text-xl font-bold">{milestone.title}</h3>
              <p className="mt-2 text-gray-300">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 