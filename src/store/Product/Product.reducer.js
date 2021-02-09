const INITIAL_STATE = {
  product: {},
  products: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state.products, action.payload];

    default:
      break;
  }
}
