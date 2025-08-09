import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tour() {
  const data = {
    Karnataka: [
      { name: "Mysore Palace", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Mysore_Palace_Morning.jpg", desc: "A royal palace with stunning Indo-Saracenic architecture." },
      { name: "Coorg", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Coorg_coffee_plantations.jpg", desc: "Lush coffee plantations, waterfalls, and hills." }
    ],
    TamilNadu: [
      { name: "Meenakshi Temple", img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Meenakshi_Amman_temple_tower.jpg", desc: "A historic Hindu temple with intricate carvings in Madurai." },
      { name: "Ooty", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Ooty_Lake.jpg", desc: "A hill station famous for tea gardens and serene views." }
    ]
  };

  const [selectedState, setSelectedState] = useState(null);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [modalPlace, setModalPlace] = useState(null);

  const filteredPlaces =
    selectedState &&
    data[selectedState].filter((place) =>
      place.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="p-4 md:p-6 font-sans">
      <h1 className="text-2xl md:text-3xl font-bold mt-20 mb-4 text-center">
        Top Tourist Places
      </h1>

      {/* State Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 max-h-32 overflow-y-auto">
        {Object.keys(data).map((state) => (
          <button
            key={state}
            onClick={() => {
              setSelectedState(state);
              setSearch("");
            }}
            className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all text-sm md:text-base ${
              selectedState === state
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      {/* Search & View Toggle */}
      {selectedState && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <input
            type="text"
            placeholder="Search places..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-lg w-full sm:w-1/2 text-sm md:text-base"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 rounded-lg ${
                view === "grid" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1 rounded-lg ${
                view === "list" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              List
            </button>
          </div>
        </div>
      )}

      {/* Places */}
      {selectedState && (
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            {selectedState} - Top Places
          </h2>
          <div
            className={
              view === "grid"
                ? "grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-3"
            }
          >
            <AnimatePresence>
              {filteredPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setModalPlace(place)}
                  className={`relative rounded-xl overflow-hidden shadow-md cursor-pointer group ${
                    view === "list" ? "flex items-center gap-3" : ""
                  }`}
                >
                  <img
                    src={place.img}
                    alt={place.name}
                    className={
                      view === "list"
                        ? "w-32 h-24 object-cover rounded-lg"
                        : "w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition duration-500"
                    }
                  />
                  {view === "grid" && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h3 className="font-bold text-sm md:text-lg">{place.name}</h3>
                      </div>
                    </>
                  )}
                  {view === "list" && (
                    <div>
                      <h3 className="font-bold text-base">{place.name}</h3>
                      <p className="text-gray-600 text-sm">{place.desc}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {modalPlace && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center p-3 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalPlace(null)}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden max-w-md w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalPlace.img}
                alt={modalPlace.name}
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-xl font-bold mb-2">{modalPlace.name}</h3>
                <p className="text-gray-700 text-sm md:text-base">{modalPlace.desc}</p>
                <button
                  onClick={() => setModalPlace(null)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm md:text-base"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}