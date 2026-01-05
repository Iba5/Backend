import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { ResponseHandler } from '../../../core/utils';
import { asyncHandler } from '../../../core/middleware';
import { CreateUserDto, UpdateUserDto } from '../types/user.types';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUserById = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const user = await this.userService.getUserById(id);
    return ResponseHandler.success(res, user);
  });

  getAllUsers = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const users = await this.userService.getAllUsers(page, limit);
    return ResponseHandler.success(res, users);
  });

  createUser = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const createUserDto: CreateUserDto = req.body;
    const user = await this.userService.createUser(createUserDto);
    return ResponseHandler.created(res, user);
  });

  updateUser = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const updateUserDto: UpdateUserDto = req.body;
    const user = await this.userService.updateUser(id, updateUserDto);
    return ResponseHandler.success(res, user);
  });

  deleteUser = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    await this.userService.deleteUser(id);
    return ResponseHandler.success(res, null, 'User deleted successfully');
  });
}
