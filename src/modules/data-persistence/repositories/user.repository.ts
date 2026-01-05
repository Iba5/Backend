import { Repository } from './base.repository';
import { User } from '../../user/models/user.model';

export class UserRepository extends Repository<User> {
  protected tableName = 'users';

  async findByEmail(email: string): Promise<User | null> {
    // TODO: Implement email lookup
    console.log('Finding user by email:', email);
    return null;
  }

  async findByUsername(username: string): Promise<User | null> {
    // TODO: Implement username lookup
    console.log('Finding user by username:', username);
    return null;
  }
}
