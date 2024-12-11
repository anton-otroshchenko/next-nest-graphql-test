import * as dotenv from 'dotenv';

dotenv.config();

export const {
  DATABASE_USER,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  API_SECRET_KEY,
} = process.env;
