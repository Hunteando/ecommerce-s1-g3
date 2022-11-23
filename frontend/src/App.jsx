import { useEffect, useState, useContext } from 'react';
import { Header, Footer } from './components/';
import { Outlet } from 'react-router-dom';
import { Modal } from './components/Modal';
import ModalContext from './context/ModalContext';
import { useGetProducts } from './hooks/admin/useGetProducts';

export const App = () => {
 const { modalIsVisible } = useContext(ModalContext);

 const { getAllProducts } = useGetProducts();

 useEffect(() => {
  getAllProducts();
 }, []);

 return (
  <div className={modalIsVisible ? 'fijar' : ''}>
   <Header />
   <Outlet />
   <Footer />
   {modalIsVisible && <Modal />}
  </div>
 );
};
