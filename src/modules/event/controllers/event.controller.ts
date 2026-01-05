import { Request, Response, NextFunction } from 'express';
import { EventService } from '../services/event.service';
import { ResponseHandler } from '../../../core/utils';
import { asyncHandler } from '../../../core/middleware';
import { CreateEventDto, UpdateEventDto } from '../types/event.types';
import { EventStatus, EventCategory } from '../../../shared/enums';

export class EventController {
  private eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  getEventById = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const event = await this.eventService.getEventById(id);
    return ResponseHandler.success(res, event);
  });

  getAllEvents = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const filters = {
      status: req.query.status as EventStatus,
      category: req.query.category as EventCategory,
      organizerId: req.query.organizerId as string,
    };
    const events = await this.eventService.getAllEvents(page, limit, filters);
    return ResponseHandler.success(res, events);
  });

  createEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const createEventDto: CreateEventDto = req.body;
    const event = await this.eventService.createEvent(createEventDto);
    return ResponseHandler.created(res, event);
  });

  updateEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const updateEventDto: UpdateEventDto = req.body;
    const event = await this.eventService.updateEvent(id, updateEventDto);
    return ResponseHandler.success(res, event);
  });

  deleteEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    await this.eventService.deleteEvent(id);
    return ResponseHandler.success(res, null, 'Event deleted successfully');
  });

  publishEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const event = await this.eventService.publishEvent(id);
    return ResponseHandler.success(res, event, 'Event published successfully');
  });

  cancelEvent = asyncHandler(async (req: Request, res: Response, _next: NextFunction) => {
    const { id } = req.params;
    const event = await this.eventService.cancelEvent(id);
    return ResponseHandler.success(res, event, 'Event cancelled successfully');
  });
}
