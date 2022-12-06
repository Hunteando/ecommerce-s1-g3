import axios from 'axios';
import {
 selectEndpoint,
 handleValue,
 selectHTTPMethod,
 handleState,
} from './helpers';

const url = import.meta.env.VITE_API_URL;

export const handleSubmit = async (
 id,
 title,
 prevValue,
 value,
 secondValue,
 UserProfile,
 setUserProfile,
 setIsOpen
) => {
 try {
  const request = await axios[selectHTTPMethod(prevValue)](
   `${url}/api/${selectEndpoint(title)}/${id}`,
   handleValue(title, value, secondValue)
  );
  console.log(request.status);
  if (request.status) {
   setUserProfile(handleState(UserProfile, title, value, secondValue));
   window.localStorage.setItem(
    'userProfile',
    JSON.stringify(handleState(UserProfile, title, value, secondValue))
   );
   setIsOpen(false);
  }
 } catch (error) {
  console.error(error);
 }
};
