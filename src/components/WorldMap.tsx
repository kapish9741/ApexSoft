"use client";
import WorldMap from "../components/ui/WorldMapUi";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-black w-full ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-100 flex justify-center items-center">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap
        dots={[
            {
              start: { lat: 9.0760, lng: 72.8777 }, // Mumbai
              end: { lat: -23.8688, lng: 151.2093 }, // Sydney, Australia (Tech Hub)
            },
            {
              start: { lat: 2.9716, lng: 77.5946 }, // Bangalore
              end: { lat: 27.7749, lng: -122.4194 }, // San Francisco, USA (Silicon Valley)
            },
            {
              start: { lat: 18.6139, lng: 77.2090 }, // Delhi
              end: { lat: 42.5200, lng: 13.4050 },   // Berlin, Germany (Tech Scene)
            },
            {
              start: { lat: 12.5726, lng: 88.3639 }, // Kolkata
              end: { lat: -24.6037, lng: -58.3816 }, // Buenos Aires, Argentina (Emerging Tech)
            },
            {
              start: { lat: 3.0827, lng: 80.2707 }, // Chennai
              end: { lat: 25.6895, lng: 139.6917 },  // Tokyo, Japan (Global Tech Hub)
            },
          ]}
          
          
      />
    </div>
  );
}
