import axios from 'axios';
const url = import.meta.env.VITE_API_URL;
const getUser = window.localStorage.getItem('loggedAppUser');
const parseToken = JSON.parse(getUser);
const token = parseToken?.token;

export const getUserAccData = async (id) => {
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  },
 };

 try {
  const request = await axios(`${url}/api/user/${id}`, config);
  const response = request.data;

  return response;
 } catch (error) {
  console.error(error);
 }
};

export const getUserNames = async (id) => {
 try {
  const request = await axios(`${url}/api/usersDetails/${id}`);
  const response = request.data;

  return response;
 } catch (error) {
  console.error(error);
 }
};

export const getUserDocument = async (id) => {
 try {
  const request = await axios(`${url}/api/document/${id}`);
  const response = request.data;

  return response;
 } catch (error) {
  console.error(error);
 }
};

export const getUserPhone = async (id) => {
 try {
  const request = await axios(`${url}/api/phone/${id}`);
  const response = request.data;

  return response;
 } catch (error) {
  console.error(error);
 }
};

export const getUserAddress = async (id) => {
 try {
  const request = await axios(`${url}/api/address/${id}`);
  const response = request.data;

  return response;
 } catch (error) {
  console.error(error);
 }
};

export const fetchUserData = async (id, UserProfile, setUserProfile) => {
 try {
  const userData = await getUserAccData(id);

  const userNames = await getUserNames(id);

  const userDocument = await getUserDocument(id);

  const userPhone = await getUserPhone(id);

  const userAddress = await getUserAddress(id);

  const profile = {
   ...UserProfile,
   id_user,
   userName: userData ? userData.username : '',
   firstName: userNames ? userNames[0].firstname : '',
   lastName: userNames ? userNames[0].lastname : '',
   email: userData ? userData.email : '',
   typeOfDocument: userDocument ? userDocument[0].name_document_type : '',
   document: userDocument ? userDocument[0].document_number : '',
   phone: userPhone ? userPhone[0].phone_number : '',
   address: userAddress ? userAddress[0].address_line1 : '',
  };

  setUserProfile(profile);

  window.localStorage.setItem('userProfile', JSON.stringify(profile));
 } catch (error) {
  console.error(error);
 }
};
