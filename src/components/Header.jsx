import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 bg-gray-100">
      <nav className="flex items-center justify-around ">
        <NavLink to="/">
          <div className=" hover:text-purple-500 hover:underline transform transition-transform duration-300">
            <h1>Jatin Store</h1>
          </div>
        </NavLink>

        <div className="flex gap-5 items-center">
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
      </nav>
    </header>
  );
};

export default Header;
