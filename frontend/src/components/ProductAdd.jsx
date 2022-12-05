import { useEffect, useState, useContext } from 'react';

import CartContext from '../context/CartContext';

//Para ejecutar una funcion antes de renderizar
//podemos utilizar el hook useEffect
/* export const loaderProductos = ()=>{
	const productsAll = getProducts()
	return productsAll
}  */

export const ProductAdd = () => {
 //const productsAll = useLoaderData();

 const { state } = useContext(CartContext);
 const { products } = state;

 return (
  <>
   <h3 className='title__admin'>Administración de productos</h3>
   {products.length ? (
    <table className='container__users'>
     <thead className='table__users'>
      <tr>
       <th className='img'>Imagen</th>
       <th className='name'>Nombre</th>
       <th className='price'>Precio</th>
       <th>Acción</th>
      </tr>
     </thead>
     <tbody>
      {products.map((producto) => (
       <tr key={producto.id_product}>
        <td>
         <img
          className='products__img'
          src={producto.product_image_url}
          alt={producto.product_name}
         />
        </td>
        <td>{producto.product_name}</td>
        <td>{producto.product_price}</td>
        <td>
         <button className='buttonEdit'>Editar</button>
         <button className='buttonDelete'>Eliminar</button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   ) : (
    <p>No hay productos aún</p>
   )}
  </>
 );
};
