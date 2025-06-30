import "./catalog.css";
import Product from "../components/product";

function catalog() {
    return(
        <div className='main-content'>
            <h1>Here is our Catalog</h1>
            <Product/>
            <Product/>
            <Product/>
            <Product/>     
        </div>

    );
}

export default catalog;
