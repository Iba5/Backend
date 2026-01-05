import { Repository } from './base.repository';
import { Registration } from '../../registration/models/registration.model';
import { RegistrationStatus } from '../../../shared/enums';

export class RegistrationRepository extends Repository<Registration> {
  protected tableName = 'registrations';

  async findByEvent(eventId: string): Promise<Registration[]> {
    // TODO: Implement event filter
    console.log('Finding registrations by event:', eventId);
    return [];
  }

  async findByUser(userId: string): Promise<Registration[]> {
    // TODO: Implement user filter
    console.log('Finding registrations by user:', userId);
    return [];
  }

  async findByEventAndUser(eventId: string, userId: string): Promise<Registration | null> {
    // TODO: Implement combined filter
    console.log('Finding registration by event and user:', eventId, userId);
    return null;
  }

  async findByStatus(status: RegistrationStatus): Promise<Registration[]> {
    // TODO: Implement status filter
    console.log('Finding registrations by status:', status);
    return [];
  }
}
