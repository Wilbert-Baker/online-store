import "./Product.css";



function Product() {
    return (
        <div className="product">
            <span>ID:0000</span>
         <img src="https://piscum.photos/250/200" alt=""/> 
         <h3>This is a product!</h3>
         <div className="price-section">
            <div className="prices">
                <span>$total</span>
                <span>$price</span>
            </div>
             <button className="btn btn-sm btn-success">add</button>
             </div>
            </div>
    );

}                
export default Product;