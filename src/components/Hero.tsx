const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-700 flex justify-center items-center w-full h-[80vh] mt-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Real-Time Transcription & Translation for Google Meet
            </h1>
            <p className="text-xl text-green-100">
              Lingomeet is a powerful add-on that uses AI to transcribe, translate, and summarize your online meetings
              into your local language. Perfect for students and professionals alike!
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Column: Illustration or Image */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 space-y-4">
              <div className="bg-white/30 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-white">AI-Powered Features</h2>
                <ul className="mt-2 space-y-2 text-green-100">
                  <li>📝 Real-Time Transcription</li>
                  <li>🌍 Translation into Local Languages</li>
                  <li>📚 Automated Notes & Summaries</li>
                  <li>❓ Revision Questions</li>
                  <li>📊 Interactive Polls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;