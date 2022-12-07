import {
 getUserAccData,
 getUserAddress,
 getUserDocument,
 getUserNames,
 getUserPhone,
} from '../profile/fetchData';

export const fetchUserData = async (id) => {
 try {
  const userData = await getUserAccData(id);

  const userNames = await getUserNames(id);

  const userDocument = await getUserDocument(id);

  const userPhone = await getUserPhone(id);

  const userAddress = await getUserAddress(id);

  const profile = {
   id_user: id,
   userName: userData ? userData.username : '',
   firstName: userNames ? userNames[0].firstname : '',
   lastName: userNames ? userNames[0].lastname : '',
   email: userData ? userData.email : '',
   typeOfDocument: userDocument ? userDocument[0].name_document_type : '',
   document: userDocument ? userDocument[0].document_number : '',
   phone: userPhone ? userPhone[0].phone_number : '',
   address: userAddress ? userAddress[0].address_line1 : '',
  };

  window.localStorage.setItem('userProfile', JSON.stringify(profile));

  return profile;
 } catch (error) {
  console.error(error);
 }
};
