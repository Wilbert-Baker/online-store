import { useContext, useState } from "react";
import DataContext from "./DataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({loggedIn:true, name:"Wilbert"});
    
    function addProductToCart(prod){
        console.log("global add",prod);


        /**
         * for obj and Arrayin state variable
         * 1 = create a copy
         * 2 = modify copy
         * 3 = set the copy back
         */
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function  clearCart() {

    }
    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart

        }}>
            {props.children}
        </DataContext.Provider>        
            
        
    );
}

export default GlobalProvider;
