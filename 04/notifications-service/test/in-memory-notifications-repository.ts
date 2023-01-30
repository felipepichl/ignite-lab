import { Notification } from '../src/application/entities/notification';
import { NotificationsRepository } from '../src/application/repositories/notifications-repository';

class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { InMemoryNotificationsRepository };
