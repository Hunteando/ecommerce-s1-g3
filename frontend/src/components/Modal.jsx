import { useContext } from 'react';
import cerrarBTN from '../assets/icons/cerrar.svg';
import ModalContext from '../context/ModalContext';
import UserContext from '../context/UserContext';
import { useLoginForm } from '../hooks/login/useLoginForm';
import { Loader } from './Loader';
import { Input } from './login/Input';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ noLogged }) => {
 const { setModalIsVisible } = useContext(ModalContext);
 const { setUser } = useContext(UserContext);

 const navigate = useNavigate();

 const {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  responseMessage,
 } = useLoginForm(setModalIsVisible, setUser);

 const onHandle = () => {
  setModalIsVisible(false);

  if (window.location.pathname === '/checkout') {
   setModalIsVisible(false);
   return navigate('/cart');
  }
 };

 return (
  <div className='modal'>
   <div className='cerrar-modal'>
    <img src={cerrarBTN} alt='cerrar modal' onClick={onHandle} />
   </div>
   <form onSubmit={handleSubmit} className='modal__container'>
    <h3 className='login__title'>Iniciar Sesión</h3>
    {noLogged && <h4>Necesitas iniciar sesion para proceder con la compra</h4>}
    <Input
     name='email'
     className='input__login'
     type='text'
     placeholder='Escriba su correo electrónico'
     autoComplete='on'
     onChange={handleChange}
     onBlur={handleBlur}
     value={form.email}
     errors={errors}
    />
    <Input
     name='password'
     className='input__login'
     type='password'
     placeholder='Escriba su contraseña'
     autoComplete='on'
     onChange={handleChange}
     onBlur={handleBlur}
     value={form.password}
     errors={errors}
    />
    {responseMessage ? responseMessage : ''}
    {!loading ? (
     <input type='submit' className='button__register' value='Entrar' />
    ) : (
     <Loader />
    )}

    <p>
     <strong>¿No tienes una cuenta?</strong>{' '}
     <p onClick={() => navigate('/register')}>Regístrate</p>
    </p>
   </form>
  </div>
 );
};
