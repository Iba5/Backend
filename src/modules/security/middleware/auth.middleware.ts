import { Response, NextFunction } from 'express';
import { UnauthorizedError, ForbiddenError } from '../../../core/errors';
import { AuthRequest } from '../../../shared/interfaces';
import { UserRole } from '../../../shared/enums';

export class AuthMiddleware {
  /**
   * Middleware to authenticate JWT tokens
   * This is a placeholder - implement actual JWT verification
   */
  static authenticate(req: AuthRequest, _res: Response, next: NextFunction) {
    try {
      // TODO: Implement JWT token verification
      // For now, this is a placeholder
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        throw new UnauthorizedError('No token provided');
      }

      // TODO: Verify token and extract user information
      // req.user = decodedUser;

      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   * Middleware to authorize based on user roles
   */
  static authorize(...roles: UserRole[]) {
    return (req: AuthRequest, _res: Response, next: NextFunction) => {
      try {
        if (!req.user) {
          throw new UnauthorizedError('User not authenticated');
        }

        if (!roles.includes(req.user.role)) {
          throw new ForbiddenError('Insufficient permissions');
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
