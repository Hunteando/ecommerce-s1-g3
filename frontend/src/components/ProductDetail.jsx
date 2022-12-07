import { useLoaderData } from "react-router-dom";
import { formateado } from "../helpers/formateado";
import { getProduct } from "../hooks/admin/useGetProducts.js";

export const loaderProduct = async ({ params }) => {
	const producto = await getProduct(params.id_product);

	return producto;
};

export const ProductDetail = () => {
	const producto = useLoaderData();

	return (
		<>
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
		</>
	);
};
