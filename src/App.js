import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import FormNewProduct from "./components/FormNewProduct";
import ListProducts from "./components/ListProducts";
import { changeScreen } from "./store/Screens/Screens.actions";

function App() {
  // screen
  // 1- LIST_PRODUCTS 2-FORM_ADD_PRODUCT 3-PRODUCTS-IN-CART
  const screenStore = useSelector((state) => state.screens);

  const dispatch = useDispatch();
  return (
    <div>
      {screenStore === "LIST_PRODUCTS" && (
        <>
          <Cart />
          <ListProducts />
          <button onClick={() => dispatch(changeScreen("FORM_ADD_PRODUCT"))}>
            Adicionar produto
          </button>
        </>
      )}
      {screenStore === "FORM_ADD_PRODUCT" && <FormNewProduct />}
    </div>
  );
}

export default App;
