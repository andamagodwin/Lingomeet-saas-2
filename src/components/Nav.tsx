"use client"

import { motion } from "framer-motion"
import { navMenu } from "../../constants/index"

interface NavProps {
  isMobile?: boolean
  isScrolled?: boolean
  closeMobileMenu?: () => void
}

const Nav = ({ isMobile = false, isScrolled = false, closeMobileMenu }: NavProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   show: { y: 0, opacity: 1 },
  // }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`${isMobile ? "flex flex-col space-y-4" : "flex items-center justify-end space-x-8"}`}
    >
      {navMenu.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          // variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isMobile && closeMobileMenu ? closeMobileMenu : undefined}
          className={`relative font-medium text-xs md:text-base transition-colors duration-200 group ${
            isScrolled ? "text-gray-800 hover:text-[#57C785]" : "text-white hover:text-white"
          }`}
        >
          {item.name}
          <motion.span
            className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full ${
              isScrolled ? "bg-[#57C785]" : "bg-white"
            }`}
            whileHover={{ width: "100%" }}
          />
        </motion.a>
      ))}

      <motion.a
  href="mailto:andamagodwinezra@gmail.com"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    isScrolled
      ? "bg-gradient-to-r from-[#2A7B9B] to-[#57C785] text-white shadow-md hover:shadow-lg"
      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
  }`}
>
  Contact Us
</motion.a>
    </motion.div>
  )
}

export default Nav
