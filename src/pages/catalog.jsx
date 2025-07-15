import "./catalog.css";
import Product from "../components/Product";
import DataService from "../Service/DataSevice.js";
import { useState, useEffect } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadCatalog();
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    setProducts(prods);
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className='main-content page'>
      <h3>Here are the {products.length} new products for you!</h3>
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
