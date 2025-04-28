import React from 'react';
import { PaystackButton } from 'react-paystack';
import { useLocation, useNavigate } from 'react-router-dom';

const PaystackPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get totalPrice from state
  const totalPrice = location.state?.totalPrice || 0;

  const publicKey = "pk_live_e741c6c2bb08e138ffee13378b377c89b6cd1c2b";

  const amount = totalPrice * 100; // Paystack expects amount in Kobo

  const email = "customer@example.com"; // You can ask user for email or use a fixed one

  const componentProps = {
    email,
    amount,
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+2348012345678", // optional extra data
        }
      ]
    },
    text: "Pay Now",
    onSuccess: (reference) => {
      alert('Payment Successful! Reference: ' + reference.reference);
      console.log('Payment success', reference);
      navigate('/'); // Redirect to homepage or order confirmation page
    },
    onClose: () => {
      alert('Payment closed. You did not complete the payment.');
    },
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <h2 className="text-center mb-4">Checkout</h2>
        <p className="text-center mb-4">Total Amount: ₦{totalPrice.toFixed(2)}</p>

        {totalPrice > 0 ? (
          <PaystackButton {...componentProps} className="btn btn-primary w-100" />
        ) : (
          <p className="text-center">No items to pay for.</p>
        )}
      </div>
    </div>
  );
};

export default PaystackPayment;
