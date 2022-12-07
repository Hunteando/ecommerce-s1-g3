import { Router } from 'express';
import {
 signUp,
 signIn,
 getUsers,
 getUser,
 updateUser,
 deleteUser
} from '../controllers/users.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/signUp', signUp);

router.post('/signIn', signIn);

router.get('/users', verifyToken, getUsers);

router.get('/user/:id', verifyToken, getUser);
//modificar un usuario

router.put('/user/:id', updateUser);


router.delete('/user/:id', deleteUser)
//eliminar un usuario

export default router;
