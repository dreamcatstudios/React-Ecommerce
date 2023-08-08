import React from "react";
import {
  FaApple,
  FaGoogle,
  FaFacebook,
  FaAmazon,
  FaMicrosoft,
} from "react-icons/fa";

const Trusted = () => {
  const companyData = [
    { name: "Apple", icon: FaApple },
    { name: "Google", icon: FaGoogle },
    { name: "Facebook", icon: FaFacebook },
    { name: "Amazon", icon: FaAmazon },
    { name: "Microsoft", icon: FaMicrosoft },
  ];

  return (
    <section>
      <div className="flex flex-col  items-center gap-5 bg-gray-200 p-16">
        <div>
          <h1>Trusted By 1000+ Companies</h1>
        </div>
        <div className="flex gap-8 sm:gap-12 flex-col sm:flex-row ">
          {companyData.map((company, index) => (
            <div key={index} className="flex items-center">
              <company.icon size={40} />
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
