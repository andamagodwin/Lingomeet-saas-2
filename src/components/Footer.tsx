"use client"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Lingomeet. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-2 text-sm text-green-500 hover:underline"
        >
          Back to Top
        </button>
      </div>
    </footer>
  )
}

export default Footer