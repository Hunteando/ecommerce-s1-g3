import { PORT } from './config/config.js';

export const options = {
 definition: {
  openapi: '3.0.0',
  info: {
   title: 'Hunteando API',
   version: '1.0.0',
   description: 'e-commerce-api-s1-g3',
  },
  servers: [
   {
    url: `http://localhost:${PORT}`,
   },
  ],
 },
 apis: ['./src/routes/*.js'],
};
