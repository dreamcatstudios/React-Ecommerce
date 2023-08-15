import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-3 bg-gray-100">
      <nav className="flex items-center justify-between px-5 md:px-0 md:justify-around">
        <NavLink to="/">
          <div className="hover:text-purple-500 hover:underline transform transition-transform duration-300">
            <h1>Jatin Store</h1>
          </div>
        </NavLink>

        <div className="hidden md:flex gap-5 items-center">
          <NavLink
            to="/"
            className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
          >
            Product
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
          >
            Cart
          </NavLink>
          <button className="px-5 py-3 bg-purple-500 rounded-sm">LOG IN</button>
          {/* Add another button here */}
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="md:hidden px-2 py-1 rounded focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center py-4 gap-5">
            <NavLink
              to="/"
              className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
            >
              Product
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-link hover:text-purple-500 hover:underline transform transition-transform duration-300"
            >
              Cart
            </NavLink>
            <button className="px-5 py-3 bg-purple-500 rounded-sm">
              LOG IN
            </button>
            {/* Add another button here */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
