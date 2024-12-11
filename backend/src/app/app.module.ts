import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from '../posts/posts.module';
import { dataSourceOptions } from "../../data-source";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from "@nestjs/apollo";
import { AuthMiddleware } from "../common/middleware/auth/auth";
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./src/posts/posts.graphql'],
      autoSchemaFile: true,
      playground: true,
      debug: true,
      driver: ApolloDriver
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
