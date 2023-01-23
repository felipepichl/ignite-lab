import { Notification } from '../entities/notification';

abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
}

export { NotificationsRepository };
