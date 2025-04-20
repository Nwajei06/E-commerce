import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { useCart } from '../CartContext'; // ✅ Make sure this path is correct based on your file structure

function Navbar() {
  const { cart } = useCart(); // ✅ Accessing cart from context

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className='btn btn-outline-dark'>
                <i className='fa fa-sign-in me-2'></i>Login
              </NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink to="/register" className='btn btn-outline-dark'>
                <i className='fa fa-user-plus me-2'></i>Register
              </NavLink>&nbsp;&nbsp;
              <NavLink to="/cart" className='btn btn-outline-dark'>
                <i className='fa fa-shopping-cart me-2'></i>Cart ({cart.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
