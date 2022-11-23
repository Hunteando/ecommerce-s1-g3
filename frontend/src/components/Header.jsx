import logo from '../assets/icons/logo.svg';
import search from '../assets/icons/search.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TYPES } from '../actions/cartActions';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import ModalContext from '../context/ModalContext';

export const Header = () => {
 const { user, setUser } = useContext(UserContext);
 const { setModalIsVisible } = useContext(ModalContext);
 const { state, dispatch } = useContext(CartContext);

 const { cart } = state;

 const navigate = useNavigate();

 const onHandleModal = () => {
  setModalIsVisible(true);
 };

 const logOut = () => {
  setUser(null);
  window.localStorage.removeItem('loggedAppUser');
  window.localStorage.removeItem('userProfile');

  dispatch({ type: TYPES.CLEAR_CART });
  navigate('/');
 };

 return (
  <div className='container'>
   <div className='header'>
    <div>
     <Link to='/'>
      <img className='header__logo' src={logo} alt='logotipo' />
     </Link>
    </div>
    <div className='search'>
     <input
      type='text'
      class='search__input'
      aria-label='search'
      placeholder='¿Qué deseas buscar?'
     />
     <button className='search__submit' aria-label='submit search'>
      <img className='search_logo' src={search} alt='logotipo' />
     </button>
    </div>
    {user ? (
     <div className='profile'>
      <p>Hola, {user}!</p>
      <span onClick={() => logOut()}>
       <VscAccount size={35} />
      </span>
      <div className='cart' onClick={() => navigate('/cart')}>
       <AiOutlineShoppingCart size={35} />
       <span className='badge'>
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
       </span>
      </div>
     </div>
    ) : (
     <div className='profile'>
      <button className='header__button-login' onClick={onHandleModal}>
       Login
      </button>
      <div className='cart' onClick={() => navigate('/cart')}>
       <AiOutlineShoppingCart size={35} />
       <span className='badge'>
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
       </span>
      </div>
     </div>
    )}
   </div>
   <div className='header__fondo'>
    <h3 className='header__title'>Black Friday</h3>
    <p className='header__subtitle'>
     Productos selecionados con 33% de descuento
    </p>
    <button className='header__button-new'>new</button>
   </div>
  </div>
 );
};
