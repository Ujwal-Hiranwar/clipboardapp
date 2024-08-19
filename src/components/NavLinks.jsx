import React from 'react'

export default function NavLinks() {
  return (
    <div >
         <nav className="space-x-6 flex flex-row">
      <div className="dropdown">
        <a href="/" className="text-Black-600 text-sm sm:ml-7">
          <b className='sm:ml-5'>HOME</b>
        </a>
      </div>
      <div className="dropdown">
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
      
    </nav>
    </div>
  )
}
