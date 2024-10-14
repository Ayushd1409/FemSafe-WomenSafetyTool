import React from 'react'

function Navbar() {
  return (
    <div className='<div className="absolute top-0 left-0 w-full z-10">'>
        <header className="flex justify-between items-center pb-6 bg-white shadow px-20 pt-6">
        <div className="text-3xl font-bold text-gray-800">FemSafe</div>
        <nav className="space-x-6 font-semibold ">
          <a href="/" className="text-gray-800  hover:text-gray-500">Home</a>
          <a href="/about" className="text-gray-800  hover:text-gray-500">About</a>
          <a href="/contact" className="text-gray-800  hover:text-gray-500">Report</a>
          <a href="/login" className="text-gray-800  hover:text-gray-500">Log in</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar