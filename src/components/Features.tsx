"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Globe, Bot, HelpCircle, BarChart, Layers, Users, BookOpen } from "lucide-react"

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Real-Time Transcription",
      description:
        "Get accurate, real-time transcriptions of your Google Meet meetings, making it easy to follow along and review later.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Multi-Language Translation",
      description:
        "Translate meeting content into your local language in real-time, breaking down language barriers for global teams.",
    },
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "AI-Powered Summaries",
      description:
        "Automatically generate concise summaries of your meetings, saving you time and helping you focus on key points.",
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      title: "Revision Questions",
      description:
        "AI-generated revision questions help students and professionals retain and review important information from meetings.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: "Interactive Polls",
      description:
        "Engage participants with live polls during meetings, making sessions more interactive and productive.",
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Seamless Integration",
      description:
        "Easily integrate Lingomeet with Google Meet for a hassle-free experience. No additional setup required.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Attendance Tracking",
      description:
        "Automatically track student attendance during online lectures, ensuring accountability and engagement.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
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
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const headingAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div
      id="features"
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] flex flex-col justify-center items-center py-24 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="25" fill="url(#radialGradient)" />
          <circle cx="80" cy="80" r="35" fill="url(#radialGradient)" />
          <circle cx="70" cy="20" r="15" fill="url(#radialGradient)" />
          <circle cx="30" cy="70" r="20" fill="url(#radialGradient)" />
        </svg>
      </div>

      {/* Section Heading */}
      <motion.div
        ref={headingRef}
        className="text-center mb-16 max-w-3xl relative z-10"
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
          variants={headingAnimation}
        >
          Everything You Need
         
        </motion.h2>

        <motion.p className="text-lg text-white/90 mt-6" variants={headingAnimation}>
          Lingomeet offers a suite of powerful features designed to enhance your online meetings and make them more
          productive and accessible for everyone.
        </motion.p>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        animate={isSectionInView ? "show" : "hidden"}
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={item}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            <div
              className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl"
              style={{
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(0.9)",
                transition: "transform 0.5s ease-out",
              }}
            ></div>

            <div className="bg-white/10 backdrop-blur-md p-7 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300 h-full flex flex-col">
              <div
                className="bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundPosition: `${index * 12.5}% center`,
                }}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-white/80 text-sm flex-grow">{feature.description}</p>

              <motion.div
                className="w-0 group-hover:w-full h-0.5 bg-white mt-5 transition-all duration-500 rounded-full"
                initial={{ width: 0 }}
                animate={hoveredIndex === index ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <motion.div
                className="flex items-center mt-4 text-white/0 group-hover:text-white/80 transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>


     
    </div>
  )
}
