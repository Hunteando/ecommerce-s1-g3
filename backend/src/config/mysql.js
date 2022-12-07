import { createPool } from 'mysql2/promise';
import { DATABASEPORT, HOST, USERDATABASE, PASSWORD, DATABASE } from './config.js';

export const pool = createPool({
 database: DATABASE,
 host: HOST,
 password: PASSWORD,
 port: DATABASEPORT,
 user: USERDATABASE,
 ssl: {
  rejectUnauthorized: false,
 },
});
