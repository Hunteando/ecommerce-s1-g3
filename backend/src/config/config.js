import { config } from 'dotenv';

config();

export const SERVERPORT = process.env.SERVERPORT;
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
export const JWTSECRET = process.env.JWTSECRET;
