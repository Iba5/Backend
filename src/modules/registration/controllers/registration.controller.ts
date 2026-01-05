import { Request, Response, NextFunction } from 'express';
import { RegistrationService } from '../services/registration.service';
import { ResponseHandler } from '../../../core/utils';
import { asyncHandler } from '../../../core/middleware';
import { CreateRegistrationDto } from '../types/registration.types';

export class RegistrationController {
  private registrationService: RegistrationService;

  constructor() {
    this.registrationService = new RegistrationService();
  }

  registerForEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const createRegistrationDto: CreateRegistrationDto = req.body;
    const registration = await this.registrationService.registerForEvent(createRegistrationDto);
    return ResponseHandler.created(res, registration, 'Registration successful');
  });

  getRegistrationById = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const registration = await this.registrationService.getRegistrationById(id);
    return ResponseHandler.success(res, registration);
  });

  getEventRegistrations = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { eventId } = req.params;
    const registrations = await this.registrationService.getEventRegistrations(eventId);
    return ResponseHandler.success(res, registrations);
  });

  getUserRegistrations = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { userId } = req.params;
    const registrations = await this.registrationService.getUserRegistrations(userId);
    return ResponseHandler.success(res, registrations);
  });

  cancelRegistration = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    await this.registrationService.cancelRegistration(id);
    return ResponseHandler.success(res, null, 'Registration cancelled successfully');
  });

  approveRegistration = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const registration = await this.registrationService.approveRegistration(id);
    return ResponseHandler.success(res, registration, 'Registration approved successfully');
  });

  rejectRegistration = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const registration = await this.registrationService.rejectRegistration(id);
    return ResponseHandler.success(res, registration, 'Registration rejected successfully');
  });
}
