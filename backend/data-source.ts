import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './src/posts/entities/post.entity';
import { DATABASE_HOST, DATABASE_PORT, DATABASE_PASSWORD, DATABASE_USER, DATABASE_NAME } from "./src/common/config/config";

export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [Post],
  synchronize: false,
  logging: true,
  migrations: ["dist/migrations/*.js"],
};

export const AppDataSource = new DataSource(dataSourceOptions);
