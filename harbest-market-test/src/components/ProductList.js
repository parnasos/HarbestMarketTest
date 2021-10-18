import React from "react";
import Product_resume from "./Product_resume";

const ProductList = (props) => {
  const nameList = props.products;
  nameList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  const productElements = props.products.map((product) => {
    return (
      <li key={product.id}>
        <Product_resume product={product} />
      </li>
    );
  });
  if (props.products.length === 0) {
    return (
      <>
        <div className="warning__container">
          <p className="warning__text"> Lo sentimos, el producto no está disponible.</p>
        </div>
      </>
    );
  } else {
    return (
      <section>
        <ul className="Product__list">{productElements}</ul>
      </section>
    );
  }
};

export default ProductList;
