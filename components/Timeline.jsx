"use client";

import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const timelineData = [
  {
    year: "1993",
    title: "Born on this Blue Planet",
    description: "A new journey begins!",
    icon: <SparklesIcon className="h-10 w-10 text-yellow-500" />,
    image: "",
  },
  {
    year: "2011",
    title: "First Day in College (HUST)",
    description: "Excited to explore the world of technology.",
    icon: <AcademicCapIcon className="h-10 w-10 text-blue-500" />,
    image: "",
  },
  {
    year: "2015",
    title: "Graduated - Wow!",
    description: "Earned my degree and ready to take on challenges.",
    icon: <RocketLaunchIcon className="h-10 w-10 text-red-500" />,
    image: "",
  },
  {
    year: "2023",
    title: "Built My First App",
    description: "Developed a simple React app for tracking tasks.",
    icon: <CodeBracketIcon className="h-10 w-10 text-green-500" />,
    image: "",
  },
];

export default function Timeline() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-6">My Journey 🚀</h1>
      <div className="w-full max-w-5xl overflow-x-auto flex space-x-8 px-6 py-4 snap-x scroll-smooth">
        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center min-w-[250px] max-w-[300px] p-4 bg-white shadow-lg rounded-lg border border-gray-200 snap-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {event.icon}
            <h2 className="text-xl font-semibold">
              {event.year} - {event.title}
            </h2>
            <p className="text-gray-600">{event.description}</p>
            <img
              src={event.image}
              alt={event.title}
              className="mt-3 w-24 h-24 object-cover rounded-md shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
