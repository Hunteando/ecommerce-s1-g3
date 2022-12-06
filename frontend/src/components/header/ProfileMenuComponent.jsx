import { useContext } from 'react';
import UserContext from '../../context/UserContext';
//import { VscAccount } from 'react-icons/vsc';
import { FaRegUser } from 'react-icons/fa';

import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartComponent from './CartComponent';
import ModalContext from '../../context/ModalContext';
import { TYPES } from '../../actions/cartActions';

export default function ProfileMenuComponent() {
 const { dispatch } = useContext(CartContext);
 const { user, setUser } = useContext(UserContext);
 const { setModalIsVisible } = useContext(ModalContext);

 const navigate = useNavigate();

 const logOut = () => {
  navigate('/');
  setUser(null);
  window.localStorage.removeItem('loggedAppUser');
  window.localStorage.removeItem('userProfile');

  dispatch({ TYPES: TYPES.CLEAR_CART });
 };

 const onHandleModal = () => {
  setModalIsVisible(true);
 };

 return (
  <div className='profile'>
   <CartComponent />

   {user ? (
    <div className='dropdown'>
     <div className='centerProfile'>
      <p>{user}</p>
      <span>
       <FaRegUser size={20} />
      </span>
     </div>
     <div className='dropdown-content'>
      <p onClick={() => navigate('/profile')}>Mi perfil</p>
      <p onClick={() => navigate('/mypurchases')}>Compras</p>
      <p onClick={() => logOut()}>Salir</p>
     </div>
    </div>
   ) : (
    <>
     <p
      className='SignIn'
      onClick={() => {
       navigate('/register');
      }}>
      Regístrate
     </p>
     <button className='header__button-login' onClick={onHandleModal}>
      Iniciar sesión
     </button>
    </>
   )}
  </div>
 );
}
