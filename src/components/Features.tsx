"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: "📝", // Replace with an actual icon or SVG
      title: "Real-Time Transcription",
      description:
        "Get accurate, real-time transcriptions of your Google Meet meetings, making it easy to follow along and review later.",
    },
    {
      icon: "🌍",
      title: "Multi-Language Translation",
      description:
        "Translate meeting content into your local language in real-time, breaking down language barriers for global teams.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Summaries",
      description:
        "Automatically generate concise summaries of your meetings, saving you time and helping you focus on key points.",
    },
    {
      icon: "❓",
      title: "Revision Questions",
      description:
        "AI-generated revision questions help students and professionals retain and review important information from meetings.",
    },
    {
      icon: "📊",
      title: "Interactive Polls",
      description:
        "Engage participants with live polls during meetings, making sessions more interactive and productive.",
    },
    {
      icon: "📂",
      title: "Seamless Integration",
      description:
        "Easily integrate Lingomeet with Google Meet for a hassle-free experience. No additional setup required.",
    },
    {
      icon: "📋",
      title: "Attendance Tracking",
      description:
        "Automatically track student attendance during online lectures, ensuring accountability and engagement.",
    },
    {
      icon: "📘",
      title: "Lesson Notes Generation",
      description:
        "Generate detailed lesson notes from your lectures, making it easy for students to review and study.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-500 to-green-700 flex flex-col justify-center items-center py-20 px-4 sm:px-8">
      {/* Section Heading */}
      <div className="text-center mb-16 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block">
          Features
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-300 rounded-full"></span>
        </h2>
        <p className="text-lg text-green-100 mt-6">
          Lingomeet offers a suite of powerful features designed to enhance your online meetings and make them more
          productive and accessible.
          
        </p>
      </div>

      {/* Feature Cards Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`relative group ${hoveredIndex === index ? "" : ""}`}
            variants={item}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 group-hover:border-green-300 transition-all duration-300 h-full flex flex-col">
              <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-3xl group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-green-100 text-sm flex-grow">{feature.description}</p>
              <div className="w-0 group-hover:w-full h-0.5 bg-green-300 mt-4 transition-all duration-500 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      
    </div>
  )
}

export default Features

