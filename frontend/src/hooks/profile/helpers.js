export const completeProfile = (user) => {
 const {
  userName,
  email,
  firstName,
  lastName,
  typeOfDocument,
  document,
  phone,
  address,
 } = user;

 return userName &&
  email &&
  firstName &&
  lastName &&
  typeOfDocument &&
  document &&
  phone &&
  address
  ? true
  : false;
};

export const handleInputValue = (title, user) => {
 const {
  userName,
  email,
  firstName,
  lastName,
  typeOfDocument,
  document,
  phone,
  address,
 } = user;

 const selections = {
  'Nombre de Usuario': userName,
  Email: email,
  'Nombre y apellido': { firstName, lastName },
  Documento: { typeOfDocument, document },
  Teléfono: phone,
  Dirección: address,
 };

 return selections[title];
};

export const selectEndpoint = (title) => {
 const selections = {
  'Nombre de Usuario': 'user',
  Email: 'user',
  'Nombre y apellido': 'usersDetails',
  Documento: 'document',
  Teléfono: 'phone',
  Dirección: 'address',
 };

 return selections[title];
};

export const handleValue = (title, value, secondValue) => {
 const selections = {
  'Nombre de Usuario': {
   username: value,
  },
  Email: { email: value },
  'Nombre y apellido': {
   firstname: value,
   lastname: secondValue,
  },
  Documento: {
   name_document_type: value,
   document_number: secondValue,
  },
  Teléfono: {
   phone_number: value,
  },
  Dirección: {
   address_line1: value,
  },
 };

 return selections[title];
};

export const selectHTTPMethod = (prevValue) => {
 if (prevValue) {
  return 'patch';
 }

 return 'post';
};

export const handleState = (user, title, value, secondValue) => {
 const selections = {
  'Nombre de Usuario': {
   ...user,
   userName: value,
  },
  Email: {
   ...user,
   email: value,
  },
  'Nombre y apellido': {
   ...user,
   firstName: value,
   lastName: secondValue,
  },
  Documento: { ...user, typeOfDocument: value, document: secondValue },
  Teléfono: { ...user, phone: value },
  Dirección: {
   ...user,
   address: value,
  },
 };

 return selections[title];
};

export const handlePrevValue = (name, UserProfile, setPrevValue) => {
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

export const openModal = (
 e,
 UserProfile,
 setPrevValue,
 seTinputModal,
 setIsOpen,
 setTitle,
 setSecondInputModal
) => {
 const { name } = e.target;

 handlePrevValue(name, UserProfile, setPrevValue);

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
