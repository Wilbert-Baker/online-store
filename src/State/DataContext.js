import {createContext } from 'react';

/**
 *  * Context is an interface
 * (blueprint / promise / idea )
 * it does not contain real implementation
 */
const DataContext = createContext({
    cart: [],
    user:{},
    addProductToCart: () => {},
    clearCart: () => {},
});

export default DataContext;
    

