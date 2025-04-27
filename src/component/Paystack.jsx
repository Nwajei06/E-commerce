import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';

function PaystackPayment() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const publicKey = "pk_live_e741c6c2bb08e138ffee13378b377c89b6cd1c2b";  

  useEffect(() => {
    setIsFormValid(!!(email && name && amount > 0)); 
  }, [email, name, amount]);

  // Handle input changes for email, name, and amount
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  // Paystack component properties
  const componentProps = {
    email: email,
    amount: amount * 100,  
    metadata: { name },
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      alert('Payment Successful!');
      
    },
    onClose: () => {
      alert('Payment process was closed.');
    },
    onError: (error) => {
      console.error("Payment Error: ", error);
      alert('An error occurred during payment. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '450px' }}>
        <h2 className="text-center mb-4">Paystack Payment</h2>
        <form>
          {/* Full Name Input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          {/* Amount Input */}
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount (₦)</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </div>

          {/* Paystack Button */}
          <PaystackButton
            {...componentProps}
            className="btn btn-primary w-100"
            disabled={!isFormValid}  // Disable button if form is invalid
          />
        </form>
      </div>
    </div>
  );
}

export default PaystackPayment;
