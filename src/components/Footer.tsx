"use client"

import type React from "react"

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: ["Features", "Pricing", "Integrations", "FAQ"],
    },
    {
      title: "Company",
      items: ["About Us", "Blog", "Careers", "Contact Us"],
    },
    {
      title: "Legal",
      items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ]

  const socialMedia = [
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "Facebook", icon: "📘", link: "#" },
    { name: "LinkedIn", icon: "🔗", link: "#" },
    { name: "Instagram", icon: "📸", link: "#" },
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "lg", name: "Luganda" },
    { code: "sw", name: "Swahili" },
    { code: "fr", name: "French" },
  ]

  const resources = [
    { name: "User Guide", link: "#" },
    { name: "API Documentation", link: "#" },
    { name: "Case Studies", link: "#" },
    { name: "Whitepapers", link: "#" },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for subscribing to our newsletter!")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-gray-900 text-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-6">
          {/* Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center mb-3">
              <img src="/logo.svg" alt="Lingomeet Logo" className="w-10 h-10 mr-2" />
              <span className="font-bold text-lg">Lingomeet</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Making online lectures more accessible and effective for learners in Uganda and beyond.
            </p>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-green-500 transition duration-300"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {links.map((link, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-sm font-semibold text-white mb-3">{link.title}</h3>
              <ul className="space-y-1.5">
                {link.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-1.5">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.link}
                    className="text-gray-400 hover:text-green-500 transition duration-300 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-white mb-3">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-1.5 text-sm rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-1.5 rounded-r-md hover:bg-green-700 transition duration-300 text-sm"
                >
                  Go
                </button>
              </div>
            </form>

            <div className="flex items-center space-x-2 mb-2">
              <select className="p-1 text-xs rounded bg-gray-800 text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500">
                {languages.map((lang, index) => (
                  <option key={index} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <span className="text-gray-400 text-xs">Change language</span>
            </div>

            <div className="text-gray-400 text-xs">
              <p>info@lingomeet.com</p>
              <p>+256 700 123 456</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Lingomeet. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300 text-xs">
              Accessibility
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-green-500 transition duration-300 text-xs"
            >
              <span className="mr-1">Back to Top</span>
              <span>⬆️</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

