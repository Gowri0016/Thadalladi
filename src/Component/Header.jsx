import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Asset/1.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/", gradient: "from-yellow-400 to-yellow-600" },
    { name: "About", to: "/about", gradient: "from-green-400 to-green-600" },
    { name: "Tours", to: "/tour", gradient: "from-pink-400 to-pink-600" },
    { name: "Gallery", to: "/gallery", gradient: "from-purple-400 to-purple-600" },
    { name: "Contact", to: "/contact", gradient: "from-blue-400 to-blue-600" },
    { name: "Get Quotes", to: "/contact", gradient: "from-yellow-400 via-orange-500 to-red-500" }
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full py-4 md:py-6 bg-black shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <div className="flex items-center justify-between px-4 md:px-8">
        
        {/* Logo with float animation */}
        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{
            rotateY: 0,
            opacity: 1,
            y: [0, -3, 0],
            boxShadow: [
              "0 0 15px rgba(255, 200, 0, 0.6)",
              "0 0 25px rgba(255, 120, 0, 0.8)",
              "0 0 15px rgba(255, 200, 0, 0.6)"
            ]
          }}
          transition={{
            rotateY: { duration: 0.8, ease: "easeOut" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Link to="/">
            <img className="w-28 cursor-pointer" src={Logo} alt="Logo" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={item.to}
                className={`px-4 py-1.5 rounded-full font-semibold text-white bg-gradient-to-r ${item.gradient} shadow-md hover:shadow-xl transition`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden fixed top-16 right-0 w-3/4 h-screen bg-black bg-opacity-90 backdrop-blur-lg shadow-2xl z-40 p-6 space-y-4"
          >
            {navItems.map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block w-full text-center px-4 py-2 rounded-full font-semibold bg-gradient-to-r ${item.gradient} shadow-lg hover:shadow-xl`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
