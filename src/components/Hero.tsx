import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const float = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity, // Use Infinity instead of Number.POSITIVE_INFINITY
        repeatType: "reverse" as const, // Cast to const to ensure type safety
        ease: "easeInOut",
      },
    },
  }




  return (
    <div 
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] pt-24">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left Column: Text Content */}
          <motion.div className="text-white space-y-8" initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-green-50 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>AI-Powered Lesson Transcriber</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A new approach to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">
                online Education
              </span>
            </motion.h1>

            <motion.div variants={fadeIn} className="w-24 h-1.5 bg-white/40 rounded-full" />

            <motion.p variants={fadeIn} className="text-base md:text-lg text-green-50 max-w-xl">
              Lingomeet is a powerful add-on that uses AI to transcribe, translate, and summarize your online meetings
              into your local language. Perfect for students and professionals alike!
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gray-300 text-gray-500 px-8 py-3.5 rounded-full font-semibold shadow-lg cursor-not-allowed transition duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="ml-2 text-xs text-gray-400">(Coming Soon)</span>
              </motion.div>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold hover:bg-white/20 transition duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>

           
          </motion.div>

          {/* Right Column: Illustration and Features */}
          <div className="relative">
            <motion.div className="relative z-10" variants={float} initial="initial" animate="animate">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/20"
              >
                <img src="/hero.svg" alt="Hero Illustration" className="w-full h-auto rounded-lg" />
              </motion.div>
            </motion.div>

            {/* Feature cards */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-0 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl max-w-xs"
            >
              <h2 className="text-lg font-semibold text-white mb-3">AI-Powered Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-green-50">
                  <div className="mt-0.5 bg-white/20 p-1.5 rounded-full">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium">Real-Time Transcription</span>
                    <p className="text-xs text-green-100 mt-0.5">Instant text from spoken words</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-green-50">
                  <div className="mt-0.5 bg-white/20 p-1.5 rounded-full">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium">Multi-Language Translation</span>
                    <p className="text-xs text-green-100 mt-0.5">Support for 5 local languages</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-green-50">
                  <div className="mt-0.5 bg-white/20 p-1.5 rounded-full">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium">Smart Summaries</span>
                    <p className="text-xs text-green-100 mt-0.5">Concise notes from long meetings</p>
                  </div>
                </li>
              </ul>
            </motion.div> */}

            {/* Floating badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -top-4 -left-4 md:left-0 bg-white rounded-full py-2 px-4 shadow-lg"
            >
              <span className="text-sm font-semibold text-[#2A7B9B]">New Feature: Audio Summaries!</span>
            </motion.div> */}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Hero
