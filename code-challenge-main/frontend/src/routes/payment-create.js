import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

//import './PaymentCreate.css';

function PaymentCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    currency: '',
    amount: '',
  });

  const [formErrors, setFormErrors] = useState({
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
      // Defina o cabeçalho "Authorization" com o token JWT
      const token = localStorage.getItem("token")
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const payment = formData
      const response = await axios.post('/api/payments', payment, { headers });
      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="payment-create-form" onSubmit={submit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </div>
      <div>
        <label>Card Number</label>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleCardNumberChange} />
        {formErrors.cardNumber && <span className="error">{formErrors.cardNumber}</span>}
      </div>
      <div>
        <label>Currency</label>
        <select name="currency" value={formData.currency} onChange={handleChange}>
          <option value=""></option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
        {formErrors.currency && <span className="error">{formErrors.currency}</span>}
      </div>
      <div>
        <label>Amount</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} />
        {formErrors.amount && <span className="error">{formErrors.amount}</span>}
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default PaymentCreate;
