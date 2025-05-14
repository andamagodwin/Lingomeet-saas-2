"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Check, ArrowRight, Users, Lightbulb, Globe, Zap } from "lucide-react"

export default function AboutSection() {
  // Refs for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 })

  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity, y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#57C785]/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#2A7B9B]/20 rounded-full opacity-30 blur-3xl"></div>
      </motion.div>

      {/* Section Heading */}
      <motion.div
        ref={headingRef}
        className="text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="inline-block px-4 py-1.5 bg-[#57C785]/10 text-[#2A7B9B] rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHeadingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Us
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transforming Online Meetings with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53]">
            Lingomeet
          </span>
        </motion.h2>

        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] mx-auto rounded-full mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={isHeadingInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Lingomeet is a cutting-edge SaaS add-on designed to revolutionize your online meetings. With real-time
          transcription, translation, and AI-powered summaries, we make every meeting more productive and accessible for
          everyone.
        </motion.p>
      </motion.div>

      {/* Content Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with animation */}
        <motion.div
          ref={imageRef}
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A7B9B]/10 via-[#57C785]/10 to-[#EDDD53]/10 rounded-2xl transform rotate-1 scale-[0.97] opacity-70"></div>
          <motion.div
            className="relative bg-white p-4 rounded-2xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <img src="/about.svg" alt="About Lingomeet" className="w-full h-auto rounded-lg" />
          </motion.div>
        </motion.div>

        {/* Right Column: Features List */}
        <motion.div
          ref={featuresRef}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl border border-gray-100"
            variants={itemVariants}
            whileHover={{
              y: -5,
            }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </span>
              Why Choose Lingomeet?
            </h3>

            <ul className="space-y-5">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-white" />,
                  text: "Real-time transcription and translation for Google Meet.",
                },
                {
                  icon: <Lightbulb className="w-5 h-5 text-white" />,
                  text: "AI-powered summaries and revision questions for students.",
                },
                {
                  icon: <Users className="w-5 h-5 text-white" />,
                  text: "Interactive polls to engage participants during meetings.",
                },
                {
                  icon: <Check className="w-5 h-5 text-white" />,
                  text: "Seamless integration with Google Meet for hassle-free use.",
                },
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      backgroundPosition: `${index * 30}% center`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              className="group bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center space-x-2 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
