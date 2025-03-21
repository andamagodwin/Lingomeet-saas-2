"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Benefits = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: "🎯", // Replace with an actual icon or SVG
      title: "Enhanced Learning Experience",
      description:
        "Lingomeet provides real-time transcriptions and translations of online lectures, helping Ugandan students understand and engage better in their native languages.",
    },
    {
      icon: "🌍",
      title: "Bridging Language Barriers",
      description:
        "With support for local languages, Lingomeet ensures that students who struggle with English can fully participate in and benefit from online lectures.",
    },
    {
      icon: "📚",
      title: "AI-Powered Study Tools",
      description:
        "Automatically generate summaries, revision questions, and lesson notes from lectures, making it easier for students to review and retain information.",
    },
    {
      icon: "🤝",
      title: "Inclusive Education",
      description:
        "Lingomeet promotes inclusivity by ensuring that all students, regardless of their language proficiency, have equal access to quality education.",
    },
    {
      icon: "📊",
      title: "Engaging Learning Environment",
      description:
        "Interactive features like polls and quizzes keep students engaged and actively participating in online lectures.",
    },
    {
      icon: "⚙️",
      title: "Seamless Integration",
      description:
        "Lingomeet integrates effortlessly with Google Meet, making it easy for educators and students to use without any technical hassle.",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-600 to-green-800 flex flex-col justify-center items-center py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Section Heading */}
      <motion.div
        className="text-center mb-16 max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How Lingomeet Transforms Online Learning</h2>
        <div className="w-24 h-1 bg-green-300 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-green-100 max-w-3xl mx-auto">
          Lingomeet is designed to make online lectures more accessible and effective for Ugandan students, breaking
          language barriers and enhancing comprehension in local languages. Together, we're advancing SDG 4: Quality
          Education.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="w-full max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 h-full group hover:bg-white/15 transition-all duration-500 flex flex-col">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-green-400/20 blur-md rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="bg-gradient-to-br from-green-400/30 to-green-300/30 w-12 h-12 rounded-full flex items-center justify-center text-2xl relative z-10 border border-white/20 group-hover:border-green-300/50 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-green-100 text-sm flex-grow">{benefit.description}</p>

                <motion.div
                  className="w-0 group-hover:w-full h-0.5 bg-green-300/70 mt-5 rounded-full"
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        
      </motion.div>
    </div>
  )
}

export default Benefits

