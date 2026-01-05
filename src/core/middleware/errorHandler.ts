import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors';
import { HTTP_STATUS, ERROR_MESSAGES } from '../../shared/constants';

export const errorHandler = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }

  // For unhandled errors
  console.error('Unhandled Error:', err);
  return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
