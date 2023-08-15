// FilterReducer.js
const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default FilterReducer;
