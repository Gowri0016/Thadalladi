import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkedAlt, FaGlobeAsia, FaUsers } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default function Detail() {
  const states = ['Tamil Nadu', 'Karnataka', 'Kerala', 'Goa', 'Puducherry']

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative min-h-screen mt-11 bg-gradient-to-b from-blue-50 via-white to-pink-50 px-4 md:px-10 py-10 md:py-16 text-gray-800 overflow-hidden">

      {/* Animated gradient wave background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          background: 'linear-gradient(270deg, rgba(255,200,200,0.15), rgba(200,200,255,0.15), rgba(255,255,200,0.15))',
          backgroundSize: '400% 400%',
          zIndex: 0
        }}
      />

      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-12 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl py-6 px-4 md:px-10 border border-white/40">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
            Our Top Tour States
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 md:gap-6"
          >
            {states.map((state, i) => (
              <motion.div
                key={state}
                variants={itemVariants}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 200 }}
                animate={{
                  y: [0, -5, 0],
                  x: i % 2 === 0 ? [0, 5, 0] : [0, -5, 0]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white rounded-full shadow-lg cursor-pointer"
              >
                <MdLocationOn className="text-xl" />
                <span className="font-medium">{state}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center px-4 relative z-10"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-800 mb-6">
          Welcome to Thadalladi Tours
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Founded in <span className="font-semibold text-yellow-700">2021</span>, Thadalladi has grown to become one of India’s most dynamic and trusted tour package providers. From cultural escapes to adventure getaways, we’re committed to delivering unforgettable experiences across every corner of the country.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[{
            icon: <FaMapMarkedAlt className="text-3xl mb-3 mx-auto text-red-500" />,
            title: "Pan India Packages",
            desc: "Explore North to South, East to West – we've got every destination covered."
          },
          {
            icon: <FaGlobeAsia className="text-3xl mb-3 mx-auto text-blue-500" />,
            title: "Unique Experiences",
            desc: "Handpicked itineraries that reflect culture, nature, and local traditions."
          },
          {
            icon: <FaUsers className="text-3xl mb-3 mx-auto text-green-500" />,
            title: "Founded by Travelers",
            desc: "Thadalladi was born from the vision of wanderers who believe in real travel."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-xl bg-white/50 backdrop-blur-lg border border-white/40 shadow-lg group overflow-hidden"
            >
              {/* Hover radial highlight */}
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {item.icon}
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
