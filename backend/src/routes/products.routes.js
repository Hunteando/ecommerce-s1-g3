import { Router } from 'express';
import {
 createProduct,
 getProducts,
 getProduct,
 updateProduct,
 deleteProduct,
} from '../controllers/products.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   products:
 *    type: 'object'
 *    properties:
 *      id_product:
 *        type: 'string'
 *        description: The auto-generated id of the product
 *      product_name:
 *        type: 'string'
 *        description: The name of the product
 *      product_price:
 *        type: 'integer'
 *        description: The price of the product
 *      product_quantity:
 *        type: 'integer'
 *        description: The quantity of the product
 *      product_description:
 *        type: 'string'
 *        description: Product description
 *      product_image_url:
 *        type: 'string'
 *        description: Product image url
 *      id_category:
 *        type: 'integer'
 *        description: product category id
 *    required:
 *      - product_name
 *      - product_price
 *      - product_quantity
 *      - product_description
 *      - product_image_url
 *      - id_category
 *    example:
 *        id_product: 99
 *        product_name: lamp
 *        product_price: 1500
 *        product_quantity: 300
 *        product_description: beautiful lamps to decorate
 *        product_image_url: https://via.placeholder.com/600/24f355
 *        id_category: 1
 *   ProductNotFound:
 *    type: 'object'
 *    properties:
 *      message:
 *        type: 'string'
 *        description: A message for the not found product
 *    example:
 *        message: Product was not found
 *  parameters:
 *    id_product:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The product id
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Products endpoints
 *
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Return all products
 *    tags: [Products]
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: 'array'
 *              items:
 *                $ref: '#/components/schemas/products'
 *      500:
 *        description: Some server error
 */
router.get('/products', getProducts);

/**
 * @swagger
 * /api/product:
 *  post:
 *    summary: Create a product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/products'
 *    responses:
 *      200:
 *        description: Product succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/products'
 *      500:
 *        description: Some server error
 */
router.post('/product', createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by id
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/id_product'
 *    responses:
 *      200:
 *        description: The product was found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/products'
 *      404:
 *        description: The product was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductNotFound'
 *      500:
 *        description: Some server error
 */
router.get('/products/:id', getProduct);
/**
 *  @swagger
 *  /api/products/{id}:
 *    delete:
 *      summary: delete a product by id
 *      tags: [Products]
 *      parameters:
 *        - $ref: '#/components/parameters/id_product'
 *      responses:
 *        204:
 *          description: The product was deleted
 *        404:
 *          description: The product was not found
 *          content:
 *            aplication/json:
 *              schema:
 *                $ref: '#/components/schemas/ProductNotFound'
 *        500:
 *          description: Some server error
 */
router.delete('/products/:id', deleteProduct);

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: update a product by id
 *    tags: [Products]
 *    parameters:
 *      - $ref: '#/components/parameters/id_product'
 *    requestBody:
 *      required: true
 *      content:
 *        aplication/json:
 *          schema:
 *            $ref: '#/components/schemas/products'
 *    responses:
 *      200:
 *        description: The product was modified
 *        content:
 *          aplication/json:
 *            schema:
 *              $ref: '#/components/schemas/products'
 *      404:
 *        description: The product was not found
 *        content:
 *          aplication/json:
 *            schema:
 *               $ref: '#/components/schemas/ProductNotFound'
 *      500:
 *        description: Some server error
 */
router.patch('/products/:id', updateProduct);

export default router;
