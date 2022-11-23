import axios from 'axios';
import { useContext } from 'react';
import { TYPES } from '../../actions/cartActions';
import CartContext from '../../context/CartContext';

const url = import.meta.env.VITE_API_URL;

export const useGetProducts = () => {
 const { dispatch, state } = useContext(CartContext);

 const getAllProducts = async () => {
  try {
   const request = await axios(`${url}/api/products`);
   const response = request.data;
   const getProducts = () => {
    dispatch({ type: TYPES.GET_PRODUCTS, payload: response });
   };
   getProducts();
  } catch (error) {
   console.error(error);
  }
 };

 return { getAllProducts };
};
