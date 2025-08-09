import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function Gallery() {
  const categories = {
    "Luxury Bus": [
      "https://picsum.photos/500/400?lux=1",
      "https://picsum.photos/500/600?lux=2",
      "https://picsum.photos/500/500?lux=3",
      "https://picsum.photos/500/700?lux=4",
    ],
    "Sleeper Bus": [
      "https://picsum.photos/500/400?sleep=1",
      "https://picsum.photos/500/500?sleep=2",
      "https://picsum.photos/500/600?sleep=3",
      "https://picsum.photos/500/400?sleep=4",
    ],
    "Mini Bus": [
      "https://picsum.photos/500/500?mini=1",
      "https://picsum.photos/500/400?mini=2",
      "https://picsum.photos/500/600?mini=3",
      "https://picsum.photos/500/700?mini=4",
    ]
  };

  const [activeCategory, setActiveCategory] = useState("Luxury Bus");
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-6 py-12">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tour Bus <span className="text-blue-600">Gallery</span>
      </motion.h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full font-semibold transition-colors ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {categories[activeCategory].map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer relative group"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`${activeCategory} ${idx}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
                View Image
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal Preview */}
      {selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImg} alt="Preview" className="rounded-lg max-h-[90vh]" />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
              onClick={() => setSelectedImg(null)}
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
