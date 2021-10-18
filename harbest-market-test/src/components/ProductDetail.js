import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import PropTypes from "prop-types";

const ProductDetail = (props) => {
  //   const setIcon = () => {
  //     if (props.user.status === "Dead") {
  //       return "fas fa-dizzy";
  //     } else if (props.user.status === "Alive") {
  //       return "fas fa-smile-wink";
  //     } else {
  //       return "fas fa-question-circle";
  //     }
  //   };
  return (
    <div className="product__container">
      <article className="product__detail">
        <img
          className="detail__img"
          src={props.product.image}
          alt={`Foto de ${props.product.name}`}
          title={`Foto de ${props.product.name}`}
        />

        <section className="card__description">
          <h4 className="card__titleD">Nombre: {props.product.name}</h4>
          <ul className="card__details">
            <li className="card__details--item">
              Precio: {props.product.price}
            </li>
            <li className="card__details--item ">
              Disponibilidad: {props.product.status}
              {/* <i class={`${setIcon()}`}></i> */}
            </li>
            <li className="card__details--item">
              Detalles: {props.product.description}
            </li>
          </ul>
        </section>
      </article>
      <Link className="backToHomepage" to="/">
        Inicio
      </Link>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
};
export default ProductDetail;
