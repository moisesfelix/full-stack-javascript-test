import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const PaymentsList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      // Defina o cabeçalho "Authorization" com o token JWT
      const token = localStorage.getItem("token")
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log({
        token
      })
      const response = await axios.get('http://localhost:3001/api/payments', { headers });
      console.log(response.data.payments); // Verifique o valor de response.data.payments no console
      setPayments(response.data.payments);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/create">New Payment</Link>
      </div>
      <h2>Payments List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Description</th>
            {/* ... Render other payment fields */}
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.amount}</td>
              <td>{payment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsList;
