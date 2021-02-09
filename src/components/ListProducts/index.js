import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/Product/Product.actions";

function ListProducts() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.product.listProducts);
  const [products, setProducts] = useState(listProducts);

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts]);

  return (
    <div>
      <ul>
        {products.map((product, index) => {
          return <li key={index}>{product}</li>;
        })}
      </ul>
      <button onClick={() => dispatch(addProduct("Teste"))}>ok</button>
    </div>
  );
}

export default ListProducts;
