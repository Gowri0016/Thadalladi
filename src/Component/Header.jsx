import React, { useState } from 'react';
import { FaBusAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' }
  };

  return (
    <motion.div
      initial={{ rotateX: -90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="fixed top-0 left-0 z-50 w-full py-4 md:py-6 bg-black shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        whileHover={{ rotateY: 5, rotateX: 3 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="flex items-center justify-between px-4 md:px-8"
      >
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3 md:gap-4">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Link to="/">
              <FaBusAlt className="text-3xl md:text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] cursor-pointer" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              rotateZ: [0, 2, -2, 1, -1, 0],
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="relative px-4 md:px-6 py-1 md:py-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white shadow-2xl overflow-hidden"
          >
            <motion.span
              className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white/20 via-white/50 to-white/20 blur-lg opacity-70 transform rotate-12"
              animate={{ left: ['-120%', '150%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative z-10 text-sm md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-white drop-shadow-[0_0_20px_white] font-semibold md:font-bold tracking-wide">
              Thadalladi
            </span>
          </motion.div>
        </div>

        {/* Right: Desktop Quote & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            href="/contact"
            className="hidden md:inline-block px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-base text-white font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg hover:shadow-xl"
          >
            Get Quotes
          </motion.a>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:hidden fixed top-16 right-0 w-3/4 h-screen bg-black bg-opacity-90 backdrop-blur-lg shadow-2xl z-40 p-6 space-y-6 text-white"
          >
            <Link to="/" className="block text-xl font-semibold hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block text-xl font-semibold hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/tours" className="block text-xl font-semibold hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Tours</Link>
            <Link to="/gallery" className="block text-xl font-semibold hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="block text-xl font-semibold hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
