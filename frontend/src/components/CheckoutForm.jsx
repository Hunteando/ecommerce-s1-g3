import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Loader } from './Loader';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { TYPES } from '../actions/cartActions';

const url = import.meta.env.VITE_API_URL;

const localStorageUser = window.localStorage.getItem('loggedAppUser');
const loggedUser = JSON.parse(localStorageUser);
const userId = loggedUser?.id_user;

export const CheckoutForm = () => {
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);
 const { state, dispatch, setSaleData } = useContext(CartContext);
 const { cart } = state;

 const stripe = useStripe();
 const navigate = useNavigate();
 const elements = useElements();

 const clearCart = () => {
  dispatch({ type: TYPES.CLEAR_CART });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const saleTotal = cart.reduce(
   (acc, item) => acc + item.product_price * item.quantity,
   0
  );

  const { error, paymentMethod } = await stripe.createPaymentMethod({
   type: 'card',
   card: elements.getElement(CardElement),
  });
  setError(null);
  setLoading(true);

  if (!error) {
   const { id } = paymentMethod;

   const price = 100 * saleTotal;

   try {
    const { data } = await axios.post(`${url}/api/checkout`, {
     id,
     amount: price,
    });

    if (data.message !== 'Successfull payment') {
     setError(data.message);
     elements.getElement(CardElement).clear();
     return setLoading(false);
    }

    const { data: saleId } = await axios.post(`${url}/api/sale/${userId}`, {
     sale_total_amount: saleTotal,
     products: cart,
    });

    const { data: saleData } = await axios(
     `${url}/api/sale/${userId}/${saleId}`
    );

    setSaleData(saleData);
    clearCart();
   } catch (error) {
    setError(error.message);
    return setLoading(false);
   }
  }
  navigate('/ordersummary');
  setLoading(false);
 };

 return (
  <form onSubmit={handleSubmit}>
   <CardElement />
   {error && error}
   {loading ? <Loader /> : <button disabled={!stripe}>Pagar</button>}
  </form>
 );
};
