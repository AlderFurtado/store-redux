import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../store/Product/Product.actions";

import styles from "./style.module.css";

function ListProducts() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.product.listProducts);
  const [products, setProducts] = useState(listProducts);

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts]);

  return (
    <>
      <div className={styles.container}>
        {products.map(({ name, description, img }, index) => {
          return (
            <div key={index} className={styles.container_item}>
              <img src={img} alt={name} />

              <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() =>
          dispatch(
            addProduct({
              name: "Blusa masculina",
              description: "Conforto e moda no mesmo local",
              price: 12000,
              img:
                "https://www.blinkjeans.com.br/wp-content/uploads/camisa-masculina-modelo-gola-careca-tecido-de-malha-manga-curta-23640-1.jpg",
            })
          )
        }
      >
        ok
      </button>
    </>
  );
}

export default ListProducts;
