import { useContext } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from '../State/DataContext';

function Product(props) {

    const addProductToCart = useContext(DataContext).addProductToCart;

    function add(){
        console.log("global add, prod");

        let copy = {...props.data};
        copy.quantity=1;

        addProductToCart(copy);
    }

    return (
        <div className="product">
            <span>ID:{props.data._id}</span>
            <img src={"/images/"+props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>total:$0.00</label>
                    <label>price: ${props.data.price}</label>
                </div>
                <div>
                    <QuantityPicker  />
                </div>
            </div>
            <div className="add-button">
                <button onClick={add} className="btn btn-sm btn-success">Add</button>
            </div>
        </div>
    );

}
export default Product;