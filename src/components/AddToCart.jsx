import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="flex flex-row gap-3" key={id}>
        <h1>Color:</h1>
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              className={`flex w-5 h-5 rounded-full items-center justify-center ${
                color === curColor ? "border-2 border-green-500" : ""
              }`}
              style={{ backgroundColor: curColor }}
              onClick={() => setColor(curColor)}
            >
              {color === curColor && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white absolute text-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 10.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <div>
        <NavLink to="/cart">
          <button className="px-5 py-2 text-white bg-purple-500">
            ADD TO CART
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
