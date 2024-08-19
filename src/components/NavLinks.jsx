import React from 'react'

export default function NavLinks() {
  return (
    <div >
         <nav className="space-x-6 flex flex-row justify-normal">
      <div className="dropdown">
        <a href="/" className="text-Black-600 text-sm ">
          <b className='sm:mx-4'>HOME</b>
        </a>
      </div>
      <div className="dropdown">
        <a href="#" className="text-Black-600" style={{ fontSize: 14 }}>
          <b className='sm:mx-4'>MEN</b>
        </a>
        <div className="dropdown-content">
          <a href="#">Toys</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#" className="text-Black-600 " style={{ fontSize: 14 }}>
          <b className='sm:mx-4'>WOMEN</b>
        </a>
        <div className="dropdown-content">
          <a href="#">Toys</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#" className="text-Black-600" style={{ fontSize: 14 }}>
          <b className='sm:mx-4'>KIDS</b>
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
