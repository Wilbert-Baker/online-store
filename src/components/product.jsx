import { useContext, useState} from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from '../State/DataContext';

function Product(props) {
    const[quantity, setQuantity]= useState(1);
    const addProductToCart = useContext(DataContext).addProductToCart;

    function add(){ 
        console.log("adding prod");
        
        
        let copy = {...props.data};
        copy.quantity= quantity;

        addProductToCart(copy);
    }

    function handleQuantity(val) {
        console.log("changed!", val);
        setQuantity(val);
    }

    return (
        <div className="product">
            <span>ID:{props.data._id}</span>
            <img src={"/images/"+props.data.image} alt="" />
            <h3>{props.data.title}</h3>
            <div className="price-section">
                <div className="prices">
                    <label>total: ${(props.data.price* quantity).toFixed(2)}</label>
                    <label>price: ${props.data.price.toFixed(2)}</label>
                </div>
                <div>
                    <QuantityPicker onChanges={handleQuantity} />
                </div>
            </div>
            <div className="add-button">
                <button onClick={add} className="btn btn-sm btn-success">Add</button>
            </div>
        </div>
    );

}
export default Product;