import { Router } from 'express';
import {
 signUp,
 signIn,
 getUsers,
 getUser,
 updateUser,
} from '../controllers/users.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = Router();

router.post('/signUp', signUp);

router.post('/signIn', signIn);

router.get('/users', verifyToken, getUsers);

router.get('/user/:id', verifyToken, getUser);
//modificar un usuario

router.patch('/user/:id', updateUser);

//eliminar un usuario

export default router;
