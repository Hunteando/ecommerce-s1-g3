import Stripe from 'stripe';
import { STRIPE } from '../config/config.js';

const stripe = new Stripe(STRIPE);

export const checkout = async (req, res) => {
 const { id, amount } = req.body;

 try {
  const payment = await stripe.paymentIntents.create({
   amount: amount,
   currency: 'USD',
   description: 'lamps',
   payment_method: id,
   confirm: true,
  });

  return res.send({ message: 'Successfull payment' });
 } catch (error) {
  console.log(error);

  return res.send({ message: error.raw.message });
 }
};
