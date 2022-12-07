import { completeProfile, openModal } from './helpers';
import { handleSubmit } from './handleSubmit';
import {
 getUserAccData,
 getUserNames,
 getUserDocument,
 getUserPhone,
 getUserAddress,
} from './fetchData';
import { useContext, useEffect, useState } from 'react';
import UserProfileContext from '../../context/UserProfileContext';

export const useGetUserProfile = () => {
 const [inputModal, seTinputModal] = useState('');
 const [secondInputModal, setSecondInputModal] = useState('');
 const [title, setTitle] = useState('');
 const [prevValue, setPrevValue] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

 const { UserProfile, setUserProfile, setLoading } =
  useContext(UserProfileContext);

 useEffect(() => {
  const getUser = window.localStorage.getItem('loggedAppUser');

  if (getUser) {
   const { id_user } = JSON.parse(getUser);
   const fetchUserData = async (id_user) => {
    try {
     const userData = await getUserAccData(id_user);
     const userNames = await getUserNames(id_user);
     const userDocument = await getUserDocument(id_user);
     const userPhone = await getUserPhone(id_user);
     const userAddress = await getUserAddress(id_user);
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
     setLoading(false);
    } catch (error) {
     setLoading(false);
     console.error(error);
    }
   };
   fetchUserData(id_user);
  }
 }, []);

 return {
  completeProfile,
  handleSubmit,
  openModal,
  prevValue,
  setPrevValue,
  isOpen,
  setIsOpen,
  title,
  setTitle,
  inputModal,
  seTinputModal,
  secondInputModal,
  setSecondInputModal,
 };
};
