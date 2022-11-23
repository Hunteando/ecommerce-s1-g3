import { pool } from '../config/mysql.js';

export const getDocuments = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * from DocumentType');

  res.json(rows);
 } catch (error) {
  return console.error(error);
 }
};

export const createDocument = async (req, res) => {
 const { id } = req.params;
 const { name_document_type, document_number } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO DocumentType(name_document_type, document_number, id_user) VALUES (?,?,?)',
   [name_document_type, document_number, id]
  );

  return res.json({ name_document_type, document_number });
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const updateDocument = async (req, res) => {
 const { id } = req.params;
 const { name_document_type, document_number } = req.body;

 try {
  const [result] = await pool.query(
   'UPDATE DocumentType SET name_document_type = IFNULL(?, name_document_type),document_number = IFNULL(?, document_number) WHERE id_user = ?',
   [name_document_type, document_number, id]
  );

  if (result.affectedRows === 0) {
   return res.status(404).json({
    message: 'User not found',
   });
  }

  const [rows] = await pool.query(
   'SELECT * FROM DocumentType WHERE id_user = ?',
   [id]
  );

  res.json(rows[0]);
 } catch (error) {
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};

export const getDocument = async (req, res) => {
 const { id } = req.params;

 try {
  const [rows] = await pool.query(
   'SELECT * FROM DocumentType WHERE id_user = ?',
   [id]
  );

  if (rows.length <= 0)
   return res.status(204).json({
    message: 'user not found',
   });

  return res.json(rows);
 } catch (error) {
  console.error(error);
  return res.status(500).json({
   message: 'Something goes wrong',
  });
 }
};
