const MODAL_STYLES = {
 position: 'fixed',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 backgroundColor: '#FFF',
 padding: '50px',
 zIndex: 1000,
};

const OVERLAY_STYLES = {
 position: 'fixed',
 top: 0,
 left: 0,
 right: 0,
 bottom: 0,
 backgroundColor: 'rgba(0,0,0,.7)',
 zIndex: 1000,
};

export const Modal = ({
 id,
 prevValue,
 handleSubmit,
 seTinputModal,
 inputModal,
 secondInputModal,
 setSecondInputModal,
 title,
 open,
 OnClose,
}) => {
 const handleChange = (e, inputName) => {
  const { value } = e.target;
  if (inputName === 'firstname') {
   return seTinputModal(value);
  }

  if (inputName === 'lastname') {
   return setSecondInputModal(value);
  }

  if (inputName === 'select') {
   return seTinputModal(value);
  }

  if (inputName === 'documentNumber') {
   return setSecondInputModal(value);
  }

  return seTinputModal(value);
 };

 const handleClose = () => {
  OnClose();
 };

 if (!open) return null;

 return (
  <>
   <div style={OVERLAY_STYLES} />
   <div style={MODAL_STYLES}>
    {title === 'Nombre y apellido' ? (
     <>
      <h2>Nombre</h2>
      <input
       type='text'
       name='input'
       placeholder='escriba aqui'
       onChange={(e) => handleChange(e, 'firstname')}
       value={inputModal}
      />
      <h2>Apellido</h2>
      <input
       type='text'
       name='input'
       placeholder='escriba aqui'
       onChange={(e) => handleChange(e, 'lastname')}
       //necesito solo leer second
       value={secondInputModal}
      />
     </>
    ) : title === 'Documento' ? (
     <>
      <h2>Tipo de documento</h2>
      <select
       name='select'
       defaultValue='default'
       onChange={(e) => handleChange(e, 'select')}>
       <option disabled value='default'>
        -- Seleccione una opcion --
       </option>
       <option value='dni'>DNI</option>
       <option value='pasaporte'>Pasaporte</option>
      </select>

      <h2>Numero de documento</h2>
      <input
       type='text'
       name='input'
       placeholder='escriba aqui'
       onChange={(e) => handleChange(e, 'documentNumber')}
       //necesito solo leer second
       value={secondInputModal}
      />
     </>
    ) : (
     <>
      <h2>{title}</h2>
      <input
       type='text'
       name='input'
       placeholder='escriba aqui'
       onChange={handleChange}
       value={inputModal}
      />
     </>
    )}

    <button
     onClick={() =>
      handleSubmit(id, title, prevValue, inputModal, secondInputModal)
     }>
     enviar
    </button>

    <button onClick={handleClose}>close modal</button>
   </div>
  </>
 );
};
