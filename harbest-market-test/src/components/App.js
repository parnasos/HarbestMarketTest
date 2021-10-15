import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import GetJSONData from "../services/GetData";
import ProductDetail from "./ProductDetail";
import ls from "../services/local-storage";
// import logo from "../images/logo.png";
import "../stylesheets/App.scss";

function App() {
  const productsLocalStorage = ls.get("products", []); //el segundo parámetro corresponde a defaultData
  const [products, setproducts] = useState(productsLocalStorage);
  const [filterName, setFilterName] = useState(ls.get("filterName", "")); //string vacío hace que nos muestre todos los productos.
  const [filterStatus, setFilterStatus] = useState(ls.get("filterStatus", ""));

  //UseEffect

  useEffect(() => {
    if (products.length === 0) {
      GetJSONData().then((productData) => {
        setproducts(productData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("products", products);
  }, [products]); //guardo en en el array siempre que cambia products

  useEffect(() => {
    ls.set("filterStatus", filterStatus);
  }, [filterStatus]);

  //Handle Function

  const handleFilter = (data) => {
    if (data.key === "Status") {
      setFilterStatus(data.value);
    }
  };

  // render
  const filteredproducts = products.filter((product) => {
    return product.Status.toLowerCase().includes(filterStatus.toLowerCase());
  });
  const renderProductDetail = (props) => {
    const routeChId = parseInt(props.match.params.productId);
    const foundProduct = products.find((product) => {
      return product.id === routeChId;
    });

    if (foundProduct !== undefined) {
      return <ProductDetail product={foundProduct} />;
    } else {
      return (
        <>
          <div className="unfinded__container">
            <p className="unfinded__text"> Damn! Product not found, sorry.</p>
            <Link className="unfinded__homepage" to="/">
              Go back to the Homepage
            </Link>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="App">
        <div className="logo__container">
          <Link className="unfinded__homepage" to="/">
            <img
              className="logo"
              src="https://harbestmarket.com/wp-content/uploads/2020/06/harbest-market-1.png"
              alt="Logo Harbest Market"
            ></img>
          </Link>
        </div>

        {/* <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} filterName={filterName} />
            <ProductList products={filteredproducts} />
          </Route>
          <Route
            exact
            path="/Product/:productId"
            render={renderProductDetail}
          />
        </Switch> */}
      </div>
    </>
  );
}

export default App;
