import React from 'react';
import { UserData } from '../context/UserContext';

function Footer() {
  const {isAuth,isAdmin}=UserData();
  return (
    <div>
      <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-2xl mb-2">FemSafe</p>
            <nav className="space-x-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/about" className="hover:text-gray-300">About</a>
              {/* <a href="/contact" className="hover:text-gray-300">Report</a> */}
              {/* <a href="/login" className="hover:text-gray-300">Log in</a> */}
              {isAdmin ? (
                          // Admin link (visible only to the admin)
                          <a href="/submit" className="hover:text-gray-300">
                            Submissions
                          </a>
                        ) : (
                          // User link (visible only to normal users)
                          <a href="/contact" className="hover:text-gray-300">
                            Report
                          </a>
                        )}
              
                        {isAuth ? (
                          
                            <a href="/account" className="hover:text-gray-300">Account</a>
                          
                        ) : (
                          
                            <a href="/login" className="hover:text-gray-300">Login</a>
                          
                        )}
            </nav>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">© 2024 FemSafe. All rights reserved.</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
