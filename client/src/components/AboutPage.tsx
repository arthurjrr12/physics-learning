import { Link } from "wouter";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-white opacity-90 max-w-3xl mx-auto"
            >
              Learn more about our mission to make physics education career-relevant
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Career-Based Physics Digital Learning System
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Welcome to Career-Based Physics Digital Learning System, where we bridge the gap between physics education and real-world careers. Our platform is designed to provide students with an interactive and engaging approach to learning physics by connecting concepts with practical applications in various industries, from engineering and healthcare to technology and space exploration.
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              We believe that physics is more than just equations—it is the foundation of innovation and problem-solving in today's fast-evolving job market. Through our digital learning system, students gain access to interactive modules, career-focused lessons, and real-world problem-solving scenarios that prepare them for future careers in STEM fields.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg shadow-lg p-1">
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-center">
                  <svg className="w-32 h-32 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 2V22M2 12H22M8 4C8 4.55228 8.44772 5 9 5H15C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mt-4">Physics That Matters</h3>
                <p className="text-neutral-600 text-center mt-2">Connecting theory with real-world applications in various career paths</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-neutral-600">
            Our mission is to empower learners with industry-relevant physics knowledge, making science education more meaningful, accessible, and career-driven. Whether you are a high school student exploring career paths or a professional seeking to enhance your physics skills, our platform offers a dynamic learning experience tailored to your needs.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            Join us as we revolutionize physics education and help shape the future of tomorrow's workforce!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-4">
              <i className="ri-rocket-line text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Our Mission</h3>
            <p className="mt-2 text-neutral-600">
              To transform physics education by making it career-relevant, interactive, and accessible to all learners.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1DAFB8] text-white mb-4">
              <i className="ri-eye-line text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Our Vision</h3>
            <p className="mt-2 text-neutral-600">
              A world where physics education directly connects to professional success and technological innovation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#FF9500] text-white mb-4">
              <i className="ri-heart-line text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900">Our Values</h3>
            <p className="mt-2 text-neutral-600">
              Relevance, engagement, accessibility, and excellence in everything we create and deliver.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/paths">
            <a className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90">
              Explore Our Courses
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
