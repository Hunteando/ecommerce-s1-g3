import { pool } from '../config/mysql.js';

export const createUserDetails = async (req, res) => {
 const { id } = req.params;

 const { firstname, lastname } = req.body;

 try {
  const [rows] = await pool.query(
   'INSERT INTO UsersDetails(firstname, lastname, id_user) VALUES (?,?,?)',
   [firstname, lastname, id]
  );

  return res.json({
   firstname,
   lastname,
   id,
  });
 } catch (error) {
  return res.status(500).json({
   message: 'El usuario ya existe',
  });
 }
};

export const getUsersDetails = async (req, res) => {
 try {
  const [rows] = await pool.query('SELECT * FROM UsersDetails');

  return res.json(rows);
 } catch (error) {
  return console.error(error);
 }
};

export const updateUserDetails = async (req, res) => {
 const { id } = req.params;
 const { firstname, secondname, lastname, secondlastname } = req.body;
 try {
  const [result] = await pool.query(
   'UPDATE UsersDetails SET firstname = IFNULL(?, firstname), secondname = IFNULL(?, secondname), lastname = IFNULL(?, lastname), secondlastname = IFNULL(?, secondlastname)',
   [firstname, secondname, lastname, secondlastname]
  );

  if (result.affectedRows === 0) {
   return res.status(404).json({
    message: 'User not found',
   });
  }

  const [rows] = await pool.query(
   'SELECT * FROM UsersDetails WHERE id_user = ?',
   [id]
  );

  return res.json(rows[0]);
 } catch (error) {
  return console.error(error);
 }
};

export const getuserDetails = async (req, res) => {
 const { id } = req.params;
 const { firstname, secondname, lastname, secondlastname } = req.body;

 try {
  const [rows] = await pool.query(
   'SELECT * FROM UsersDetails WHERE id_user = ?',
   [id]
  );

  if (rows.length <= 0)
   return res.status(204).json({
    message: 'user not found',
   });

  res.json(rows);
 } catch (error) {
  return console.log(error);
 }
};

export const deleteUser = async (req, res) => {};
