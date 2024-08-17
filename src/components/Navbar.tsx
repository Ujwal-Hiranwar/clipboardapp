import React from 'react'

export default function Navbar() {
  return (
    <div>
      <>
  
  <header className="bg-white">
    <div className="container mx-auto shadow-lg px-6 py-3 flex justify-between items-center">
      <a href="/" className="text-gray-800 text-2xl font-bold font-serif ml-8 sm:text-red-800">
        PERSONA
      </a>
      <nav className="space-x-6" style={{ paddingLeft: 180 }}>
        <div className="dropdown">
        <a href="/" className="text-Black-600 mr-8" style={{ fontSize: 14 }}>
            <b>HOME</b>
          </a>
          <a href="#" className="text-Black-600" style={{ fontSize: 14 }}>
            <b>MEN</b>
          </a>
          <div className="dropdown-content">
            <a href="#">Toys</a>
            <a href="#">Clothing</a>
            <a href="#">Accessories</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="text-Black-600 " style={{ fontSize: 14 }}>
            <b>WOMEN</b>
          </a>
          <div className="dropdown-content">
            <a href="#">Toys</a>
            <a href="#">Clothing</a>
            <a href="#">Accessories</a>
          </div>
        </div>
        <div className="dropdown">
          <a href="#" className="text-Black-600" style={{ fontSize: 14 }}>
            <b>KIDS</b>
          </a>
          <div className="dropdown-content">
            <a href="#">Toys</a>
            <a href="#">Clothing</a>
            <a href="#">Accessories</a>
          </div>
        </div>
        <a
          href="#"
          className="text-Black-600 hover:text-gray-800"
          style={{ fontSize: 14 }}
        >
          <b>BEAUTY</b>
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Your Product"
          className="px-4 py-2 border rounded-full text-gray-700"
        />
        <a
          href="/login"
          className="text-Black-600 hover:text-gray-800"
          style={{ fontSize: 14 }}
        >
          <b>Login</b>
        </a>
        <a
          href="/register"
          className="text-Black-600 hover:text-gray-800"
          style={{ fontSize: 14 }}
        >
          <b>Register</b>
        </a>
      </div>
    </div>
  </header>
</>

    </div>
  )
}
