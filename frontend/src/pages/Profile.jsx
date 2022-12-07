import { useGetUserProfile } from '../hooks/profile/useGetUserProfile';
import { Modal } from '../components/profile/Modal';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserProfileContext from '../context/UserProfileContext';
import { Loader } from '../components/Loader';

const SECTION_STYLES = {
 display: 'flex',
 justifyContent: 'left',
 paddingLeft: '10px',
 paddingRight: '10px',
 gap: '16px',
};

export const Profile = () => {
 const { UserProfile, setUserProfile, loading } =
  useContext(UserProfileContext);

 const navigate = useNavigate();

 const {
  completeProfile,
  handleSubmit,
  openModal,
  prevValue,
  setPrevValue,
  setIsOpen,
  isOpen,
  title,
  setTitle,
  inputModal,
  seTinputModal,
  secondInputModal,
  setSecondInputModal,
 } = useGetUserProfile();

 const {
  id_user,
  userName,
  email,
  firstName,
  lastName,
  document,
  phone,
  address,
 } = UserProfile;

 const handleClick = (e) => {
  openModal(
   e,
   UserProfile,
   setPrevValue,
   seTinputModal,
   setIsOpen,
   setTitle,
   setSecondInputModal
  );
 };

 return (
  <>
   {loading ? (
    <Loader />
   ) : (
    <>
     <Modal
      id={id_user}
      setUserProfile={setUserProfile}
      UserProfile={UserProfile}
      prevValue={prevValue}
      handleSubmit={handleSubmit}
      seTinputModal={seTinputModal}
      inputModal={inputModal}
      secondInputModal={secondInputModal}
      setSecondInputModal={setSecondInputModal}
      title={title}
      open={isOpen}
      setIsOpen={setIsOpen}
      OnClose={() => setIsOpen(false)}
     />
     {completeProfile(UserProfile) ? (
      <button onClick={() => navigate('/checkout')}>seguir comprando</button>
     ) : (
      <h3>Complete su perfil para poder realizar compras</h3>
     )}
     <h1>Mis datos</h1>
     <article className='container'>
      <h2>Datos de cuenta</h2>
      <section style={SECTION_STYLES}>
       <p>Nombre de usuario:</p>
       <p>{userName}</p>
       {userName ? (
        <button name='Nombre de Usuario' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button name='Nombre de Usuario' onClick={(e) => handleClick(e)}>
         Agregar
        </button>
       )}
      </section>

      <section style={SECTION_STYLES}>
       <p>email:</p>
       <p>{email}</p>
       {email ? (
        <button name='Email' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button>Agregar</button>
       )}
      </section>
     </article>
     <article className='container'>
      <h2>Datos personales</h2>
      <section style={SECTION_STYLES}>
       <p>Nombres y apellidos</p>
       <p>{firstName}</p>
       <p>{lastName}</p>
       {firstName || lastName ? (
        <button name='Nombre y apellido' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button name='Nombre y apellido' onClick={(e) => handleClick(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>Documento</p>
       <p>{document}</p>
       {document ? (
        <button name='Documento' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button name='Documento' onClick={(e) => handleClick(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>Telefono</p>
       <p>{phone}</p>
       {phone ? (
        <button name='Teléfono' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button name='Teléfono' onClick={(e) => handleClick(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>dirección</p>
       <p>{address}</p>
       {address ? (
        <button name='Dirección' onClick={(e) => handleClick(e)}>
         Editar
        </button>
       ) : (
        <button name='Dirección' onClick={(e) => handleClick(e)}>
         Agregar
        </button>
       )}
      </section>
     </article>
    </>
   )}
  </>
 );
};
