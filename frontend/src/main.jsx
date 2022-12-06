import React from 'react';
import { ModalProvider } from './context/ModalContext';
import { UserProvider } from './context/UserContext';
import { UserProfileProvider } from './context/UserProfileContext';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { CartProvider } from './context/CartContext';
import {
 Products,
 Admin,
 Users,
 loaderUser,
 ProductAdd,
 ErrorPage,
 ProductDetail,
 loaderProduct,
 UserDetail,
 userLoaderDetail,
 actionDeleteUser,
} from './components/';

import {
 About,
 Answers,
 Contact,
 Privacy,
 Register,
 Work,
 Checkout,
 Cart,
 Profile,
 action as FormActionRegister,
} from './pages/';
import { Payment } from './pages/Payment';
import OrderSummary from './pages/OrderSummary';
import UserSales from './pages/UserSales';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  children: [
   {
    index: true,
    element: <Products />,
   },
   {
    path: '/payment',
    element: <Payment />,
   },
   {
    path: '/ordersummary',
    element: <OrderSummary />,
   },
   {
    path: '/checkout',
    element: <Checkout />,
   },
   {
    path: '/about',
    element: <About />,
   },
   {
    path: '/answers',
    element: <Answers />,
   },
   {
    path: '/contact',
    element: <Contact />,
   },
   {
    path: '/privacy',
    element: <Privacy />,
   },
   {
    path: '/work',
    element: <Work />,
   },
   {
    path: '/cart',
    element: <Cart />,
   },
   {
    path: '/profile',
    element: <Profile />,
   },
   {
    path: '/mypurchases',
    element: <UserSales />,
   },
   {
    path: '/register',
    element: <Register />,
    action: FormActionRegister,
    errorElement: <ErrorPage />,
   },
   {
    path: '/product/:id_product/',
    element: <ProductDetail />,
    loader: loaderProduct,
   },
  ],
 },
 {
  path: '/admin',
  element: <Admin />,
  children: [
   {
    index: true,
    element: <h3>Inicio</h3>,
   },
   {
    path: '/admin/users',
    element: <Users />,
    loader: loaderUser,
    errorElement: <ErrorPage />,
   },
   {
    path: '/admin/user/:id_user/',
    element: <UserDetail />,
    loader: userLoaderDetail,
    //action: userDetailAction,
    errorElement: <ErrorPage />,
   },
   {
    path: '/admin/user/:id_user/eliminar',
    action: actionDeleteUser,
   },
   {
    path: '/admin/products',
    element: <ProductAdd />,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <UserProvider>
   <UserProfileProvider>
    <CartProvider>
     <ModalProvider>
      <RouterProvider router={router} />
     </ModalProvider>
    </CartProvider>
   </UserProfileProvider>
  </UserProvider>
 </React.StrictMode>
);
