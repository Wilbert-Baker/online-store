import"./Quantity Picker.css";
import { usestate} from "react";



function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    function increase() {
        const  value = quantity + 1;
        setQuantity(val);
    }
    function decrease() { 
        const  value = quantity - 1;
         setQuantity(val);



    }    
    }
    return(
        <div className="qt-picker">
         <button onClick = {decrease} classname="btn btn-sm btn-outline-dark" disabled={quantity===1}>-</button>
         
            <label>0</label>
           <button onClick = {increase} classname="btn btn-sm btn-outline-dark">+</button>  
         </div>
    );
} 
export default QuantityPicker;