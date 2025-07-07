import "./Product.css";
import QuantityPicker from "./Quantitypicker";

function Product(props) {

    return (
        <div className="product">
            <span>ID:{props.data._id}</span>
            <img src={"./images/"+ptops.data.images} alt="" />
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>total:$0.00</label>
                    <label>price: ${props.data.price}</label>
                </div>
                <div>
                    <QuantityPicker />
                </div>
                <button className="btn btn-sm btn-success">add</button>
            </div>
        </div>
    );

}
export default Product;