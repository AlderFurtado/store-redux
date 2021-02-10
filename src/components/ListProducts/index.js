import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProductInCart } from "../../store/Product/Product.actions";

import styles from "./style.module.css";

function ListProducts() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.product.listProducts);

  return (
    <>
      <div className={styles.container}>
        {listProducts.map((product, index) => {
          return (
            <div key={index} className={styles.container_item}>
              <img src={product.img} alt={product.name} />

              <div>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.description}>{product.description}</p>
              </div>
              <button
                onClick={() => {
                  dispatch(addProductInCart(product));
                }}
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListProducts;
