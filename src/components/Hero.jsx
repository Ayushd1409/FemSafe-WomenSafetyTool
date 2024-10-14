import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <section className="relative h-[90vh] mb-10">
        {/* Image that overlaps the navbar */}
        <motion.img
          src="/desktop-women4.png"
          alt="Hero"
          className="w-full h-full object-cover"
          initial={{ y: -50, opacity: 0 }} // Start off the screen
          animate={{ y: 0, opacity: 1 }} // Move into view
          transition={{ duration: 0.5 }} // Animation duration
        />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <header className="flex justify-between items-center px-20 pt-6">
            <div className="text-3xl font-bold text-white">FemSafe</div>
            <nav className="space-x-6 font-semibold">
              <a href="/" className="text-white">
                Home
              </a>
              <a href="/about" className="text-white">
                About
              </a>
              <a href="/contact" className="text-white">
                Report
              </a>
              <a href="/login" className="text-white">
                Log in
              </a>
            </nav>
          </header>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center z-0 mb-9">
          <motion.h1
            className="text-white text-3xl md:text-4xl font-bold text-center p-8 border-2 backdrop-blur-sm"
            initial={{ y: 50, opacity: 0 }} // Start below the screen
            animate={{ y: 0, opacity: 1 }} // Move into view
            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
          >
            EMPOWER YOUR COMMUNITY, ENSURE WOMEN'S SAFETY
          </motion.h1>
        </div>
      </section>

      {/* Section Title */}
      <section className="text-center flex p-20">
        <motion.img
          src="/desktop-women.jpg"
          alt="pic"
          className="w-1/2 h-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-1/2 items-start justify-start">
          <motion.h2
            className="text-4xl font-semibold mt-28 p-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            RESPECT, PROTECT, EMPOWER WITH FEMSAFE
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 px-9"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Designed to connect, protect, and empower, the platform integrates
            advanced features for seamless reporting, instant alerts, and
            community support.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
