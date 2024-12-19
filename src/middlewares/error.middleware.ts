// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException'; // Adjust this path if necessary

const errorMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  
  // Log error (can be enhanced for different environments)
  console.error(err);

  res.status(statusCode).json({
    status: 'error',
    message,
    //  stack trace for development environments
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export default errorMiddleware;
