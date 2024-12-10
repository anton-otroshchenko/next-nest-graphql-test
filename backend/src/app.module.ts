import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import {dataSourceOptions} from "../data-source";
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver} from "@nestjs/apollo";

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
export class AppModule {}
