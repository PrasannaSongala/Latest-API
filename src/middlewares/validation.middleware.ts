// src/middlewares/validation.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { HttpException } from '../exceptions/HttpException'; // Adjust this path if necessary

export const validationMiddleware = (type: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const object = plainToClass(type, req.body);
    
    const errors = await validate(object);
    if (errors.length > 0) {
      const messages = errors.map((error) => Object.values(error.constraints || {}).join(', '));
      throw new HttpException(400, `Validation failed: ${messages.join(', ')}`);
    }

    next();
  };
};
