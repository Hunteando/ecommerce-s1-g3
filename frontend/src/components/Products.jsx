import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
import swal from 'sweetalert';
// https://sweetalert.js.org - npm install sweetalert --save

export const Products = () => {
 const { dispatch, state } = useContext(CartContext);
 const { products } = state;

 const addToCart = (id) => {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
 };

 const formateado = (number) => {
  return number.toLocaleString('ES-es', {
   style: 'currency',
   currency: 'USD',
  });
 };

 return (
  <div className='container__products'>
   {products
    ? products.map((product) => {
       return (
        <div className='card' key={product.id}>
         <div className='insideCard'>
          <img src={product.img} />
          <p className='card__title'>{product.name}</p>
          <p className='card__price'>{formateado(product.price)}</p>
          <button className='card__button'>Ver producto</button>
          <button
           className='card__button'
           onClick={() => {
            addToCart(product.id);
            swal("Producto agregado al carrito","","success")}}>
           Agregar al carrito
          </button>
         </div>
        </div>
       );
      })
    : null}
  </div>
 );
};
