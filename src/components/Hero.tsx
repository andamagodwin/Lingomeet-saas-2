const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-700 flex justify-center items-center w-full h-[95vh] pt-20 px-8 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-300 rounded-full opacity-10 blur-3xl"></div>
        </div>
  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 text-green-100 text-sm font-medium mb-2">
              Google Meet Add-on
            </div>
  
            <h1 className="text-5xl font-bold leading-tight">Real-Time Transcription & Translation for Google Meet</h1>
  
            <div className="w-20 h-1 bg-green-300 rounded-full"></div>
  
            <p className="text-xl text-green-100">
              Lingomeet is a powerful add-on that uses AI to transcribe, translate, and summarize your online meetings
              into your local language. Perfect for students and professionals alike!
            </p>
  
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
  
            <div className="pt-4">
              <div className="flex items-center gap-2 text-green-100 text-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-300 border-2 border-green-700 flex items-center justify-center text-green-800 text-xs font-bold">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-200 border-2 border-green-700 flex items-center justify-center text-green-800 text-xs font-bold">
                    KM
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-green-700 flex items-center justify-center text-green-800 text-xs font-bold">
                    TS
                  </div>
                </div>
                <span>Join 2,500+ students already using Lingomeet</span>
              </div>
            </div>
          </div>
  
          {/* Right Column: Illustration or Image */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 to-green-300/30 rounded-lg blur-md"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/20 shadow-lg">
              <img
                src="/hero.svg" // Replace with your illustration or image
                alt="Hero Section"
                className="w-full h-auto rounded-lg"
              />
            </div>
  
            {/* Feature list */}
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg max-w-xs">
              <h2 className="text-lg font-semibold text-white mb-2">AI-Powered Features</h2>
              <ul className="space-y-2 text-green-100 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-lg">📝</span> Real-Time Transcription
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🌍</span> Translation into Local Languages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">📚</span> Automated Notes & Summaries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  
  