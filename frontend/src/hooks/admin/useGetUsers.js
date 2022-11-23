import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetUsers = () => {
 const [users, setUsers] = useState({});

 const getToken = window.localStorage.getItem('loggedAppUser');
 const parseToken = JSON.parse(getToken);
 const token = parseToken.token;

 const url = import.meta.env.VITE_API_URL;
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  },
 };

 const getUsers = async () => {
  try {
   const respuesta = await axios(`${url}/api/users`, config);
   const resultado = respuesta.data.rows;
   setUsers(resultado);
  } catch (error) {
   console.error(error);
  }
 };

 const getUser = async (id) => {
  const respuesta = await fetch(`${url}/users/${id}`);
  const resultado = respuesta.json();
  return resultado;
 };

 const addUser = async (datos) => {
  try {
   const respuesta = await fetch(`${url}/users`, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
     'Content-Type': 'application/json',
    },
   });
   await respuesta.json();
  } catch (error) {
   console.log(error);
  }
 };

 const updateUser = async (id, datos) => {
  try {
   const respuesta = await fetch(`${url}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(datos),
    headers: {
     'Content-Type': 'application/json',
    },
   });
   await respuesta.json();
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  getUsers();
 }, []);

 return { getUsers, users };
};
