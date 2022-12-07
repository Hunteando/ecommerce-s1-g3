import { pool } from '../config/mysql.js';

export const getSales = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * from sales');

  res.json(rows);
 } catch (error) {
  return console.error(error);
 }
};

export const createSale = async (req, res) => {
 const { id } = req.params;

 const { sale_total_amount, products } = req.body;

 try {
  const [result] = await pool.query(
   'INSERT INTO sales(sale_total_amount, id_user) VALUES (?,?)',
   [sale_total_amount, id]
  );

  const saleId = result.insertId;

  const values = products.map((el) => {
   return [saleId, el.id_product, el.quantity];
  });

  const [rows] = await pool.query(
   'INSERT INTO sales_details(id_sale, id_product, quantity) VALUES ?',
   [values]
  );

  return res.json(saleId);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const getSale = async (req, res) => {
 const { id } = req.params;

 const { saleid } = req.params;
 try {
  const [rows] = await pool.query(
   'SELECT sale_total_amount, product_name, product_price, product_description, product_image_url, quantity FROM sales INNER JOIN sales_details ON sales_details.id_sale = sales.id_sale INNER JOIN products ON sales_details.id_product = products.id_product WHERE id_user = ? AND sales_details.id_sale = ?',
   [id, saleid]
  );

  if (rows.length <= 0)
   return res.status(404).json({
    message: 'user not found',
   });

  res.json(rows);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const getUserSales = async (req, res) => {
 const { id } = req.params;

 try {
  const [result] = await pool.query('SELECT * FROM sales WHERE id_user = ?', [
   id,
  ]);

  const [rows] = await pool.query(
   'SELECT * FROM sales INNER JOIN sales_details ON sales_details.id_sale = sales.id_sale INNER JOIN products ON sales_details.id_product = products.id_product WHERE id_user = ?',
   [id]
  );

  if (rows.length <= 0)
   return res.status(404).json({
    message: 'user not found',
   });

  res.json({ sales: result, products: rows });
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
