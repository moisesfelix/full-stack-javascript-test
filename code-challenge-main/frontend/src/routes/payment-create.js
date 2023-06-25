import { useNavigate } from 'react-router';
import axios from 'axios';

function PaymentCreate() {
  const navigate = useNavigate();

  const submit = async (ev) => {
    ev.preventDefault();

    // Create object with new payment details from the submitted form.
    const payment = Object.fromEntries(new FormData(ev.target));

    try {
      // Make a POST request to create a new payment
      const response = await axios.post('/api/payments', payment);
      console.log(response.data);

      navigate('/'); // Redirect to the payments list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Card Number</label>
        <input type="text" name="cardNumber" />
      </div>
      <div>
        <label>Currency</label>
        <select name="currency">
          <option value=""></option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div>
        <label>Amount</label>
        <input type="text" name="amount" />
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default PaymentCreate;
