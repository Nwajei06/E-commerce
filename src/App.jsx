import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import {CartProvider} from './CartContext';


import './App.css';
import Contact from "./component/Contact";

function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:source/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
