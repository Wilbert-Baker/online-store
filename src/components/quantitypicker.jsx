import"./Quantity Picker.css";
import { useState} from "react";



function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    function increase() {
        const  value = quantity + 1;
        setQuantity(value);
    }
    function decrease() { 
        const  value = quantity - 1;
         setQuantity(value);
    }    


    return(
        <div className="qt-picker">
         <button onClick = {decrease} className="btn btn-sm btn-outline-dark" disabled={quantity===1}>-</button>
         
            <label>0</label>
           <button onClick = {increase} className="btn btn-sm btn-outline-dark">+</button>  
         </div>
    );
}
export default QuantityPicker;