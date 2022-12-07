import { Router } from 'express';
import {
 createCategory,
 getCategories,
 getCategory,
 updateCategory,
 deleteCategory,
} from '../controllers/categories.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    categories:
 *      type: 'object'
 *      properties:
 *        id_category:
 *          type: 'number'
 *          description: The auto-generated id of the category
 *        category_name:
 *          type: 'string'
 *          description: The name of the category
 *      required:
 *      - category_name
 *      example:
 *        id_category: 99
 *        category_name: backyard lamps
 *    CategoryNotFound:
 *      type: 'object'
 *      properties:
 *        message:
 *          type: 'string'
 *          description: A message for the not found category
 *      example:
 *        message: Category was not found
 *  parameters:
 *    id_category:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The category id
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Categories endpoints
 */

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: return all categories
 *    tags: [Categories]
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: 'array'
 *              items:
 *                $ref: '#/components/schemas/categories'
 *      500:
 *        description: Some server error
 */
router.get('/categories', getCategories);

/**
 * @swagger
 * /api/category:
 *  post:
 *    summary: Create a category
 *    tags: [Categories]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/categories'
 *    responses:
 *      200:
 *        description: Category succesfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/categories'
 *      500:
 *        description: Some server error
 */
router.post('/category', createCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *  get:
 *
 *    summary: Get a category by id
 *    tags: [Categories]
 *    parameters:
 *     - $ref: '#/components/parameters/id_category'
 *    responses:
 *      200:
 *        description: The category was found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/categories'
 *      404:
 *        description: The category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *      500:
 *        description: Some server error
 */
router.get('/categories/:id', getCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *  patch:
 *    summary: update a category by id
 *    tags: [Categories]
 *    parameters:
 *      - $ref: '#/components/parameters/id_category'
 *    requestBody:
 *      required: true
 *      content:
 *        aplication/json:
 *          schema:
 *            $ref: '#/components/schemas/categories'
 *    responses:
 *      200:
 *        description: The category was modified
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/categories'
 *      404:
 *        description: The category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *      500:
 *        description: Some server error
 *
 */
router.patch('/categories/:id', updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *    summary: delete a category by id
 *    tags: [Categories]
 *    parameters:
 *      - $ref: '#/components/parameters/id_category'
 *    responses:
 *      204:
 *        description: The category was deleted
 *      404:
 *        description: The category was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 *      500:
 *        description: Some server error
 */
router.delete('/categories/:id', deleteCategory);

export default router;
