import { pool } from '../config/mysql.js';

export const getAddresses = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * FROM Address');

  return res.json(rows);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const createAddress = async (req, res) => {
 const { id } = req.params;
 const { address_line1 } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO Address(address_line1, id_user) VALUES (?,?)',
   [address_line1, id]
  );

  res.json(rows);
 } catch (error) {
  console.error(error);

  if (error.code === 'ER_DUP_ENTRY') {
   return res.status(500).json({
    message: 'El usuario ya existe',
   });
  }

  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const getAddress = async (req, res) => {
 const { id } = req.params;

 try {
  const [rows] = await pool.query('SELECT * FROM Address WHERE id_user = ?', [
   id,
  ]);

  if (rows.length <= 0)
   return res.status(204).json({
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

export const updateAddress = async (req, res) => {
 const { id } = req.params;
 const { address_line1 } = req.body;

 try {
  const [result] = await pool.query(
   'UPDATE Address SET address_line1 = ? WHERE id_user = ?',
   [address_line1, id]
  );

  if (result.affectedRows === 0) {
   return res.status(404).json({
    message: 'User not found',
   });
  }

  const [rows] = await pool.query('SELECT * FROM Address WHERE id_user = ?', [
   id,
  ]);

  res.json(rows[0]);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
