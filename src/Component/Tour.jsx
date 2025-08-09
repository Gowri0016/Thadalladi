import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Tour() {
  const data = {
    Karnataka: [
      { name: "Mysore Palace", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Mysore_Palace_Morning.jpg" },
      { name: "Coorg", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Coorg_coffee_plantations.jpg" },
      { name: "Hampi", img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Hampi_-_Virupaksha_Temple.jpg" },
      { name: "Badami Caves", img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Badami_Cave_Temple.jpg" },
      { name: "Chikmagalur", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Mullayanagiri_peak.jpg" },
      { name: "Gokarna", img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Om_Beach_Gokarna.jpg" },
      { name: "Murudeshwar", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Murudeshwar_Temple.jpg" },
      { name: "Bandipur National Park", img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bandipur_tiger_reserve.jpg" },
      { name: "Jog Falls", img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Jog_Falls.jpg" },
      { name: "Shivanasamudra Falls", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Shivanasamudra_Falls.jpg" }
    ],
    "Tamil Nadu": [
      { name: "Meenakshi Amman Temple", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Meenakshi_Amman_Temple_Madurai.jpg" },
      { name: "Marina Beach", img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Marina_Beach_Chennai.jpg" },
      { name: "Kodaikanal", img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Kodaikanal_Lake.jpg" },
      { name: "Ooty", img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Ooty_Lake.jpg" },
      { name: "Mahabalipuram", img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Shore_Temple_Mahabalipuram.jpg" },
      { name: "Rameswaram", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rameswaram_temple.jpg" },
      { name: "Thanjavur", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Brihadeeswarar_Temple_Thanjavur.jpg" },
      { name: "Yercaud", img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Yercaud_Lake.jpg" },
      { name: "Kanyakumari", img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kanyakumari_Vivekananda_Rock.jpg" },
      { name: "Nilgiri Mountain Railway", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Nilgiri_Mountain_Railway_train.jpg" }
    ],
    Kerala: [
      { name: "Munnar", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Munnar_hillstation_kerala.jpg" },
      { name: "Alleppey Backwaters", img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Alleppey_houseboat.jpg" },
      { name: "Kochi", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Kochi_fort_kochi.jpg" },
      { name: "Kovalam Beach", img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Kovalam_Beach_Lighthouse.jpg" },
      { name: "Thekkady", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Thekkady_periyar_lake.jpg" },
      { name: "Wayanad", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Wayanad_hills.jpg" },
      { name: "Varkala", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Varkala_beach.jpg" },
      { name: "Athirapally Falls", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Athirapally_Falls.jpg" },
      { name: "Bekal Fort", img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Bekal_Fort.jpg" },
      { name: "Silent Valley", img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Silent_Valley_National_Park.jpg" }
    ],
    Goa: [
      { name: "Baga Beach", img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Baga_Beach_Goa.jpg" },
      { name: "Calangute Beach", img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Calangute_Beach.jpg" },
      { name: "Anjuna Beach", img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Anjuna_Beach_Goa.jpg" },
      { name: "Palolem Beach", img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Palolem_Beach.jpg" },
      { name: "Dudhsagar Falls", img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Dudhsagar_Falls.jpg" },
      { name: "Fort Aguada", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Fort_Aguada_Goa.jpg" },
      { name: "Basilica of Bom Jesus", img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Basilica_of_Bom_Jesus_Goa.jpg" },
      { name: "Chapora Fort", img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Chapora_Fort.jpg" },
      { name: "Vagator Beach", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Vagator_Beach.jpg" },
      { name: "Colva Beach", img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Colva_Beach_Goa.jpg" }
    ],
    Puducherry: [
      { name: "Promenade Beach", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Promenade_beach_Puducherry.jpg" },
      { name: "Auroville", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Auroville_Matrimandir.jpg" },
      { name: "Paradise Beach", img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Paradise_beach_puducherry.jpg" },
      { name: "Aurobindo Ashram", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Aurobindo_Ashram.jpg" },
      { name: "Serenity Beach", img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Serenity_beach_Puducherry.jpg" },
      { name: "French War Memorial", img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/French_War_Memorial_Puducherry.jpg" },
      { name: "Basilica of the Sacred Heart", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Basilica_Sacred_Heart_of_Jesus_Puducherry.jpg" },
      { name: "Ousteri Lake", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ousteri_Lake_Pondicherry.jpg" },
      { name: "Botanical Garden", img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Botanical_garden_puducherry.jpg" },
      { name: "Old Lighthouse", img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Old_Lighthouse_Puducherry.jpg" }
    ]
  };

  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mt-24 mb-6 text-center">Top Tourist Places</h1>

      {/* State Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(data).map((state) => (
          <button
            key={state}
            onClick={() => setSelectedState(state)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              selectedState === state
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      {/* Places Grid */}
      {selectedState && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {selectedState} - Top Places
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data[selectedState].map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={place.img}
                  alt={place.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                {/* Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg">{place.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
