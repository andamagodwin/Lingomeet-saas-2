
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Nav from "./Nav"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
          : "bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img
            src="./logo-white.png"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            alt="logo"
            className={`transition-all duration-300 ${isScrolled ? "filter brightness-0 invert-0" : ""}`}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Nav isScrolled={isScrolled} />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-5 h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} />
          ) : (
            <Menu className={`w-5 h-5 ${isScrolled ? "text-gray-800" : "text-white"}`} />
          )}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
            >
              <div className="py-4 px-6">
                <Nav isMobile={true} isScrolled={true} closeMobileMenu={() => setIsMobileMenuOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
