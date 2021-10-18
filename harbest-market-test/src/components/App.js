import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
//import GetJSONData from "../services/GetData";
import GetData from "../services/GetData.json";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Filter from "./Filter";
import LsToExport from "../services/local-storage";
import "../stylesheets/App.scss";

function App() {
  const productsLocalStorage = LsToExport.get("products", []); //el segundo parámetro corresponde a defaultData
  const [products, setproducts] = useState(productsLocalStorage);
  const [filterName, setFilterName] = useState(
    LsToExport.get("filterName", "")
  ); //string vacío hace que nos muestre todos los productos.
  const [filterStatus, setFilterStatus] = useState(
    LsToExport.get("filterStatus", "")
  );

  //console.log(productsLocalStorage);
  useEffect(() => {
    if (products.length === 0) {
      setproducts(GetData);
    }
  }, []);

  useEffect(() => {
    LsToExport.set("products", products);
  }, [products]); //guardo en en el array siempre que cambia products

  useEffect(() => {
    LsToExport.set("filterStatus", filterStatus);
  }, [filterStatus]);

  useEffect(() => {
    LsToExport.set("filterName", filterName);
  }, [filterName]);

  //Handle Function

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "status") {
      setFilterStatus(data.value);
    }
  };

  // render
  const filteredproducts = products
    .filter((product) => {
      return product.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((product) => {
      return product.status.toLowerCase().includes(filterStatus.toLowerCase());
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
            <p className="unfinded__text">
              {" "}
              Lo sentimos, el producto no ha sido encontrado.
            </p>
            <Link className="unfinded__homepage" to="/">
              Inicio
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

        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} filterName={filterName} />
            <ProductList products={filteredproducts} />
          </Route>
          <Route
            exact
            path="/Product/:productId"
            render={renderProductDetail}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
