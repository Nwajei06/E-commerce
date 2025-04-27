import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { cart } = useCart();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">LA COLLECTION</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleMenu} 
        aria-controls="navbarNav" 
        aria-expanded={showMenu ? "true" : "false"} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div 
        className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} 
        id="navbarNav"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-dark me-2">Login</Link>
          <Link to="/signup" className="btn btn-outline-dark me-2">SignUp</Link>
          <Link to="/cart" className="btn btn-dark">
            <i className="bi bi-cart-fill"></i> Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
