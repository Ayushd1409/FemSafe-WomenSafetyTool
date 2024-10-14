import React from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section className="relative max-h-screen md:h-screen bg-gray-900">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-10">
          <header className="flex justify-between items-center px-20 pt-6">
            <div className="text-3xl font-bold text-white ">FemSafe</div>
            <nav className="space-x-6 font-semibold">
              <a href="/" className="text-white ">
                Home
              </a>
              <a href="/about" className="text-white ">
                About
              </a>
              <a href="/contact" className="text-white ">
                Report
              </a>
              <a href="/login" className="text-white ">
                Log in
              </a>
            </nav>
          </header>
        </div>
        
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-5">
          <motion.h1
            className="text-4xl md:text-4xl font-bold mb-10 mt-20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-center mb-20"
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
          
        </div>{" "}
      </section>

      <Footer />
    </>
  );
}

export default About;
