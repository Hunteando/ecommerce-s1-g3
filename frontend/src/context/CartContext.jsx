import { createContext, useState, useEffect, useReducer } from 'react';
import { cartReducer, cartInitialState } from '../reducers/cartReducer';
const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
 const getCart = window.localStorage.getItem('cart');
 const cartStorage = JSON.parse(getCart);
 const [state, dispatch] = useReducer(
  cartReducer,
  cartStorage ? cartStorage : cartInitialState
 );
 const [saleData, setSaleData] = useState(null);

 useEffect(() => {
  window.localStorage.setItem('cart', JSON.stringify(state));
 }, [state]);

 const contextData = { dispatch, state, saleData, setSaleData };

 return (
  <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
 );
};
