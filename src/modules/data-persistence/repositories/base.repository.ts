/**
 * Base repository interface for CRUD operations
 */
export interface BaseRepository<T> {
  findById(id: string): Promise<T | null>;
  findAll(page?: number, limit?: number): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

/**
 * Abstract base repository implementation
 * Provides common CRUD operations
 */
export abstract class Repository<T> implements BaseRepository<T> {
  protected abstract tableName: string;

  async findById(id: string): Promise<T | null> {
    // TODO: Implement database query
    console.log(`Finding ${this.tableName} by id:`, id);
    return null;
  }

  async findAll(page: number = 1, limit: number = 10): Promise<T[]> {
    // TODO: Implement database query with pagination
    console.log(`Finding all ${this.tableName}, page:`, page, 'limit:', limit);
    return [];
  }

  async create(data: Partial<T>): Promise<T> {
    // TODO: Implement database insert
    console.log(`Creating ${this.tableName}:`, data);
    throw new Error('Not implemented');
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    // TODO: Implement database update
    console.log(`Updating ${this.tableName} ${id}:`, data);
    throw new Error('Not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO: Implement database delete
    console.log(`Deleting ${this.tableName}:`, id);
  }
}
