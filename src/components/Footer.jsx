import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 py-16 mt-32">
      <div className="relative">
        <div className="absolute bg-gray-300 w-[70%] -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <div className="flex flex-col items-center gap-3 text-center sm:text-left sm:flex-row py-5 justify-around ">
            <div className="flex flex-col">
              <p>Ready to get Started?</p>
              <p>Talk with us today</p>
            </div>
            <div>
              <button className="bg-purple-500 text-white py-2 px-4 sm:py-3 sm:px-7 rounded-sm">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center gap-5 sm:gap-2 sm:flex-row justify-around mt-5">
        <div>
          <h3 className="text-white text-xl">Contact</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div>
          <h3 className="text-white text-xl">Terms of Service</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3 className="text-white text-xl">Social Media</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
