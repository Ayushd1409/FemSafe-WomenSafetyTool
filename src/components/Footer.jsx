import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white p-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <p className="font-bold text-2xl mb-2">FemSafe</p>
            <nav className="space-x-4">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/about" className="hover:text-gray-300">About</a>
              <a href="/contact" className="hover:text-gray-300">Report</a>
              <a href="/login" className="hover:text-gray-300">Log in</a>
            </nav>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-300">© 2024 FemSafe. All rights reserved.</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer