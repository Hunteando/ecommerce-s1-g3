import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { validateForm } from './validateForm';
import { fetchUserData } from './fetchData';
import UserProfileContext from '../../context/UserProfileContext';

const initialForm = {
 email: '',
 password: '',
};

const url = import.meta.env.VITE_API_URL;

export const useLoginForm = (setModalIsVisible, setUser) => {
 const [form, setForm] = useState(initialForm);
 const [errors, setErrors] = useState({});
 const [loading, setLoading] = useState(false);
 const [responseMessage, setResponseMessage] = useState(false);

 const { setUserProfile } = useContext(UserProfileContext);

 const navigate = useNavigate();

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
 };

 const handleBlur = (e) => {
  const target = e.target.name;
  const objKey = Object.keys(validateForm(form, target));
  const objValue = Object.values(validateForm(form, target));
  setErrors({
   ...errors,
   [objKey[0]]: objValue[0],
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setResponseMessage(false);
  setErrors(validateForm(form, undefined));

  if (errors.email === true && errors.password === true) {
   setLoading(true);

   try {
    const request = await axios.post(`${url}/api/SignIn`, {
     email: form.email,
     password: form.password,
    });

    const response = request.data;
    const id = response.id_user;

    setUserProfile(await fetchUserData(id));

    if (request.data.roles === 'admin') {
     window.localStorage.setItem('loggedAppUser', JSON.stringify(response));
     setModalIsVisible(false);
     navigate('/Admin');
     return setLoading(false);
    }

    if (window.location.pathname) {
     setModalIsVisible(false);
     setUser(response.username);
     window.localStorage.setItem('loggedAppUser', JSON.stringify(response));
     return setLoading(false);
    }

    navigate('/');
    setModalIsVisible(false);
    setUser(response.username);
    window.localStorage.setItem('loggedAppUser', JSON.stringify(response));
    return setLoading(false);
   } catch (error) {
    console.log(error);
    console.log(error.code);
    setLoading(false);

    if (error.code === 'ERR_NETWORK') {
     setResponseMessage('Error de conexion, intentelo de nuevo');
    }
    const { status } = error.response;
    const { message } = error.response.data;
    if (status === 403) setResponseMessage(message);
   }
  }

  setLoading(false);
 };

 return {
  form,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  loading,
  responseMessage,
 };
};
