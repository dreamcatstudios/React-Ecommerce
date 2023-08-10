import React from "react";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <>
      <div className="flex gap-3">
        <button className="text-xl" onClick={() => setIncrease()}>
          +
        </button>
        <h1>{amount}</h1>
        <button className="text-xl" onClick={() => setDecrease()}>
          -
        </button>
      </div>
    </>
  );
};

export default CartAmountToggle;
