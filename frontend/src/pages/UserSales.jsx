import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserSales() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  try {
   (async () => {
    setLoading(true);

    const { data } = await axios('http://localhost:5825/api/sale/1');

    setData(data);
    setLoading(false);
   })();
  } catch (error) {
   console.error(error);
   setLoading(false);
  }
 }, []);

 return (
  <>
   <h2>Compras</h2>
   <section>
    {loading ? (
     <h1>cargando...</h1>
    ) : data ? (
     data.sales.map((sale, index) => {
      return (
       <article key={index}>
        <div>
         <hr />
         <p>Numero de orden</p>
         <p>{sale.id_sale}</p>
        </div>
        <div>
         <p>Total</p>
         <p>{sale.sale_total_amount}</p>
        </div>
        <button>Ver detalle</button>
        {data.products.map((product, index) => {
         if (product.id_sale === sale.id_sale) {
          return (
           <section key={index}>
            <hr />
            <img
             className='cardCartImg'
             src={product.product_image_url}
             alt={product.product_name}
            />
            <div>
             <p>Nombre del producto</p>
             <p>{product.product_name}</p>
            </div>
            <div>
             <p>Descripcion</p>
             <p>{product.product_description}</p>
            </div>
           </section>
          );
         }
        })}
       </article>
      );
     })
    ) : (
     <>
      <h2>Aun no tienes compras</h2>
      <button>Ir a comprar</button>
     </>
    )}
   </section>
  </>
 );
}

{
 /* <article>
<p>imagen de la compra</p>
<p>estado de la compra</p>
<p>fecha de entrega de la compra</p>
<p>detalles de los productos</p>
<p>cantidad de los productos</p>
<p>boton de ver compra</p>
<p>boton de volver a comprars</p>
</article> */
}
