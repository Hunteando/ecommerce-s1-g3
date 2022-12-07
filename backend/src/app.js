import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions.js';
import users from './routes/users.routes.js';
import categories from './routes/categories.routes.js';
import products from './routes/products.routes.js';
import usersDetails from './routes/usersDetails.routes.js';
import document from './routes/document.routes.js';
import address from './routes/address.routes.js';
import phone from './routes/phones.routes.js';
import checkout from './routes/checkout.routes.js';
import sales from './routes/sales.routes.js';

const app = express();

app.use(cors({}));
app.use(express.json());
const specs = swaggerJsDoc(options);

app.use('/api', users);

app.use('/api', usersDetails);

app.use('/api', phone);

app.use('/api', document);

app.use('/api', address);

app.use('/api', categories);

app.use('/api', products);

app.use('/api', sales);

app.use('/api', checkout);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use((req, res, next) => {
 res.status(404).json({
  message: 'Endpoint not found',
 });
});

export default app;
