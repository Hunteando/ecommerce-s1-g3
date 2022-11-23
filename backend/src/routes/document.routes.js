import { Router } from 'express';
import {
 getDocuments,
 createDocument,
 updateDocument,
 getDocument,
} from '../controllers/document.controllers.js';

const router = Router();

router.get('/documents', getDocuments);

router.post('/document/:id', createDocument);

router.patch('/document/:id', updateDocument);

router.get('/document/:id', getDocument);

//eliminar un documento
//router.delete('/document/:id', deleteDocument);

export default router;
