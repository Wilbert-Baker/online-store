import "./QuantityPicker.css";
import { useState} from "react";



function QuantityPicker(props) {

    const [quantity, setQuantity] = useState(1);

    function increase() {
        const  value = quantity + 1;
        setQuantity(value);
        props.onChange(val); //execute the fn recieved from the perant (product)
    }
    function decrease() { 
        const  value = quantity - 1;
         setQuantity(value);
         props.onChanges(val);
    }    


    return(
        <div className="qt-picker">
         <button onClick = {decrease} className="btn btn-sm btn-outline-dark" disabled={quantity===1}>-</button>
         <label>{quantity}</label>
           <button onClick = {increase} className="btn btn-sm btn-outline-dark">+</button>  
         </div>
    );
}
export default QuantityPicker;