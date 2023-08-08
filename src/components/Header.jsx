import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-3 bg-gray-100">
        <nav className="flex items-center justify-around">
          <div>
            <h1>Jatin Store</h1>
          </div>
          <div className="flex gap-5 items-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Product</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>

            <button className="px-5 py-3 bg-purple-500 rounded-sm">
              LOG IN
            </button>
            {/* Add another button here */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
