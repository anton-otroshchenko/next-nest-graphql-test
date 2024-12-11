import * as process from "node:process";

export const dbConfig = {
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_USER: process.env.DATABASE_USER,
};