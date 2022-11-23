import { Router } from 'express';
import {
 createUserDetails,
 getUsersDetails,
 updateUserDetails,
 getuserDetails,
} from '../controllers/usersDetails.controllers.js';

const router = Router();

router.get('/usersDetails', getUsersDetails);

router.post('/usersDetails/:id', createUserDetails);

router.patch('/usersDetails/:id', updateUserDetails);

router.get('/usersDetails/:id', getuserDetails);

//eliminar un detalle
//router.delete('/usersDetails/:id', deleteUsersDetails);

export default router;
