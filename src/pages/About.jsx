import React, { useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const {isAuth,isAdmin}=UserData();
  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="relative max-h-screen md:h-screen bg-gray-900">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <header className="flex justify-between items-center pb-6 bg-white shadow px-6 pt-6 lg:px-20">
            <div className="text-3xl font-bold text-gray-800">FemSafe</div>

            {/* Desktop and larger screen Navbar */}
            <nav className="hidden md:flex space-x-6 font-semibold">
              <a href="/" className="text-gray-800 hover:text-gray-500">Home</a>
              <a href="/about" className="text-gray-800 hover:text-gray-500">About</a>
              {isAdmin ? (
            // Admin link (visible only to the admin)
            <a href="/submit" className="text-gray-800 hover:text-gray-500">
              Submissions
            </a>
          ) : (
            // User link (visible only to normal users)
            <a href="/contact" className="text-gray-800 hover:text-gray-500">
              Report
            </a>
          )}
              {/* <a href="/contact" className="text-gray-800 hover:text-gray-500">Report</a> */}
              {isAuth ? (<Link to='/account'>
                            <a className="text-gray-800 hover:text-gray-500">
                              Account
                            </a>
                            </Link>) :
                            (<Link to='/login'>
                            <a className="text-gray-800 hover:text-gray-500">
                              Login
                            </a>
                            </Link>)}            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </header>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center space-y-4 bg-white shadow-lg py-6 px-6">
              <a href="/" className="text-gray-800 hover:text-gray-500">Home</a>
              <a href="/about" className="text-gray-800 hover:text-gray-500">About</a>
              <a href="/contact" className="text-gray-800 hover:text-gray-500">Report</a>
              {isAuth ? (<Link to='/account'>
                            <a className="text-gray-800 hover:text-gray-500">
                              Account
                            </a>
                            </Link>) :
                            (<Link to='/login'>
                            <a className="text-gray-800 hover:text-gray-500">
                              Login
                            </a>
                            </Link>)}
              {/* <a href="/login" className="text-gray-800 hover:text-gray-500">Log in</a> */}
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-5 pt-16">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-10 mt-20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to FemSafe, a platform dedicated to empowering women by
            providing a safe and easy way to report and address safety concerns
            in real time. Our mission is to create a world where every woman
            feels secure, heard, and supported, no matter where she is. In
            today's society, safety is paramount. <br /><br />
            FemSafe is designed to offer women a tool they can rely on when
            they need it most. Whether you're commuting, walking alone, or
            simply want to alert someone of a dangerous situation, our app
            ensures that help is just a tap away.

            <p className="font-mono text-2xl mt-10">
              "This is developed by Ayush Dewangan, Abhinav Sharma and Chetan Vishwakarma"
            </p> <br /> 
          </motion.p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
