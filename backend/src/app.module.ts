import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { dataSourceOptions } from "../data-source";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from "@nestjs/apollo";
import { ConfigModule } from '@nestjs/config';
import * as process from "node:process";

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./src/posts/posts.graphql'],
      autoSchemaFile: true,
      playground: true,
      debug: true,
      driver: ApolloDriver
    }),
    TypeOrmModule.forRoot(dataSourceOptions(
        {
          DATABASE_NAME: process.env.DATABASE_NAME,
          DATABASE_HOST: process.env.DATABASE_HOST,
          DATABASE_PORT: process.env.DATABASE_PORT,
          DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
          DATABASE_USER: process.env.DATABASE_USER,
        }
    )),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
