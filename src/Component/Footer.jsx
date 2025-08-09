import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  const socialIcons = [FaFacebookF, FaInstagram, FaTwitter, FaGlobe]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative bg-black text-white py-10 px-6 overflow-hidden"
    >
      {/* Animated Gradient Wave Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 opacity-10 blur-2xl"
        animate={{ x: ['-50%', '50%', '-50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated Top Border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Name */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 drop-shadow-lg"
        >
          Thadalladi Tours
        </motion.div>

        {/* Social Icons with Orbit Effect */}
        <div className="flex gap-8 text-xl">
          {socialIcons.map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{
                scale: 1.2,
                rotate: [0, 15, -15, 0]
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              href="#"
              className="hover:text-yellow-400 relative"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-400 text-center md:text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          &copy; 2025 Thadalladi Tours. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
