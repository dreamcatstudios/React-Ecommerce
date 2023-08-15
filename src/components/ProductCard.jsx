import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute px-5 py-1 rounded-md bg-white top-2 right-2">
          {item.category}
        </div>
        <img
          className="rounded-sm brightness-70"
          src={item.image}
          alt={item.category}
        />
      </div>
      <div className="flex flex-row justify-between">
        <h1>{item.name}</h1>
        <h1>{<FormatPrice currency={item.price} />}</h1>
      </div>
    </>
  );
};

export default ProductCard;
