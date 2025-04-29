import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cart,
    totalPrice,
    totalQuantity,
    removeFromCart,
    removeItemCompletely
  } = useCart();

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_e741c6c2bb08e138ffee13378b377c89b6cd1c2b', // replace with your public key
      email: "customer@email.com", // You can dynamically ask user email if needed
      amount: totalPrice * 100, // in Kobo
      currency: 'NGN',
      callback: function(response) {
        alert(`Payment Successful! Transaction ref: ${response.reference}`);
      },
      onClose: function() {
        alert('Payment popup closed.');
      }
    });

    handler.openIframe();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price} × {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>reduce quantity</button>
                <button className='btn w-60 btn-outline-dark me-2 bg-dark text-white border border-dark d-flex gap-2' onClick={() => removeItemCompletely(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <hr />
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </>
      )}
      
      {cart.length > 0 && (
        <button
          onClick={payWithPaystack}
          className="btn w-60 btn-outline-dark me-2 bg-dark text-white border border-dark"
        >
          Pay Now
        </button>
      )}
    </div>
  );
};

export default Cart;
