import { pool } from '../config/mysql.js';

export const getPhones = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * FROM Phone');

  return res.json(rows);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const createPhone = async (req, res) => {
 const { id } = req.params;
 const { phone_number } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO Phone(phone_number, id_user) VALUES (?,?)',
   [phone_number, id]
  );

  res.json({
   id_user: id,
   phone_number: phone_number,
  });
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

export const getPhone = async (req, res) => {
 const { id } = req.params;

 try {
  const [rows] = await pool.query('SELECT * FROM Phone WHERE id_user = ?', [
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

export const updatePhone = async (req, res) => {
 const { id } = req.params;
 const { phone_number } = req.body;

 try {
  const [result] = await pool.query(
   'UPDATE Phone SET phone_number = ? WHERE id_user = ?',
   [phone_number, id]
  );

  if (result.affectedRows === 0) {
   return res.status(404).json({
    message: 'User not found',
   });
  }

  const [rows] = await pool.query('SELECT * FROM Phone WHERE id_user = ?', [
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
