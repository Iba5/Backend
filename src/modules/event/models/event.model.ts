import { EventStatus, EventCategory } from '../../../shared/enums';

export class Event {
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

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.status = data.status || EventStatus.DRAFT;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.venue = data.venue;
    this.capacity = data.capacity;
    this.registeredCount = data.registeredCount || 0;
    this.organizerId = data.organizerId;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this.category,
      status: this.status,
      startDate: this.startDate,
      endDate: this.endDate,
      venue: this.venue,
      capacity: this.capacity,
      registeredCount: this.registeredCount,
      organizerId: this.organizerId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
