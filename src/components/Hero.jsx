import React from "react";

const Hero = () => {
  return (
    <section className="m-10 sm:m-28">
      <div className="flex flex-col sm:flex-row gap-5 ">
        <div className="flex flex-col gap-5 items-start sm:items-start">
          <h1 className="text-gray-400">WELCOME TO</h1>
          <h1 className="text-3xl">Jatin E-Commerce</h1>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sit ratione vitae numquam placeat necessitatibus
            accusamus nemo suscipit, ad atque, consequatur saepe nostrum autem
            fugit beatae unde fugiat iusto in!
          </p>
          <div>
            <button className="px-5 py-3 bg-purple-500 text-white ">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative">
          <div>
            <img src="/src/assets/hero.jpg" />
          </div>
          <div className="bg-purple-200 absolute px-36 py-28 left-52 -top-12 -z-10 hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
