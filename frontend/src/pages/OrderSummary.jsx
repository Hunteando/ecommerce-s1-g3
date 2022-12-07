import { useContext, useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

export default function OrderSummary() {
 const [loading, setLoading] = useState(false);
 const { saleData } = useContext(CartContext);

 const navigate = useNavigate();

 return (
  <>
   {loading ? (
    <Loader />
   ) : (
    <>
     <h1>Gracias por tu compra!</h1>
     <h2>compraste: </h2>
     {saleData &&
      saleData.map((el, index) => {
       return (
        <div key={index}>
         <p>{`${el.quantity}X ${el.product_name}`}</p>
        </div>
       );
      })}
     {saleData && <h3>Total: ${saleData[0].sale_total_amount}</h3>}
     <button>Ver estado de mi compra</button>
     <button onClick={() => navigate('/')}>Seguir comprando</button>
    </>
   )}
  </>
 );
}
