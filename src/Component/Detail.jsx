import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaGlobeAsia, FaUsers } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default function Detail() {
  const states = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Goa', 'Puducherry']

  return (
    <div className="min-h-screen mt-11 bg-gradient-to-br from-yellow-50 to-white px-4 md:px-10 py-10 md:py-16 text-gray-800">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-12"
      >
        <div className="bg-white shadow-xl rounded-2xl py-6 px-4 md:px-10 border-l-8 border-yellow-500">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4 text-center">
            Our Top Tour States
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {states.map((state, index) => (
              <motion.div
                key={state}
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow hover:shadow-md transition"
              >
                <MdLocationOn className="text-xl" />
                <span className="font-medium">{state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-800 mb-6">
          Welcome to Thadalladi Tours
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-10">
          Founded in <span className="font-semibold text-yellow-700">2021</span>, Thadalladi has grown to become one of India’s most dynamic and trusted tour package providers. From cultural escapes to adventure getaways, we’re committed to delivering unforgettable experiences across every corner of the country.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            icon: <FaMapMarkedAlt className="text-3xl mb-3 mx-auto" />,
            title: "Pan India Packages",
            desc: "Explore North to South, East to West – we've got every destination covered."
          },
          {
            icon: <FaGlobeAsia className="text-3xl mb-3 mx-auto" />,
            title: "Unique Experiences",
            desc: "Handpicked itineraries that reflect culture, nature, and local traditions."
          },
          {
            icon: <FaUsers className="text-3xl mb-3 mx-auto" />,
            title: "Founded by Travelers",
            desc: "Thadalladi was born from the vision of wanderers who believe in real travel."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
