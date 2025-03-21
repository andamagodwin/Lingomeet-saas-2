const Usage = () => {
    const steps = [
      {
        step: "1",
        title: "Open Google Meet",
        description:
          "Start or join a Google Meet session as you normally would.",
      },
      {
        step: "2",
        title: "Go to the Activities Tab",
        description:
          "Click on the 'Activities' tab located at the bottom right of the Google Meet interface.",
      },
      {
        step: "3",
        title: "Select Lingomeet",
        description:
          "From the list of available add-ons, select 'Lingomeet' to install and activate it.",
      },
      {
        step: "4",
        title: "Enable Real-Time Features",
        description:
          "Once activated, Lingomeet will start transcribing, translating, and generating summaries in real-time.",
      },
      {
        step: "5",
        title: "Access Notes and Reports",
        description:
          "After the meeting, access your transcriptions, translations, summaries, and revision questions from the Lingomeet dashboard.",
      },
    ];
  
    return (
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center py-12 px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Use Lingomeet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to get started with Lingomeet and enhance your Google Meet experience.
          </p>
        </div>
  
        {/* Content Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-green-500">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
  
          {/* Right Column: Illustration */}
          <div className="hidden lg:block">
            <img
              src="/usage.svg" // Replace with your illustration or image
              alt="How to Use Lingomeet"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Usage;