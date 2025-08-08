import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative bg-black text-white py-10 px-6"
    >
      {/* Shimmering Glow Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/0 blur-3xl opacity-20"
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Name with Motion */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 drop-shadow-md"
        >
          Thadalladi Tours
        </motion.div>

        {/* Social Icons with Bounce */}
        <div className="flex gap-6 text-lg">
          {[FaFacebookF, FaInstagram, FaTwitter, FaGlobe].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              href="#"
              className="hover:text-yellow-400"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-400"
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
