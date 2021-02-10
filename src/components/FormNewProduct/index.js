import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/Product/Product.actions";
import { changeScreen } from "../../store/Screens/Screens.actions";

// import { Container } from './styles';

function FormNewProduct() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [img, setImg] = useState("");

  const addNewProduct = (e) => {
    e.preventDefault();
    let product = {
      name,
      description,
      price: Number.parseFloat(price),
      img,
    };
    dispatch(addProduct(product));
    goToListProduct();
  };

  const goToListProduct = () => {
    dispatch(changeScreen("LIST_PRODUCTS"));
  };

  return (
    <>
      <button onClick={() => goToListProduct()}>Voltar</button>
      <form onSubmit={(e) => addNewProduct(e)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Ex. Sapato social"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for={description}>Descrição</label>
        <input
          type="text"
          placeholder="Ex. Confortável e casual"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label for={price}>Preço</label>
        <input
          type="number"
          value={price}
          placeholder="R$ 20,00"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label for={img}>Url da image</label>
        <input
          type="text"
          value={img}
          placeholder="ex .https://www.blinkjeans.com.br/wp-content/uploads/camisa-masculina-modelo..."
          onChange={(e) => setImg(e.target.value)}
        ></input>
        <input type="submit" value="Adicionar" />
      </form>
    </>
  );
}

export default FormNewProduct;
