import "./catalog.css";
import Product from "../components/Product";
import DataService from "../Service/DataSevices.js";
import { useState, useEffect } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = DataService();
    let prods = service.getProducts();
    setProducts(prods);
  }

  console.log(products);

  return (
    <div className="main-content">
      <h3>here are the {products.length} new products for you!</h3>
      <br />
      <div className="catalog-item">
        {products.map((item) => (
          <Product key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
