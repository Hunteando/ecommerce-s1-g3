import { getProducts } from '../data/GetProducts';
import { useLoaderData } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const loaderDetail = async ({ params }) => {
 const product = await getProducts(params.productId);
 return product;
};

export const ProductDetail = () => {
 const formateado = (number) => {
  return number.toLocaleString('ES-es', {
   style: 'currency',
   currency: 'USD',
  });
 };
 const producto = useLoaderData();
 console.log(producto);
 return (
  <>
   <Header />
   <div>
    {producto.map((p) => {
     return (
      <div key={p.id_product}>
       <div className='product__detail'>
        <div className='product__detail-left'>
         <img
          className='product__detail-img'
          src={p.product_image_url}
          alt={p.product_name}
         />
        </div>
        <div className='product__detail-info'>
         <h3>{p.product_name}</h3>
         <p>{formateado(p.product_price)}</p>
         <p className='product__detail-description'>Descripción:</p>
         <p>{p.product_description}</p>
        </div>
       </div>
      </div>
     );
    })}
   </div>
   <Footer />
  </>
 );
};
