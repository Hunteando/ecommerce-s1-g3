import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { formateado } from '../helpers/formateado';

export function Cart() {
 const { dispatch, state } = useContext(CartContext);
 const { cart } = state;
 const navigate = useNavigate();

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

 return (
  <>
   <div>
    <h3>Carrito</h3>
   </div>
   <article className='box'>
    {cart.length > 0 && (
     <button
      /*   onClick={() => {
    clearCart();
    swal('Carrito vaciado', '', 'success');
   }} */
      onClick={() => clearCart()}>
      Limpiar Carrito
     </button>
    )}

    {cart.length > 0
     ? cart.map((product) => (
        <div className='cardCart' key={product.id_product}>
         <div>
          <img className='cardCartImg' src={product.product_image_url} />
         </div>
         <div className='cart-nameAndPrice'>
         <div>
         <h2 className='cart-title'>{product.product_name}</h2></div>
         <div className='cardCartPrice'>
          <p className='cart-price'>{formateado(product.product_price)}</p>
         </div>
         </div>
         <div className='cardCartMoreOrLess'>
          <button
           className='buttonMoreOrLess'
           onClick={() => delFromCart(product.id_product)}>
           -
          </button>
          <p>{product.quantity}</p>
          <button
           className='buttonMoreOrLess'
           onClick={() => addToCart(product.id_product)}>
           +
          </button>
         </div>
         <div>
         <button className='cart-button-eliminarProducto'
          onClick={() => {
           delFromCart(product.id_product, true);
           swal('Producto eliminado del carrito', '', 'success');
          }}>
         </button>
         </div>
        </div>
       ))
     : 'tu carrito esta vacio!'}
    <h3 className='subTotal'>
     Sub-Total: $
     {cart.reduce((acc, item) => acc + item.product_price * item.quantity, 0)}
     .00
    </h3>
    {cart.length > 0 && (
     <button
      onClick={() => {
       navigate('/checkout');
      }}>
      Continuar
     </button>
    )}
   </article>
  </>
 );
}
