//Authorization: Bearer <token>
export function verifyToken(req, res, next) {
 const bearerHeader = req.headers['authorization'];
 if (bearerHeader !== undefined) {
  const bearerToken = bearerHeader.split(' ')[1];
  req.token = bearerToken;

  next();
 } else {
  console.log(res);
  res.sendStatus(403);
 }
}
