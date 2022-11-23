import { createContext, useState } from 'react';
const UserProfileContext = createContext();

export default UserProfileContext;

export const initialState = {
 userName: '',
 email: '',
 firstName: '',
 lastName: '',
 id_user: '',
 typeOfDocument: '',
 document: '',
 phone: '',
 address: '',
};

export const UserProfileProvider = ({ children }) => {
 const [UserProfile, setUserProfile] = useState(initialState);
 const [loading, setLoading] = useState(true);

 const contextData = {
  UserProfile,
  setUserProfile,
  loading,
  setLoading,
 };

 return (
  <UserProfileContext.Provider value={contextData}>
   {children}
  </UserProfileContext.Provider>
 );
};
