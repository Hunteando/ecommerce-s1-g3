import { Router } from 'express';
import {
 createPhone,
 getPhone,
 getPhones,
 updatePhone,
} from '../controllers/phone.controllers.js';

const router = Router();

router.post('/phone/:id', createPhone);

router.get('/phone/:id', getPhone);

router.get('/phones', getPhones);

router.patch('/phone/:id', updatePhone);

//eliminar un telefono

export default router;
