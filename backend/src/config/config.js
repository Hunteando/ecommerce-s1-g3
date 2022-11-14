import { config } from 'dotenv';

config();

export const PORT = process.env.PORT;
export const DATABASEPORT = process.env.DATABASEPORT;
export const HOST = process.env.HOST;
export const USERDATABASE = process.env.USERDATABASE;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
export const JWTSECRET = process.env.JWTSECRET;
