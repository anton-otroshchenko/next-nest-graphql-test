import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './src/posts/entities/post.entity';
import {DbConfig} from "./src/types/config-db.type";
import { dbConfig } from "./src/config/db-config";

export const dataSourceOptions = (config: DbConfig): DataSourceOptions => ({
  type: "postgres",
  host: config.DATABASE_HOST,
  port: Number(config.DATABASE_PORT),
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  entities: [Post],
  synchronize: false,
  logging: true,
  migrations: ["dist/migrations/*.js"],
});


export const AppDataSource = new DataSource(dataSourceOptions(dbConfig));