import React, { useState } from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

function Cart() {
  const productsInCartState = useSelector(
    (state) => state.product.productsInCart
  );

  return (
    <div>
      <p>{productsInCartState.length}</p>
    </div>
  );
}

export default Cart;
