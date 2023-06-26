import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './styles/PaymentsList.css';

const PaymentsList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      // Defina o cabeçalho "Authorization" com o token JWT
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get('http://localhost:3001/api/payments', { headers });
      setPayments(response.data.payments);
    } catch (error) {
      console.error(error);
    }
  };

  const formatCurrency = (amount, currency) => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency });
    return formatter.format(amount);
  };

  return (
    <div className="payments-list-container">
      <h2 className="payments-list-title">Payments List</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{formatCurrency(payment.amount, payment.currency)}</td>
              <td>{payment.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="new-payment-container">
        <Link to="/create" className="new-payment-button">+</Link>
      </div>
    </div>
  );
};

export default PaymentsList;
