import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuth, isAdmin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <header className="flex justify-between items-center pb-6 bg-white shadow px-6 pt-6 lg:px-20">
        <div className="text-3xl font-bold text-gray-800">FemSafe</div>

        <nav className="hidden md:flex space-x-6 font-semibold">
          <a href="/" className="text-gray-800 hover:text-gray-500">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-500">
            About
          </a>
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

          {isAuth ? (
            <Link to="/account">
              <a className="text-gray-800 hover:text-gray-500">Account</a>
            </Link>
          ) : (
            <Link to="/login">
              <a className="text-gray-800 hover:text-gray-500">Login</a>
            </Link>
          )}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white shadow-lg py-6 px-6">
          <a href="/" className="text-gray-800 hover:text-gray-500">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-gray-500">
            About
          </a>
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
          {isAuth ? (
            <Link to="/account">
              <a className="text-gray-800 hover:text-gray-500">Account</a>
            </Link>
          ) : (
            <Link to="/login">
              <a className="text-gray-800 hover:text-gray-500">Login</a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
