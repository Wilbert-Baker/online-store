import { Link} from 'react-router-dom';
import "./Login.css";

function Login() {
    return (
        <div className="page login">

            <h1>Welcome!</h1>

            <div className="form">
                <h2 className="mb-4 text-center">Login</h2>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <Link to="/home" type="button" className="btn btn-primary">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Login;