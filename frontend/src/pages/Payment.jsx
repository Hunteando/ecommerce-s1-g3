import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../components/CheckoutForm';

const stripePromise = loadStripe(
 'pk_test_51M86UFCi4DV8MvZ57ELDT0VON2UTLOmv7Ne6PE0vM8HGkuXNjcRpLOtQAw9dBLnX42qY0MdUrS5eGx1TW9hObctB00H8u1vFy9'
);

export const Payment = () => {
 return (
  <Elements stripe={stripePromise}>
   <CheckoutForm />
  </Elements>
 );
};
