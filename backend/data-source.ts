import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './src/posts/entities/post.entity';

export const dataSourceOptions : DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'posts1',
  entities: [Post],
  synchronize: false,
  logging: true,
  migrations: ["dist/migrations/*.js"],
}

export const AppDataSource = new DataSource(dataSourceOptions);