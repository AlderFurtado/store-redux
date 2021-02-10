import React from "react";
import { useSelector } from "react-redux";

// import { Container } from './styles';

function Cart() {
  const productsInCartState = useSelector(
    (state) => state.product.productsInCart
  );

  return (
    <div>
      <p>
        Produtos adicionados <span>{productsInCartState.length}</span>
      </p>
    </div>
  );
}

export default Cart;
