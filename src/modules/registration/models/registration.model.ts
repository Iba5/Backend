import { RegistrationStatus } from '../../../shared/enums';

export interface RegistrationConstructorData {
  id: string;
  eventId: string;
  userId: string;
  status?: RegistrationStatus;
  additionalInfo?: string;
  registeredAt?: Date;
  updatedAt?: Date;
}

export class Registration {
  id: string;
  eventId: string;
  userId: string;
  status: RegistrationStatus;
  additionalInfo?: string;
  registeredAt: Date;
  updatedAt: Date;

  constructor(data: RegistrationConstructorData) {
    this.id = data.id;
    this.eventId = data.eventId;
    this.userId = data.userId;
    this.status = data.status || RegistrationStatus.PENDING;
    this.additionalInfo = data.additionalInfo;
    this.registeredAt = data.registeredAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      eventId: this.eventId,
      userId: this.userId,
      status: this.status,
      additionalInfo: this.additionalInfo,
      registeredAt: this.registeredAt,
      updatedAt: this.updatedAt,
    };
  }
}
