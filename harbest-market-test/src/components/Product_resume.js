import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product_resume = (props) => {
  return (
    <Link to={`/product/${props.product.id}`}>
      <article className="product__card">
        <img
          className="card__img"
          src={props.product.image}
          alt={`Foto de ${props.product.name}`}
          title={`Foto de ${props.product.name}`}
        />
        <h4 className="card__title">Nombre: {props.product.name}</h4>
        <section className="card__description">
          <h5 className="card__description--2">
            {" "}
            Disponibilidad: {props.product.status}
          </h5>
          <h5 className="card__description--2">
            {" "}
            Precio: {props.product.price}
          </h5>
        </section>
      </article>
    </Link>
  );
};
Product_resume.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
  }),
};
export default Product_resume;
