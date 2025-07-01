import "./About.css";
import {useState} from "react";

function About() {

    const[visibleEmail, setVisibleEmail] = useState(false);

    function showEmail() {
        setVisibleEmail(true);
    }
    return(
        <div className="about">
        <h3>About Us</h3>
        <div className="Box">
            <h2>Wilbert Baker</h2>
            { visibleEmail ? <h5>wilbertbaker@sdgku.edu</h5> : <label>Click the button to see the email</label>}
            <br/>
            {
                !visibleEmail
                ? <button  onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                :null
            }
        </div>

        </div>
    );
}

export default About;