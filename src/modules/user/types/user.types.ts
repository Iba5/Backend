import { UserRole } from '../../../shared/enums';

export interface CreateUserDto {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role?: UserRole;
}

export interface UpdateUserDto {
  username?: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
}

export interface UserResponseDto {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
