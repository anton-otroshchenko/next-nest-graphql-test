import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { API_SECRET_KEY } from "../../config/config";
import { whiteRoutes } from "../../constants/white-routes/white-routes";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const operationName = req.body?.operationName;

    if (operationName && !whiteRoutes.includes(operationName)) {
      const apiKey = req.headers['x-api-key'];

      if (apiKey !== API_SECRET_KEY) {
        throw new UnauthorizedException({
          errors: [{ message: 'Unauthorized' }],
        });
      }
    }

    next();
  }
}
