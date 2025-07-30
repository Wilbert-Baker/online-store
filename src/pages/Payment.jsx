import "./Payment.css";

function Payment() {
    return (
        
        <div className="payment page">
            <h1>Payment information</h1>

  
            <div id="credit card" className="tabcontent">

                <h3>pay by credit card</h3>

                <p>card number</p>
                <input type="text" name="card" placeholder="Enter Card Number" />

                <p>Expiration Date</p>
                <input type="text" name="month" placeholder="Month, day, year" />

                <p>Cvv, Cvc</p>
                <input type="text" name="Cvc, Cvv" />

                <p>Card Holder Name</p>
                <input type="text" name="name" placeholder="Enter PlaceHolder Name" />

                
                 <button className="btn btn-primary">submit</button>
                <button className="btn btn-warning">reset</button>


        </div>


            <div id="Internet Banking" className="tabContent">

                <h3>Pay by internet Banking</h3>

                <p>Account id</p>
                <input type="text" name="Account Mumber" />

                <button className="btn btn-primary">submit</button>
                <button className="btn btn-warning">reset</button>


            </div>


            <div id="Paypal, Cash App" className="tab Content">
                <h3>Pay by Paypal, Cash app</h3>

                <p>userid</p>
                <input type="text" name="userid" />


                <p>atm pin, password</p>
                <input type="password" name="passwd" />

                <button className="btn btn-primary">submit</button>
                <button className="btn btn-warning">Reset</button>

                
                


            </div>

            <div id="Debit card" className="tab Content">
                <h3>Pay by Debit Card</h3>
                <p>CardHolder Name</p>
                <input type="text" name="name" placeholder="Enter Card Holder Name" />

                <p>Experatiom Date</p>
                <input type="text" name="Date" placeholder="month, day, year" />

                <p>"Cvv, Cvc</p>
                <input type="text" name="Cvv, Cvc" />

                <button className="btn btn-primary">submit</button>
                <button className="btn btn-warning"  type="reset">Reset</button>

               } />



            </div>




        </div>






    );
}
export default Payment;