import { Router } from 'express';
import {
 getSales,
 createSale,
 // updateSale,
 getSale,
 getUserSales,
} from '../controllers/sale.controllers.js';

const router = Router();

router.get('/sales', getSales);

router.post('/sale/:id', createSale);

router.get('/sale/:id', getUserSales);

router.get('/sale/:id/:saleid', getSale);

//router.patch('/sale/:id', updateSale);

export default router;
