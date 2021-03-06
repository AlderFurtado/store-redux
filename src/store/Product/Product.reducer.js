let INITIAL_STATE = {
  productSelected: {},
  listProducts: [
    {
      name: "Blusa masculina",
      description: "Conforto e moda no mesmo local",
      price: 12000,
      img:
        "https://www.blinkjeans.com.br/wp-content/uploads/camisa-masculina-modelo-gola-careca-tecido-de-malha-manga-curta-23640-1.jpg",
    },
  ],
  productsInCart: [],
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        listProducts: [...state.listProducts, action.payload],
      };

    case "ADD_PRODUCT_IN_CART":
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };

    default:
      return state;
  }
}
