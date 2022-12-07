import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';

export const getProducts = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * FROM products');

  if (rows.length <= 0)
   return res.status(404).json({
    message: 'Not products found',
   });

  res.json(rows);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const createProduct = async (req, res) => {
 const {
  product_name,
  product_price,
  product_quantity,
  product_description,
  product_image_url,
  id_category,
 } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO products(product_name, product_price, product_quantity, product_description, product_image_url, id_category) VALUES (?,?,?,?,?,?)',
   [
    product_name,
    product_price,
    product_quantity,
    product_description,
    product_image_url,
    id_category,
   ]
  );

  const id = rows.insertId;

  const [result] = await pool.query(
   'SELECT * FROM products WHERE id_product = ?',
   [id]
  );

  res.send(result);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const getProduct = async (req, res) => {
 const id_product = req.params.id;

 try {
  const [rows] = await pool.query(
   'SELECT * FROM products WHERE id_product = ?',
   [id_product]
  );

  if (rows.length <= 0) {
   return res.status(404).json({
    message: 'Product not found',
   });
  }

  res.json(rows);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const deleteProduct = async (req, res) => {
 const { id } = req.params;

 try {
  const [result] = await pool.query(
   'DELETE FROM products WHERE id_product = ?',
   [id]
  );

  if (result.affectedRows <= 0)
   return res.status(404).json({
    message: 'Product not found',
   });

  res.sendStatus(204);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const updateProduct = async (req, res) => {
 const { id } = req.params;
 const {
  product_name,
  product_price,
  product_quantity,
  product_description,
  product_image_url,
  id_category,
 } = req.body;

 try {
  const [result] = await pool.query(
   'UPDATE products SET product_name = IFNULL(?, product_name),product_price = IFNULL(?, product_price),product_quantity = IFNULL(?, product_quantity),product_description = IFNULL(?, product_description),product_image_url = IFNULL(?, product_image_url),id_category = IFNULL(?, id_category) WHERE id_product = ?',
   [
    product_name,
    product_price,
    product_quantity,
    product_description,
    product_image_url,
    id_category,
    id,
   ]
  );

  if (result.affectedRows === 0) {
   return res.status(404).json({
    message: 'Product not found',
   });
  }

  const [rows] = await pool.query(
   'SELECT * FROM products WHERE id_product = ?',
   [id]
  );

  res.json(rows[0]);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
