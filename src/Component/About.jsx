import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaLightbulb, FaHandshake } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen mt-16 md:m-10 lg:m-24 bg-gradient-to-br from-[#f7f8fa] via-[#eef2f3] to-[#dfe9f3] text-gray-800 px-4 md:px-6 py-12">
      
      {/* Header Section */}
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About <span className="text-blue-600">Us</span>
      </motion.h1>
      
      <motion.p
        className="max-w-3xl mx-auto text-center text-base md:text-lg text-gray-600 mb-12 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We are a passionate team dedicated to delivering innovative IT solutions that help businesses grow and adapt in a fast-changing digital world.
      </motion.p>

      {/* Mission, Vision, Values */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaBullseye className="text-blue-600 text-4xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm md:text-base">
            To empower clients with cutting-edge technology and custom-built solutions that create measurable impact.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FaLightbulb className="text-yellow-500 text-4xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 text-sm md:text-base">
            To be recognized globally as a leader in IT innovation, transforming industries through smart solutions.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <FaHandshake className="text-green-500 text-4xl md:text-5xl mb-4" />
          <h3 className="text-lg md:text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600 text-sm md:text-base">
            Integrity, innovation, and collaboration form the foundation of everything we do.
          </p>
        </motion.div>

      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold shadow-md transition-colors text-sm md:text-base"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}
