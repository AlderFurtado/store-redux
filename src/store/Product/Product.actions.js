export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
}

export function addProductInCart(product) {
  return {
    type: "ADD_PRODUCT_IN_CART",
    payload: product,
  };
}
