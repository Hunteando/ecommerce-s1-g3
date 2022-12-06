import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { formateado } from '../helpers/formateado';

export const loader = ({ params }) => {
 console.log(params);
};

export const Products = () => {
 const navigate = useNavigate();
 const { dispatch, state } = useContext(CartContext);
 const { products } = state;

 const addToCart = (id) => {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id });
 };

 return (
  <div className='container__products'>
   {products
    ? products.map((product) => {
       return (
        <div className='card' key={product.id_product}>
         <img src={product.product_image_url} referrerPolicy='no-referrer' />
         <div className='insideCard'>
          <p className='card__title'>{product.product_name}</p>
          <p className='card__price'>{formateado(product.product_price)}</p>
          <p
           className='card__button'
           onClick={() => navigate(`/product/${product.id_product}`)}>
           Ver producto
          </p>
          {/*       <button
           className='card__button'
           onClick={() => {
            addToCart(product.id_product);
            swal('Producto agregado al carrito', '', 'success');
           }}>
           Agregar al carrito
          </button> */}
         </div>
        </div>
       );
      })
    : null}
  </div>
 );
};
