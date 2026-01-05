import { EventStatus, EventCategory } from '../../../shared/enums';

export interface CreateEventDto {
  title: string;
  description: string;
  category: EventCategory;
  startDate: Date;
  endDate: Date;
  venue: string;
  capacity: number;
  organizerId: string;
}

export interface UpdateEventDto {
  title?: string;
  description?: string;
  category?: EventCategory;
  startDate?: Date;
  endDate?: Date;
  venue?: string;
  capacity?: number;
  status?: EventStatus;
}

export interface EventResponseDto {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  startDate: Date;
  endDate: Date;
  venue: string;
  capacity: number;
  registeredCount: number;
  organizerId: string;
  createdAt: Date;
  updatedAt: Date;
}
