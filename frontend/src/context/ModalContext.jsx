import { createContext, useState } from 'react';
const ModalContext = createContext();

export default ModalContext;

export const ModalProvider = ({ children }) => {
 const [modalIsVisible, setModalIsVisible] = useState(false);
 const contextData = { modalIsVisible, setModalIsVisible };

 return (
  <ModalContext.Provider value={contextData}>{children}</ModalContext.Provider>
 );
};
