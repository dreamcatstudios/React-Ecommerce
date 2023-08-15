import React, { useContext, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import FormatPrice from "../helpers/FormatPrice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFilterContext } from "../context/FilterContext";

const Products = () => {
  const { isLoading, filter_products } = useFilterContext();
  const [sortType, setSortType] = useState("lowest_sort");
  const [sortedProducts, setSortedProducts] = useState([...filter_products]);

  console.log("Sorted Products:", sortedProducts);

  if (sortType === "lowest_sort") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "highest_sort") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const filterLogic = (category) => {
    if (category == "all") {
      setSortedProducts([...filter_products]);
    } else {
      const filteredProducts = filter_products.filter(
        (item) => item.category === category
      );
      setSortedProducts(filteredProducts);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Header />
        <div className="flex flex-row  justify-center pt-10">
          <div className="flex flex-col gap-2 border border-orange-500">
            <input
              type="text"
              placeholder="Search"
              className="px-5 py-3 border rounded-sm"
            />
            <h1 className="text-xl">Category</h1>
            <div className="flex flex-col items-start gap-3 ">
              <button onClick={() => filterLogic("all")}>All</button>
              <button onClick={() => filterLogic("mobile")}>Mobile</button>
              <button onClick={() => filterLogic("laptop")}>Laptop</button>
              <button onClick={() => filterLogic("computer")}>Computer</button>
              <button onClick={() => filterLogic("accessories")}>
                Accessories
              </button>
              <button onClick={() => filterLogic("watch")}>Watch</button>
            </div>

            <h1>Price</h1>
            <div>
              <input
                value="1000"
                min="1000"
                max="50000"
                step="500"
                type="range"
              />
            </div>
            <div>
              <button className="px-5 py-3 bg-orange-500">Clear Filters</button>
            </div>
          </div>
          <div className="flex flex-col border border-orange-500">
            <div className="flex flex-row gap-5 items-center justify-center p-5 border">
              <h1 className="text-center">{`${filter_products.length} Total Products`}</h1>
              <select
                className="border border-black py-2 px-5 "
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="lowest_sort">Price(lowest) </option>
                <option value="highest_sort">Price(highest) </option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {sortedProducts.map((item, index) => (
                <div key={index}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Products;
