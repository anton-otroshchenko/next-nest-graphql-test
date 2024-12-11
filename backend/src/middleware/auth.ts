import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as process from "node:process";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const isGraphQLRequest = req.body?.operationName === 'CreatePost';

    if (isGraphQLRequest) {
      const apiKey = req.headers['x-api-key'];

      if (apiKey !== process.env.API_SECRET_KEY) {
        throw new UnauthorizedException({
          errors: [{ message: 'Unauthorized' }],
        });
      }
    }

    next();
  }
}
