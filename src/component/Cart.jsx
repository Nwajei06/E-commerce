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
                <button className='' onClick={() => removeFromCart(item.id)}>Reduce Quantity</button>
                <button className='btn w-60 btn-outline-dark me-2 bg-dark text-white border border-dark d-flex gap-2' onClick={() => removeItemCompletely(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <hr />
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>

          {/* Pass totalPrice to Paystack page via Link state */}
          <Link 
            to="/paystack" 
            state={{ totalPrice }} 
            className='btn w-60 btn-outline-dark me-2 bg-dark text-white border border-dark'
          >
            Pay Now
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
