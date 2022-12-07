import { pool } from '../config/mysql.js';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/config.js';

export const createCategory = async (req, res) => {
 const { category_name } = req.body;

 try {
  const [rows] = await pool.query(
   `INSERT INTO categories(category_name) VALUES (?)`,
   [category_name]
  );

  const id = rows.insertId;

  res.json({ id_category: id, category_name });
 } catch (error) {
  return res.status(500).json({
   message: 'Somthing goes wrong',
  });
 }
};

export const getCategories = async (req, res) => {
 try {
  const [rows] = await pool.query(`SELECT * FROM categories`);

  res.json({ rows });
 } catch (error) {
  return res.status(500).json({
   message: 'Somthing goes wrong',
  });
 }
};

export const getCategory = async (req, res) => {
 const id_category = req.params.id;

 try {
  const [rows] = await pool.query(
   'SELECT * FROM categories WHERE id_category = ?',
   [id_category]
  );

  if (rows.length <= 0) {
   return res.status(404).json({
    message: 'Category not found',
   });
  }

  res.json(rows);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const updateCategory = async (req, res) => {
 const { id } = req.params;
 const { category_name } = req.body;

 const [result] = await pool.query(
  'UPDATE categories SET category_name = IFNULL(?, category_name) WHERE id_category = ?',
  [category_name, id]
 );

 if (result.affectedRows === 0) {
  return res.status(404).json({
   message: 'categorie not found',
  });
 }

 const [rows] = await pool.query(
  'SELECT * FROM categories WHERE id_category = ?',
  [id]
 );

 res.json(rows[0]);
 try {
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const deleteCategory = async (req, res) => {
 const { id } = req.params;

 try {
  const [rows] = await pool.query(
   'DELETE FROM categories WHERE id_category = ?',
   [id]
  );

  if (rows.affectedRows <= 0)
   return res.status(404).json({
    message: 'categorie not found',
   });

  res.sendStatus(204);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
