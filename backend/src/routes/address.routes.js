import { Router } from 'express';
import {
 getAddresses,
 createAddress,
 getAddress,
 updateAddress,
} from '../controllers/address.controllers.js';

const router = Router();

router.get('/addresses', getAddresses);

router.post('/address/:id', createAddress);

router.get('/address/:id', getAddress);

router.patch('/address/:id', updateAddress);

//eliminar una direccion
//router.delete('/address/:id', deleteAddress);

export default router;
