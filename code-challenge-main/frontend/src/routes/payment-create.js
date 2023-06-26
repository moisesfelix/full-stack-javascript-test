import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './styles/PaymentCreate.css';

function PaymentCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: '',
    cardNumber: '',
    currency: '',
    amount: '',
  });

  const [formErrors, setFormErrors] = React.useState({
    name: '',
    cardNumber: '',
    currency: '',
    amount: '',
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.cardNumber) {
      errors.cardNumber = 'Card Number is required';
      isValid = false;
    }

    if (!formData.currency) {
      errors.currency = 'Currency is required';
      isValid = false;
    }

    if (formData.amount === '' || isNaN(formData.amount)) {
      errors.amount = 'Valid amount is required';
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\s/g, '');
    let formattedValue = '';

    for (let i = 0; i < cleanedValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += cleanedValue[i];
    }

    return formattedValue;
  };

  const handleCardNumberChange = (ev) => {
    const formattedValue = formatCardNumber(ev.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      cardNumber: formattedValue,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      cardNumber: '',
    }));
  };

  const submit = async (ev) => {
    ev.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const payment = formData;
      const response = await axios.post('/api/payments', payment, { headers });
      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="payment-create-container">
      <h2 className="payment-create-title">Create Payment</h2>
      <form className="payment-create-form" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleCardNumberChange} />
          {formErrors.cardNumber && <span className="error">{formErrors.cardNumber}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select id="currency" name="currency" value={formData.currency} onChange={handleChange}>
            <option value=""></option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
          {formErrors.currency && <span className="error">{formErrors.currency}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} />
          {formErrors.amount && <span className="error">{formErrors.amount}</span>}
        </div>
        <div className="form-buttons">
          <button className="button-cancel" onClick={() => navigate('/')}>Cancel</button>
          <button type="submit" className="button-create">Create</button>
        </div>
      </form>
    </div>
  );
}

export default PaymentCreate;
