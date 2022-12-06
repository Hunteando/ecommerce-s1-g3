import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';

export default function CartComponent() {
 const { state } = useContext(CartContext);
 const { cart } = state;

 const navigate = useNavigate();

 const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

 return (
  <div className='cart' onClick={() => navigate('/cart')}>
   <GrCart size={20} />
   {itemsInCart === 0 ? null : <span className='badge'>{itemsInCart}</span>}
  </div>
 );
}
