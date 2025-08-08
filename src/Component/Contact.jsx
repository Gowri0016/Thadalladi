import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 py-20 px-4 md:px-12 text-gray-800">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4">
          Let’s Plan Your Trip
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Reach out for exclusive Thadalladi packages & pan-India tours!
        </p>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {/* Contact Info */}
        <div className="space-y-6">
          {[{
            icon: <FaEnvelope className="text-yellow-600 text-xl" />,
            label: 'thadalladi@tours.com'
          }, {
            icon: <FaPhoneAlt className="text-yellow-600 text-xl" />,
            label: '+91 98765 43210'
          }, {
            icon: <FaMapMarkerAlt className="text-yellow-600 text-xl" />,
            label: 'Pan India Service'
          }].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md"
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          whileHover={{ scale: 1.01 }}
          className="bg-white p-8 rounded-xl shadow-xl space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-yellow-300 rounded px-4 py-3 focus:outline-yellow-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-yellow-300 rounded px-4 py-3 focus:outline-yellow-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border border-yellow-300 rounded px-4 py-3 focus:outline-yellow-500"
            required
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-semibold px-6 py-3 rounded-full shadow-md"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}
