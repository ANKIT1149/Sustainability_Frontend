"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCamera,
  FaBrain,
  FaRecycle,
  FaMapMarkerAlt,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera />,
    title: "Upload an Image",
    desc: "Take a photo of your waste item and upload it to our AI-powered tool.",
  },
  {
    icon: <FaBrain />,
    title: "AI Waste Classification",
    desc: "Our AI analyzes and classifies the item as recyclable, compostable, or waste.",
  },
  {
    icon: <FaRecycle />,
    title: "Get Sustainable Suggestions",
    desc: "Receive eco-friendly product alternatives and responsible disposal tips.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Find Nearest Recycling Center",
    desc: "Get location-based recommendations for nearby recycling centers.",
  },
  {
    icon: <FaChartLine />,
    title: "Track & Improve",
    desc: "Monitor your waste habits and earn rewards for sustainable actions.",
  },
  {
    icon: <FaRobot />,
    title: "Chat with AI",
    desc: "Get real-time advice on waste management and sustainability from our AI assistant.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How Our AI Works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-5xl text-green-400 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-300 mt-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-10 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-md transition-all duration-300 hover:bg-green-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/upload">Try AI Now</Link>
      </motion.button>
    </div>
  );
}
