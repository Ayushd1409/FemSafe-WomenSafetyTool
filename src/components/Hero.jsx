import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserData } from "../context/UserContext";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth, isAdmin } = UserData();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <header className="flex justify-between items-center px-6 sm:px-8 md:px-16 pt-6">
            <div className="text-2xl sm:text-3xl font-bold text-white">
              FemSafe
            </div>
            <nav className="space-x-4 sm:space-x-6 font-semibold text-sm sm:text-base hidden sm:flex ">
              <a
                href="/"
                className="text-white hover:text-lg duration-300 cursor-pointer"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-lg duration-300 cursor-pointer"
              >
                About
              </a>
              {isAdmin ? (
                // Admin link (visible only to the admin)
                <a
                  href="/submit"
                  className="text-white hover:text-lg duration-300 cursor-pointer"
                >
                  Submissions
                </a>
              ) : (
                // User link (visible only to normal users)
                <a
                  href="/contact"
                  className="text-white hover:text-lg duration-300 cursor-pointer"
                >
                  Report
                </a>
              )}

              {isAuth ? (
                <a
                  href="/account"
                  className=" text-white  rounded-md hover:text-lg duration-300 cursor-pointer"
                >
                  Account
                </a>
              ) : (
                <a
                  href="/login"
                  className=" text-white font-bold  rounded-md hover:text-lg duration-300 cursor-pointer"
                >
                  Login
                </a>
              )}
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </header>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden bg-black text-white p-4 absolute top-0 left-0 w-full z-20">
              <a href="/" className="block py-2">
                Home
              </a>
              <a href="/about" className="block py-2">
                About
              </a>
              {isAdmin ? (
                // Admin link (visible only to the admin)
                <a href="/submit" className="block py-2">
                  Submissions
                </a>
              ) : (
                // User link (visible only to normal users)
                <a href="/contact" className="block py-2">
                  Report
                </a>
              )}
              {/* <a href="/contact" className="block py-2">
                Report
              </a> */}
              {isAuth ? (
                <a href="/account" className="block py-2">
                  Account
                </a>
              ) : (
                <a href="/login" className="block py-2">
                  Login
                </a>
              )}
              {/* <a href="/login" className="block py-2">
                Log in
              </a> */}
            </div>
          )}
        </div>
      </section>

      {/* Text Overlay */}
      <div className="absolute inset-x-0 top-96 flex items-center justify-center z-0">
        <motion.h1
          className="text-white text-3xl sm:text-4xl font-bold text-center p-4 sm:p-8 md:p-10 border-2 backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }} // Start below the screen
          animate={{ y: 0, opacity: 1 }} // Move into view
          transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
        >
          EMPOWER YOUR COMMUNITY, ENSURE WOMEN'S SAFETY
        </motion.h1>
      </div>

      {/* Section Title */}
      <section className="text-center flex flex-col sm:flex-row p-8 sm:p-20">
        <motion.img
          src="/desktop-women.jpg"
          alt="pic"
          className="w-full sm:w-1/2 h-full object-cover"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-full sm:w-1/2 text-left sm:text-left mt-6 sm:mt-0">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold mt-6 sm:mt-28 p-4 sm:p-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            RESPECT, PROTECT, EMPOWER WITH FEMSAFE
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4 mb-8 sm:mb-28 px-4 sm:px-9"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Designed to connect, protect, and empower, the platform integrates
            advanced features for seamless reporting, instant alerts, and
            community support. FemSafe ensures privacy through anonymous
            reporting options and strengthens reports with secure evidence
            uploads, such as images, videos, or documents. 
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
