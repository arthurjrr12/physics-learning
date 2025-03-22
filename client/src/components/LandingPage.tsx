import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="pt-16">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white/90 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 backdrop-blur-sm rounded-lg shadow-lg">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
            >
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-neutral-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Physics Digital</span>{" "}
                  <span className="block text-primary xl:inline">Learning System</span>
                </h1>
                <p className="mt-3 text-base text-neutral-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Master physics through career-focused learning paths. Interactive lessons, real-world applications, and gamified quizzes make learning physics both fun and practical.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <div
                      onClick={() => window.location.href = "/paths"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 cursor-pointer"
                    >
                      Get Started
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div
                      onClick={() => window.location.href = "/about"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-neutral-100 hover:bg-neutral-200 md:py-4 md:text-lg md:px-10 cursor-pointer"
                    >
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-transparent sm:h-72 md:h-96 lg:w-full lg:h-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-400/10 to-cyan-400/20 mix-blend-lighten z-10"></div>
            <div className="w-full h-full flex items-center justify-center" 
                 style={{
                   background: "linear-gradient(135deg, #2B0B98 0%, #42007C 50%, #330066 100%)"
                 }}>
              <img 
                src="/physics-grid-wireframe.jpg"
                alt="Physics grid wireframe"
                className="w-full h-full object-cover object-center"
                style={{ 
                  opacity: 0.95,
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Approach</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Learn Physics for Your Career
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-600 lg:mx-auto">
              Choose your path and discover how physics applies to your dream career.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <i className="ri-building-line text-xl"></i>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-neutral-900">Physics for Engineers</h3>
                  <p className="mt-2 text-base text-neutral-600">
                    Learn mechanics, thermodynamics, and electrical concepts tailored for engineering applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}  
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1DAFB8] text-white">
                  <i className="ri-heart-pulse-line text-xl"></i>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-neutral-900">Physics for Healthcare</h3>
                  <p className="mt-2 text-base text-neutral-600">
                    Study radiation, fluid dynamics, and optics as they apply to medical technology and treatment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}  
                className="flex flex-col items-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9500] text-white">
                  <i className="ri-flight-takeoff-line text-xl"></i>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-neutral-900">Physics for Aviation</h3>
                  <p className="mt-2 text-base text-neutral-600">
                    Discover aerodynamics, meteorology, and navigation principles essential for pilots.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Learning Experience</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Interactive and Engaging
            </p>
            <p className="mt-4 max-w-2xl text-xl text-neutral-600 lg:mx-auto">
              Our platform combines the best educational practices with gamification elements.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 text-white opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h4l3 8 4-16 3 8h4"></path>
                  </svg>
                </div>
                <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg z-10 max-w-sm">
                  <h3 className="text-xl font-bold text-primary mb-2">Interactive Learning</h3>
                  <p className="text-neutral-600">Visualize physics concepts through dynamic simulations and interactive examples.</p>
                </div>
              </div>

              <div className="relative">
                <dl className="space-y-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <i className="ri-gamepad-line text-xl"></i>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Gamified Learning</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-neutral-600">
                      Earn points, unlock achievements, and track your progress as you advance through modules.
                    </dd>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <i className="ri-question-answer-line text-xl"></i>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Interactive Quizzes</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-neutral-600">
                      Test your knowledge with Duolingo-inspired quizzes that provide immediate feedback.
                    </dd>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <i className="ri-briefcase-line text-xl"></i>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-neutral-900">Career-Focused</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-neutral-600">
                      All content is tailored to show how physics concepts apply in your chosen career field.
                    </dd>
                  </motion.div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
