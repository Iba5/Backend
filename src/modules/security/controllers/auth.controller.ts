import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { ResponseHandler } from '../../../core/utils';
import { asyncHandler } from '../../../core/middleware';
import { LoginDto, RegisterDto } from '../types/auth.types';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  login = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const loginDto: LoginDto = req.body;
    const tokens = await this.authService.login(loginDto);
    return ResponseHandler.success(res, tokens, 'Login successful');
  });

  register = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const registerDto: RegisterDto = req.body;
    const tokens = await this.authService.register(registerDto);
    return ResponseHandler.created(res, tokens, 'Registration successful');
  });

  refreshToken = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { refreshToken } = req.body;
    const tokens = await this.authService.refreshToken(refreshToken);
    return ResponseHandler.success(res, tokens, 'Token refreshed successfully');
  });

  logout = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const userId = req.body.userId; // Should come from authenticated user
    await this.authService.logout(userId);
    return ResponseHandler.success(res, null, 'Logout successful');
  });
}
