import React from "react";
import Timeline, { Milestone } from "@/components/Timeline";

const milestones: Milestone[] = [
  {
    date: "5th June 2025",
    title: "Started Training",
    description: "The first step on a long road. The journey to Ironman begins.",
    icon: "default",
  },
  {
    date: "1st July 2025",
    title: "First 10K Run Without Break",
    description: "A huge mental and physical milestone. Proved to myself I can push through the wall.",
    icon: "10k",
  },
  {
    date: "20th July 2025",
    title: "Longest Ride – 50 km",
    description: "Pushing the limits on two wheels. The endurance is building, one kilometer at a time.",
    icon: "bike",
  },
  {
    date: "5th August 2025",
    title: "First Mental Burnout – Bounced Back with Meditation",
    description: "A reminder that recovery is just as important as training. Used meditation to find balance and get back on track.",
    icon: "burnout",
  },
];

const IronmanJournalPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-4 text-center text-4xl font-bold">Ironman Journal</h1>
      <p className="mb-12 text-center text-lg text-gray-300">
        Follow my journey of transformation, one milestone at a time.
      </p>
      <Timeline milestones={milestones} />
    </div>
  );
};

export default IronmanJournalPage; 