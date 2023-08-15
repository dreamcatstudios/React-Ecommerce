// FilterContext.js
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer"; // Corrected import path

const FilterContext = createContext();

const initialState = {
  isLoading: true, // Added isLoading state
  filter_products: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOAD_FILTER_PRODUCTS",
      payload: products,
    });
  }, [products]); // Added products as a dependency

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
