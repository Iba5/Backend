import { RegistrationStatus } from '../../../shared/enums';

export interface CreateRegistrationDto {
  eventId: string;
  userId: string;
  additionalInfo?: string;
}

export interface UpdateRegistrationDto {
  status?: RegistrationStatus;
  additionalInfo?: string;
}

export interface RegistrationResponseDto {
  id: string;
  eventId: string;
  userId: string;
  status: RegistrationStatus;
  additionalInfo?: string;
  registeredAt: Date;
  updatedAt: Date;
}
