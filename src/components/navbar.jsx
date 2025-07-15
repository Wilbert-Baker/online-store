import { useContext } from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import DataContext from '../State/DataContext';

function Navbar() {

  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;

  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">    
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Online-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Catalog</Link>
            </li>
            <li className="nav-item"> 
                <Link className="nav-link"to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <span className='btn btn-outline-sucess btn-user'>
              {user.name}
            </span>
      
            <div className='d-flex gap-3'>
              <Link className="btn btn-outline-success" to="/cart">Cart</Link>
              <span class="badge text-bg-warning">{cart.length} View Cart</span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


