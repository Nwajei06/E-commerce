import React, { useState } from 'react';

function PaystackPayment() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!email || !name || !amount) {
      alert("Please fill all fields");
      return;
    }

    const paystack = window.PaystackPop && window.PaystackPop.setup({
      key: 'pk_live_e741c6c2bb08e138ffee13378b377c89b6cd1c2b', // Replace with your public key
      email,
      amount: amount * 100, // kobo
      currency: 'NGN',
      metadata: {
        custom_fields: [
          {
            display_name: "Name",
            variable_name: "name",
            value: name,
          }
        ]
      },
      callback: function (response) {
        alert(`Payment successful. Transaction ref: ${response.reference}`);
      },
      onClose: function () {
        alert('Payment window closed.');
      }
    });

    paystack.openIframe();
  };

  return (
    <div className="container mt-4">
      <h2>Pay with Paystack</h2>
      <form onSubmit={payWithPaystack}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Amount (₦)</label>
          <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
}

export default PaystackPayment;
