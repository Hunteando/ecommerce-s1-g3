import { useGetUserProfile } from '../hooks/profile/useGetUserProfile';
import { Modal } from '../components/profile/Modal';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserProfileContext from '../context/UserProfileContext';

const SECTION_STYLES = {
 display: 'flex',
 justifyContent: 'left',
 paddingLeft: '10px',
 paddingRight: '10px',
 gap: '16px',
};

export const Profile = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [title, setTitle] = useState('');
 const [inputModal, seTinputModal] = useState('');
 const [secondInputModal, setSecondInputModal] = useState('');
 const [prevValue, setPrevValue] = useState(false);

 const { UserProfile, loading } = useContext(UserProfileContext);

 const navigate = useNavigate();

 const { completeProfile, handleInputValue, handleSubmit } =
  useGetUserProfile(setIsOpen);

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

 const handlePrevValue = (name, value) => {
  if (name === 'Nombre y apellido') {
   return setPrevValue(
    handleInputValue(name, UserProfile).firstName ||
     handleInputValue(name, UserProfile).lastName
     ? true
     : false
   );
  }

  if (name === 'Documento') {
   return setPrevValue(
    handleInputValue(name, UserProfile).document ||
     handleInputValue(name, UserProfile).typeOfDocument
     ? true
     : false
   );
  }

  return setPrevValue(handleInputValue(name, UserProfile) ? true : false);
 };

 const openModal = (e) => {
  const { name } = e.target;

  handlePrevValue(name);

  if (name === 'Nombre y apellido') {
   seTinputModal(handleInputValue(name, UserProfile).firstName);
   setSecondInputModal(handleInputValue(name, UserProfile).lastName);
   setIsOpen(true);
   return setTitle(name);
  }

  if (name === 'Documento') {
   seTinputModal(handleInputValue(name, UserProfile).typeOfDocument);
   setSecondInputModal(handleInputValue(name, UserProfile).document);
   setIsOpen(true);
   return setTitle(name);
  }
  seTinputModal(handleInputValue(name, UserProfile));
  setIsOpen(true);
  setTitle(name);
 };

 return (
  <>
   {loading ? (
    <h1>cargando...</h1>
   ) : (
    <>
     <Modal
      id={id_user}
      prevValue={prevValue}
      handleSubmit={handleSubmit}
      seTinputModal={seTinputModal}
      inputModal={inputModal}
      secondInputModal={secondInputModal}
      setSecondInputModal={setSecondInputModal}
      title={title}
      open={isOpen}
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
        <button name='Nombre de Usuario' onClick={(e) => openModal(e)}>
         Editar
        </button>
       ) : (
        <button name='Nombre de Usuario' onClick={(e) => openModal(e)}>
         Agregar
        </button>
       )}
      </section>

      <section style={SECTION_STYLES}>
       <p>email:</p>
       <p>{email}</p>
       {email ? (
        <button name='Email' onClick={(e) => openModal(e)}>
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
        <button name='Nombre y apellido' onClick={(e) => openModal(e)}>
         Editar
        </button>
       ) : (
        <button name='Nombre y apellido' onClick={(e) => openModal(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>Documento</p>
       <p>{document}</p>
       {document ? (
        <button name='Documento' onClick={(e) => openModal(e)}>
         Editar
        </button>
       ) : (
        <button name='Documento' onClick={(e) => openModal(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>Telefono</p>
       <p>{phone}</p>
       {phone ? (
        <button name='Teléfono' onClick={(e) => openModal(e)}>
         Editar
        </button>
       ) : (
        <button name='Teléfono' onClick={(e) => openModal(e)}>
         Agregar
        </button>
       )}
      </section>
      <section style={SECTION_STYLES}>
       <p>dirección</p>
       <p>{address}</p>
       {address ? (
        <button name='Dirección' onClick={(e) => openModal(e)}>
         Editar
        </button>
       ) : (
        <button name='Dirección' onClick={(e) => openModal(e)}>
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
