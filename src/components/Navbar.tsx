import React from "react";
import NavLInks  from "./NavLinks";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="container shadow-lg sm:shadow-none px-6 py-3 flex justify-between sm:flex-col flex-row items-center">
        <a
          href="/"
          className="text-gray-800 text-2xl font-bold font-serif ml-8 sm:ml-14"
        >
          PERSONA
        </a>
        <NavLInks />
        <input
          type="text"
          placeholder="Search Your Product"
          className="px-4 py-2 border rounded-full text-gray-700 sm:ml-10"
        />
        <div className="flex items-center space-x-4">
          <a
            href="/login"
            className="text-Black-600 hover:text-gray-800 sm:ml-10"
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
  );
}
