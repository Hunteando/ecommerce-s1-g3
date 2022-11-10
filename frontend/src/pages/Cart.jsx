import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
CartContext;
export function Cart() {
 const { dispatch, cart } = useContext(CartContext);

 const addToCart = (id) => {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
 };

 const delFromCart = (id, all = false) => {
  if (all) {
   dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  } else {
   dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  }
 };

 const clearCart = () => {
  dispatch({ type: TYPES.CLEAR_CART });
 };

 const formateado = (number) => {
  return number.toLocaleString('ES-es', {
   style: 'currency',
   currency: 'USD',
  });
 };
 return (
  <>
   <h3>Carrito</h3>
   <h2>
    Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00
   </h2>
   <article className='box'>
    <button onClick={clearCart}>Limpiar Carrito</button>
    {cart.map((product) => (
     <div className='card' key={product.id}>
      <div>
       <img src={product.img} />
       <p className='card__title'>{product.name}</p>
       <p className='card__price'>{formateado(product.price)}</p>
       <p>cantidad: {product.quantity}</p>
      </div>
     </div>
    ))}
   </article>
  </>
 );
}