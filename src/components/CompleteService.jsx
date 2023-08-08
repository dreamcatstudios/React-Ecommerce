import React from "react";
import {
  FaTruck,
  FaHandsWash,
  FaMoneyBillAlt,
  FaShieldAlt,
} from "react-icons/fa";

const CompleteService = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-12 m-16 items-center">
          <div>
            <div className="p-14 md:p-24 bg-gray-200 rounded-lg">
              <FaTruck size={40} />
              <h1>Super Fast and Free Delivery</h1>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="p-14 md:p-24 md:py-4 md:px-28 bg-gray-200 rounded-lg">
              <FaHandsWash size={40} />
              <h1>Non-contact Shipping</h1>
            </div>
            <div className="p-14 md:p-24 md:py-4 md:px-28  bg-gray-200 rounded-lg">
              <FaMoneyBillAlt size={40} />
              <h1>Money-back Guaranteed</h1>
            </div>
          </div>
          <div>
            <div className="p-14 md:p-24 bg-gray-200 rounded-lg">
              <FaShieldAlt size={40} />
              <h1>Super Secure Payment System</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompleteService;
