import { useContext, useEffect } from 'react';
import { Modal } from '../components/Modal.jsx';
import UserContext from '../context/UserContext.jsx';
import { completeProfile } from '../hooks/profile/helpers.js';
import { useNavigate } from 'react-router-dom';
import { useGetUserProfile } from '../hooks/profile/useGetUserProfile.js';
import CartContext from '../context/CartContext.jsx';

const SECTION_STYLES = {
 display: 'flex',
 justifyContent: 'space-between',
 paddingLeft: '10px',
 paddingRight: '10px',
};

export const Checkout = () => {
 const { user } = useContext(UserContext);
 const { state } = useContext(CartContext);
 const { cart } = state;

 const navigate = useNavigate();

 useGetUserProfile();

 const mylocal = window.localStorage.getItem('userProfile');
 const profile = JSON.parse(mylocal);

 return (
  <>
   {!user ? (
    <Modal noLogged={true} />
   ) : completeProfile(profile) ? (
    <>
     <h1>Checkout</h1>
     <hr />
     <h3>Dirección de entrega</h3>
     <section style={SECTION_STYLES}>
      <p>Dirección</p>
      <p>{profile.address}</p>
     </section>
     <section style={SECTION_STYLES}>
      <p>Nombre del cliente</p>
      <p>{`${profile.firstName} ${profile.lastName}`}</p>
     </section>
     <section style={SECTION_STYLES}>
      <p>Teléfono</p>
      <p>{profile.phone}</p>
     </section>
     <hr />
     {cart.length > 1 ? <h3>Productos</h3> : <h3>Producto</h3>}
     {cart.map((el, index) => {
      return (
       <div key={index}>
        <section style={SECTION_STYLES}>
         <img
          className='cardCartImg'
          src={el.product_image_url}
          alt={el.product_name}
         />
        </section>
        <section style={SECTION_STYLES}>
         <p>Nombre del producto</p>
         <p>{el.product_name}</p>
        </section>
        <section style={SECTION_STYLES}>
         <p>Descripción del producto</p>
         <p>{el.product_description}</p>
        </section>
        <section style={SECTION_STYLES}>
         <p>Cantidad</p>
         <p>{el.quantity}</p>
        </section>
        <section style={SECTION_STYLES}>
         <p>Precio</p>
         <p>${el.product_price}.00</p>
        </section>
       </div>
      );
     })}

     <hr />
     <section style={SECTION_STYLES}>
      <h3>costo de envio</h3>
      <p>$0.00</p>
     </section>
     <hr />
     <section style={SECTION_STYLES}>
      <h3>total a pagar</h3>
      <p>
       {`$ ${cart.reduce(
        (acc, item) => acc + item.product_price * item.quantity,
        0
       )}.00`}
      </p>
     </section>
    </>
   ) : (
    <>
     <h2>Completa tu perfil para continuar con la compra</h2>
     <button onClick={() => navigate('/profile')}>ir a tu perfil</button>
    </>
   )}
  </>
 );
};
