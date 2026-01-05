import { Repository } from './base.repository';
import { Event } from '../../event/models/event.model';
import { EventStatus, EventCategory } from '../../../shared/enums';

export class EventRepository extends Repository<Event> {
  protected tableName = 'events';

  async findByStatus(status: EventStatus): Promise<Event[]> {
    // TODO: Implement status filter
    console.log('Finding events by status:', status);
    return [];
  }

  async findByCategory(category: EventCategory): Promise<Event[]> {
    // TODO: Implement category filter
    console.log('Finding events by category:', category);
    return [];
  }

  async findByOrganizer(organizerId: string): Promise<Event[]> {
    // TODO: Implement organizer filter
    console.log('Finding events by organizer:', organizerId);
    return [];
  }
}
