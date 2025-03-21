const About = () => {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-16 px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Lingomeet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lingomeet is a cutting-edge SaaS add-on designed to revolutionize your online meetings. With real-time
            transcription, translation, and AI-powered summaries, we make every meeting more productive and accessible.
          </p>
        </div>
  
        {/* Content Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image or Illustration */}
          <div className="relative">
            <img
              src="/about.svg" // Replace with your illustration or image
              alt="About Lingomeet"
              className="w-full h-auto rounded-lg"
            />
          </div>
  
          {/* Right Column: Features List */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Lingomeet?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Real-time transcription and translation for Google Meet.
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">
                    AI-powered summaries and revision questions for students.
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Interactive polls to engage participants during meetings.
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-gray-700">
                    Seamless integration with Google Meet for hassle-free use.
                  </p>
                </li>
              </ul>
            </div>
  
            {/* Call-to-Action Button */}
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;