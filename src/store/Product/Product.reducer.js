let INITIAL_STATE = {
  productSelected: {},
  listProducts: [],
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state.productSelected,
        listProducts: [...state.listProducts, action.payload],
      };

    default:
      return state;
  }
}
