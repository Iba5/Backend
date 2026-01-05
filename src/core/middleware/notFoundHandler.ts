import { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../../shared/constants';

export const notFoundHandler = (req: Request, res: Response, _next: NextFunction) => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
};
