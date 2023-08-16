import React from "react";
import Header from "../components/Header";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="m-10">
        <div className="grid grid-cols-5 text-center">
          <div>ITEM</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>SUBTOTAL</div>
          <div>REMOVE</div>
        </div>
        <div className="border border-black"></div>
        <div className="grid grid-cols-5  text-center">
          <div>Iphonex</div>
          <div>6000</div>
          <div>2</div>
          <div>Total</div>
          <div>Button</div>
        </div>
        <div className="border border-black"></div>
        <div className="flex w-full justify-between">
          <button className="px-5 py-3 bg-purple-500 items-end text-white">
            CONTINUE SHOPPING
          </button>
          <button className="px-5 py-3 bg-orange-500 items-end text-white">
            CLEAR CART
          </button>
        </div>

        <div className="flex  w-full  justify-end">
          <div className="py-10 px-5 bg-gray-300 ">
            <div>SUBTOTAL</div>
            <div>Shipping fee</div>
            <div>Order Total:</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
